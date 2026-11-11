# Zentrix – Laboratorio IV: CRUD con React, Hooks, helpFetch y json-server

Plataforma web para clínicas y consultorios. Este laboratorio implementa el CRUD
(Crear, Leer, Actualizar, Eliminar) de **Servicios, Pacientes, Médicos y Citas**.

## Tecnologías
React + Vite · Hooks (`useState`, `useEffect`) · helper `helpFetch` · Bootstrap 5 · json-server

## Estructura
- `src/index.jsx` → punto de entrada, monta `Negocio.jsx`
- `src/Negocio.jsx` → página principal (menú + módulos)
- `src/components/crud/` → `CrudAPI`, `CrudForm`, `CrudTable`, `Loader`, `Message`, `config.js`
- `src/helpers/helpFetch.js` → peticiones GET, POST, PUT, DELETE
- `src/api/db.json` → base de datos ficticia

## Cómo ejecutar
```bash
npm install
npm start
```
- React: http://localhost:5173
- API json-server: http://localhost:3004

## Integrantes
Angye Bravo Tamayo · Carlos Daza Chacón · Rafael Pastor Raviero · Dana Salazar Suárez
