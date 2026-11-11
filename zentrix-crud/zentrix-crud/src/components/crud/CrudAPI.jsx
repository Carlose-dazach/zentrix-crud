import { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'
import { helpFetch } from '../../helpers/helpFetch'

const CrudAPI = ({ config }) => {
  const API = helpFetch()
  const endpoint = config.endpoint

  const [editData, setEditData] = useState(null)   // registro que se está editando
  const [items, setItems] = useState(null)         // registros de la API
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  // READ: al cargar el componente se piden los datos a la API
  useEffect(() => {
    setLoading(true)
    API.get(endpoint).then(response => {
      if (!response.error) {
        setItems(response)
        setErrorMessage(null)
      } else {
        setItems(null)
        setErrorMessage(response.statusText)
      }
      setLoading(false)
    })
  }, [endpoint])

  // CREATE
  const addItem = (item) => {
    setLoading(true)
    API.post(endpoint, { body: item }).then(response => {
      if (!response.error) {
        setItems([...items, response]) // response trae el id creado por json-server
        setErrorMessage(null)
      } else {
        setErrorMessage(response.statusText)
      }
      setLoading(false)
    })
  }

  // UPDATE
  const editItem = (item) => {
    setLoading(true)
    API.put(endpoint, { body: item }, item.id).then(response => {
      if (!response.error) {
        setItems(items.map(el => (el.id === item.id ? item : el)))
        setEditData(null)
        setErrorMessage(null)
      } else {
        setErrorMessage(response.statusText)
      }
      setLoading(false)
    })
  }

  // DELETE
  const deleteItem = (id) => {
    const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)
    if (!isDelete) return

    setLoading(true)
    API.del(endpoint, id).then(response => {
      if (!response.error) {
        setItems(items.filter(el => el.id !== id))
        setErrorMessage(null)
      } else {
        setErrorMessage(response.statusText)
      }
      setLoading(false)
    })
  }

  return (
    <>
      <h2 className="h4 mb-3">{config.titulo}</h2>
      <CrudForm config={config} addItem={addItem} editItem={editItem}
                editData={editData} setEditData={setEditData} />
      {errorMessage && <Message text={errorMessage} />}
      {loading ? <Loader /> : items && (
        <CrudTable config={config} items={items} setEditData={setEditData} deleteItem={deleteItem} />
      )}
    </>
  )
}

export default CrudAPI
