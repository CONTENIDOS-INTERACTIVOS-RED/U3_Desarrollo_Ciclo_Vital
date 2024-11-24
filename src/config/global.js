export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría del desarrollo psicosocial de Erikson',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría de Erik Erikson',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo de la identidad en la adolescencia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Influencia del entorno social y familiar en la conducta y emociones de los adolescentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Papel del entorno familiar',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Papel del entorno familiar',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Pograma_Desarrollo_ciclo vital_Unidad_3.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Argumedos De La Ossa, C., & Solórzano Santos, M. D. (2024). Conductas antisociales y delictivas en una muestra de adolescentes colombianos entre 11 y 17 años pertenecientes a una región de la Costa Caribe. Revista Logos, Ciencia & Tecnología, 16(1), 32-51.',
      link: 'https://www.redalyc.org/journal/5177/517777358003/',
    },
    {
      referencia:
        'Bolívar-Ramírez, M., Cruz, S. G. R., & Prieto, B. L. A. Regulación emocional en adolescentes: importancia e influencia del contexto.',
      link: '',
    },
    {
      referencia:
        'Cáceres Lembcke, E. B., & Otoya Puccio, K. M. (2021). Construcción de la identidad en la adolescencia a través del uso de redes sociales.',
      link:
        'CACERES LEMBCKE, ELENA BEATRIZ Y OTOYA PUCCIO, KARINA_ 2021 (1).pdf',
    },
    {
      referencia:
        'González-Grandón, X., Chao Rebolledo, C., & Patiño Domínguez, H. (2021). El juego en la educación: una vía para el desarrollo del bienestar socioemocional en contextos de violencia. Revista Latinoamericana de Estudios Educativos (México), LI(2), 233-270.',
      link: 'https://www.redalyc.org/journal/270/27065158006/',
    },
    {
      referencia:
        'Labastida, S. (2021). George H. Mead. Su resurgimiento y su actualidad. Diferencias, 1(11).',
      link:
        'https://www.revista.diferencias.com.ar/index.php/diferencias/article/viewFile/223/144',
    },
    {
      referencia:
        'Villagómez, C. A. V, Bonilla, A. C. J, Bonilla, G.G.P, Torres, G.T. D (2023). El aprendizaje social de Albert Bandura como estrategia de enseñanza de educación para la ciudadanía. págs. 1286-1307.',
      link: 'https://dialnet.unirioja.es',
    },
  ],
  glosario: [
    {
      termino: 'Apego',
      significado:
        'Es un vínculo emocional profundo y duradero que se establece entre un bebé y su cuidador principal, generalmente la madre. Este vínculo es fundamental para el desarrollo emocional y social del niño, ya que proporciona un sentido de seguridad y confianza en el mundo. El tipo de apego que se desarrolla en la infancia influirá en las relaciones interpersonales del individuo a lo largo de su vida',
    },
    {
      termino: 'Conducta',
      significado:
        'La expresión observable de los procesos mentales internos de un individuo. Incluye tanto acciones físicas como verbales, y está influenciada por factores biológicos, psicológicos y sociales',
    },
    {
      termino: 'Emociones',
      significado:
        'Son respuestas complejas que involucran componentes fisiológicos, cognitivos y conductuales. Son reacciones subjetivas a eventos o estímulos internos o externos. Las emociones desempeñan un papel crucial en la adaptación del individuo a su entorno y en la regulación de su conducta',
    },
    {
      termino: 'Entorno',
      significado:
        'Se refiere a todos los factores externos que influyen en el desarrollo de un individuo. Incluye tanto el entorno físico (hogar, escuela, comunidad) como el entorno social (familia, amigos, cultura)',
    },
    {
      termino: 'Identidad',
      significado:
        'Es el sentido de uno mismo, que se desarrolla a lo largo de la vida a través de las interacciones con los demás y las experiencias personales. Incluye aspectos como la autoimagen, la autoestima, el sentido de pertenencia y los roles sociales',
    },
    {
      termino: 'Inteligencia',
      significado:
        'Capacidad de adquirir y aplicar conocimientos, de resolver problemas y de adaptarse a nuevas situaciones. Existen diferentes teorías sobre la inteligencia, pero en general se considera una capacidad multifacética que incluye habilidades como la lógica, la creatividad, la memoria y la inteligencia emocional',
    },
    {
      termino: 'Psicoanálisis',
      significado:
        'Es una teoría y una terapia psicológica desarrollada por Sigmund Freud. Se centra en el estudio de la mente inconsciente y en cómo los conflictos inconscientes influyen en la conducta y las emociones. El psicoanálisis utiliza técnicas como la asociación libre y la interpretación de los sueños para explorar el inconsciente y promover el cambio terapéutico',
    },
    {
      termino: 'Psicosexual',
      significado:
        'El término psicosexual se refiere a la teoría freudiana del desarrollo de la personalidad, que enfatiza la importancia de la sexualidad en las primeras etapas de la vida',
    },
    {
      termino: 'Psicosocial',
      significado:
        'Se refiere a la interacción entre los factores psicológicos y sociales que influyen en el desarrollo humano. Erik Erikson, uno de los principales teóricos del desarrollo psicosocial, propuso una teoría que describe ocho etapas del desarrollo a lo largo de la vida, cada una de las cuales se caracteriza por una crisis psicosocial específica',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
