export type TimeLineItem = {
  title: string
  actual?: boolean
  company?: string
  description: string
  time: string
}

export type Review = {
  author: string
  rate: number
  review: string
  charge: string
}

export const timelineData: TimeLineItem[] = [
  {
    time: '2022',
    actual: true,
    title: 'Asistente de Médico en Ecuador',
    description:
      'Administro con exito y precisión a pacientes, junto con programar de manera eficaz cada cita para darle la mejor experiencia al paciente'
  },
  {
    time: '2019 - 2021',
    title:
      'Asistente de presidencia y administración de papelería al detal y al mayor',
    company: 'RDL',
    description:
      'Se administró de manera exitosa el inventario y los diferentes pedidos al personas naturales como a mayoristas, junto con una excelente atención al cliente que hacía que los clientes vuelvan a comprar'
  },
  {
    time: '2013 - 2015',
    company: 'Clínica Muñoz',
    title:
      'Secretaria personal de consultorio médico en el ámbito de Cardiología',
    description:
      'Se administro de manera eficáz a pacientes de distintos grupos de edad, así como se programaron citas médicas siempre velando por la comodidad del paciente'
  },
  {
    time: '2005 - 2007',
    title: 'Administradora de un centro de conexiones movistar',
    description:
      'Se concretaron con exito mas de 1000 ventas de teléfonos celulares, además de una excelente atención al cliente'
  },
  {
    time: '1998 - 1999',
    title:
      'Asistente administrativo a la presidencia de ventas mayoristas y a personas naturales',
    description:
      'Se utilizó el programa Saint Administrativo para ordenar las ventas, compras, inventario y los cobros del banco'
  },
  {
    time: '1992 - 1993',
    company: 'Switch-on',
    title: 'Pasantias',
    description:
      'Se participó en las áreas de ventas, atención al cliente, asesoría y ensamblaje de equipos de computación'
  }
]

export const reviewsData: Review[] = [
  {
    author: 'Edré Narvaéz',
    rate: 5,
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro praesentium alias eum ut delectus sint dolorum doloremque unde, provident placeat iste facere quae atque minus animi earum magni, sed iusto!',
    charge: 'Presidente de RDL'
  },
  {
    author: 'Ricardo González',
    rate: 5,
    review:
      'Tibisay es realmente excepcional. Su habilidad para gestionar tareas utilizando Excel es impresionante y mejora significativamente la eficiencia del consultorio. Además, su atención al paciente es ejemplar; brinda un trato amable y profesional que contribuye a la satisfacción de los pacientes. Su destreza técnica y calidad en el servicio hacen que sea una pieza invaluable en el equipo médico.',
    charge: 'Médico Cardiólogo'
  }
]
