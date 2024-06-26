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
      'Administro con exito y precisión a pacientes, junto con agendar de manera eficaz cada cita para darle la mejor experiencia al paciente'
  },
  {
    time: '2019 - 2021',
    title: 'Asistente de presidencia',
    company: 'RDL',
    description:
      'Se logró de manera exitosa la administracion de inventario, deposito y pedidos.Atencion al cliente. Manejo de Excel y A2 (Software de facturación)'
  },
  {
    time: '2013 - 2015',
    company: 'Clínica Muñoz',
    title:
      'Secretaria personal de consultorio médico en el ámbito de Cardiología',
    description:
      'Se administro de manera eficaz a pacientes de distintos grupos de edad, así como se programaron citas médicas siempre velando por la comodidad del paciente'
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
      'Tibisay Partidas se destacó como una figura integral en la papelería al por mayor. Su versatilidad se reflejaba en su papel crucial como asistente presidencial, donde demostró habilidades administrativas excepcionales. Además, su destreza en ventas, tanto al por mayor como al detalle, resalta su capacidad para adaptarse a diversas funciones. Tibisay también se encargó de la administración del depósito e inventario, mostrando un compromiso sólido con la eficiencia operativa. Su destreza en la facturación, la preparación de pedidos y la atención al cliente, combinada con un manejo de Excel acorde al trabajo, la convierten en un activo indispensable para el éxito del negocio.',
    charge: 'Presidente de RDL'
  },
  {
    author: 'Ricardo González',
    rate: 5,
    review:
      'Tibisay es realmente amigable y atenta. Su habilidad para gestionar tareas utilizando Excel es impresionante la cual mejora significativamente la eficiencia del consultorio. Además, su atención al paciente es ejemplar; brinda un trato amable y profesional que contribuye a la satisfacción de los pacientes. Su destreza técnica, calidad en el servicio y sus conocimientos en farmacología, hacen que sea una profesional valorada en el equipo médico.',
    charge: 'Médico Cardiólogo'
  }
]

export const studies = [
  {
    time: '2020',
    company: 'Centro Educativo Logros',
    title: 'Asistente de Farmacia Online',
    abilities: [
      'Trabajo en equipo',
      'Excelente atención al cliente',
      'Adquicisión de conocimiento actualizado de normas y precedimientos para la venta de medicamentos',
      'Adquicisión de conocimientos sobre inventario de productos y guía de especialidades farmacologicas'
    ]
  },
  {
    time: '2021',
    company: 'Centro Educativo Logros',
    title: 'Asistente de Farmacia Computarizado',
    abilities: [
      'Conocimiento del perfil profesional del Asistente de Farmacia',
      'Aplicación de las funciones pricipales del Asistente de Farmacia',
      'Manejo de estrategias de la buena atención al cliente',
      'Operación del sistema computarizado del área de farmacia'
    ]
  }
]
