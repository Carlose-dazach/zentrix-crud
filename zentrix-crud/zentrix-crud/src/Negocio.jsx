import { useState } from 'react'
import CrudAPI from './components/crud/CrudAPI'
import { entidades } from './components/crud/config'

const Negocio = () => {
  // Qué módulo del negocio se está viendo
  const [modulo, setModulo] = useState("servicios")

  return (
    <>
      {/* Encabezado */}
      <nav className="navbar navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand brand-zentrix mb-0 h1">ZENTRIX</span>
          <span className="navbar-text text-white">Gestión de clínicas y consultorios</span>
        </div>
      </nav>

      <main className="container my-4">
        {/* Menú de módulos */}
        <ul className="nav nav-pills mb-4 flex-wrap">
          {Object.keys(entidades).map(clave => (
            <li className="nav-item" key={clave}>
              <button
                className={`nav-link ${modulo === clave ? "active" : ""}`}
                onClick={() => setModulo(clave)}
              >
                {entidades[clave].titulo}
              </button>
            </li>
          ))}
        </ul>

        {/* key fuerza a React a recargar el CRUD al cambiar de módulo */}
        <CrudAPI key={modulo} config={entidades[modulo]} />
      </main>

      <footer className="text-center text-muted py-3 border-top">
        Zentrix · Universidad Libre · Programación Web VI · 2026-II
      </footer>
    </>
  )
}

export default Negocio
