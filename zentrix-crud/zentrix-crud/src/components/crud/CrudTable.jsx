const CrudTable = ({ config, items, setEditData, deleteItem }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header">{config.titulo} registrados ({items.length})</div>
      <div className="table-responsive">
        <table className="table table-striped table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              {config.campos.map(c => <th key={c.name}>{c.label}</th>)}
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={config.campos.length + 2} className="text-center text-muted">
                  No hay datos
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  {config.campos.map(c => (
                    <td key={c.name}>
                      {c.name === "precio"
                        ? Number(item[c.name]).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })
                        : item[c.name]}
                    </td>
                  ))}
                  <td className="text-center text-nowrap">
                    <button className="btn btn-sm btn-outline-warning me-2"
                            onClick={() => setEditData(item)}>Editar</button>
                    <button className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteItem(item.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CrudTable
