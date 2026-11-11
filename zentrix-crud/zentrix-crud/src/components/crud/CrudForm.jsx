import { useState, useEffect } from 'react'

const CrudForm = ({ config, addItem, editItem, editData, setEditData }) => {
  // Objeto vacío con todos los campos de la entidad
  const vacio = () => {
    const obj = { id: null }
    config.campos.forEach(c => { obj[c.name] = c.type === "select" ? c.options[0] : "" })
    return obj
  }

  const [formData, setFormData] = useState(vacio())

  // Si se pulsa "Editar" en la tabla, editData trae el registro al formulario
  useEffect(() => {
    if (editData !== null) {
      setFormData(editData)
    } else {
      setFormData(vacio())
    }
  }, [editData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // evita que se recargue la página

    const incompleto = config.campos.some(c => String(formData[c.name]).trim() === "")
    if (incompleto) {
      alert("Por favor complete todos los campos.")
      return
    }

    // El precio se guarda como número
    const datos = { ...formData }
    config.campos.forEach(c => { if (c.type === "number") datos[c.name] = Number(datos[c.name]) })

    if (editData !== null) {
      editItem(datos)            // UPDATE
    } else {
      delete datos.id            // json-server crea el id
      addItem(datos)             // CREATE
      setFormData(vacio())
    }
  }

  const handleCancel = () => {
    setEditData(null)
    setFormData(vacio())
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        {editData ? `Editar ${config.singular}` : `Nuevo ${config.singular}`}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {config.campos.map(c => (
              <div className="col-12 col-md-6 col-lg-4" key={c.name}>
                <label htmlFor={c.name} className="form-label">{c.label}</label>
                {c.type === "select" ? (
                  <select id={c.name} name={c.name} className="form-select"
                          value={formData[c.name]} onChange={handleChange}>
                    {c.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : (
                  <input id={c.name} name={c.name} type={c.type} className="form-control"
                         value={formData[c.name]} onChange={handleChange} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button type="submit" className={`btn ${editData ? "btn-warning" : "btn-success"} me-2`}>
              {editData ? "Actualizar" : "Guardar"}
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CrudForm
