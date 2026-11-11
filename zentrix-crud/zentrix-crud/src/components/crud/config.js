// Aquí se define cada "tabla" de Zentrix. El mismo CRUD sirve para todas.
// endpoint = nombre de la colección en db.json
const ESPECIALIDADES = ["Medicina general", "Pediatría", "Odontología", "Laboratorio"]

export const entidades = {
  servicios: {
    titulo: "Servicios médicos",
    singular: "servicio",
    endpoint: "servicios",
    campos: [
      { name: "nombre", label: "Nombre", type: "text" },
      { name: "descripcion", label: "Descripción", type: "text" },
      { name: "precio", label: "Precio (COP)", type: "number" },
      { name: "disponible", label: "Disponible", type: "select", options: ["Sí", "No"] }
    ]
  },
  pacientes: {
    titulo: "Pacientes",
    singular: "paciente",
    endpoint: "pacientes",
    campos: [
      { name: "nombre", label: "Nombre completo", type: "text" },
      { name: "documento", label: "Documento", type: "text" },
      { name: "correo", label: "Correo", type: "email" },
      { name: "telefono", label: "Teléfono", type: "tel" }
    ]
  },
  medicos: {
    titulo: "Médicos",
    singular: "médico",
    endpoint: "medicos",
    campos: [
      { name: "nombre", label: "Nombre", type: "text" },
      { name: "especialidad", label: "Especialidad", type: "select", options: ESPECIALIDADES },
      { name: "correo", label: "Correo", type: "email" }
    ]
  },
  citas: {
    titulo: "Citas médicas",
    singular: "cita",
    endpoint: "citas",
    campos: [
      { name: "paciente", label: "Paciente", type: "text" },
      { name: "especialidad", label: "Especialidad", type: "select", options: ESPECIALIDADES },
      { name: "fecha", label: "Fecha", type: "date" },
      { name: "hora", label: "Hora", type: "time" },
      { name: "estado", label: "Estado", type: "select", options: ["Pendiente", "Cancelada"] }
    ]
  }
}
