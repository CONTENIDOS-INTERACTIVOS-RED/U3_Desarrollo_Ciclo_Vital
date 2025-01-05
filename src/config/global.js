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
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bordignon, N. A. (2005). El desarrollo psicosocial de Eric Erikson. El diagrama epigenético del adulto.',
      link: '',
    },
    {
      referencia:
        'Fernández, L. (2018). Sigmund Freud. Praxis filosófica, (46), 11-41.',
      link: '',
    },
    {
      referencia: 'Font, P. (1990). Desarrollo psicosexual.',
      link: '',
    },
    {
      referencia:
        'Freijo, E.A (2004). Familia y desarrollo. Editorial Person. (pp. 97-123)',
      link: '',
    },
    {
      referencia:
        'Galimberti. U (2002). Diccionario de Psicología. Editorial siglo veintiuno editores S.A de C.V.',
      link: '',
    },
    {
      referencia:
        'Glover, M. (2024, noviembre 8). Complejo de Edipo en adultos: síntomas, solución y consecuencias. Psicología-online.',
      link:
        'https://www.psicologia-online.com/complejo-de-edipo-en-adultos-sintomas-solucion-y-consecuencias-512.html',
    },
    {
      referencia:
        'Gonzalez, S. J. (2023, julio 28). ¿Cómo influye el entorno en el comportamiento? La mente es maravillosa.',
      link:
        'https://lamenteesmaravillosa.com/como-influye-el-entorno-en-el-comportamiento/#google_vignette',
    },
    {
      referencia:
        'Gudiño Negrete, X. A. (2021). Guía psicoeducativa para facilitar el logro de identidad, basada en la teoría de los estados del desarrollo del Yo de James Marcia.',
      link: '',
    },
    {
      referencia:
        'Harris, J. R. (2000). El mito de la educación: por qué los padres pueden influir muy poco en los hijos. Grijalbo Mondadori.',
      link: '',
    },
    {
      referencia:
        'Locke, J. (2020). Ensayo sobre el entendimiento humano. Editorial Verbum.',
      link: '',
    },
    {
      referencia:
        'Moneta, M. (2014). Apego y pérdida: redescubriendo a John Bowlby. Revista chilena de pediatría, 85(3), 265-268.',
      link: 'https://dx.doi.org/10.4067/S0370-41062014000300001',
    },
    {
      referencia:
        'Murillo-Casas, Á., Priegue-Caamaño, D., & do Carmen Cambeiro-Lourido, M. (2015). Una aproximación a los estilos educativos parentales como prácticas socializadoras. Revista de estudios e investigación en psicología y educación, 083-087.',
      link: '',
    },
    {
      referencia:
        'Nicuesa, M. (2017, noviembre 7). En qué consiste el complejo de Electra y sus síntomas. Psicología-online.',
      link:
        'https://www.psicologia-online.com/en-que-consiste-el-complejo-de-electra-y-sus-sintomas-436.html',
    },
    {
      referencia:
        'Orengo, J. (2016). Albert Bandura teoría de aprendizaje social.',
      link: '',
    },
    {
      referencia:
        'Pérez, F. J. M. (2022). La identidad del yo y la idea del bien moral según Charles Taylor. Estudios Filosóficos, 71(207).',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). Identidad. En Diccionario de la lengua española.',
      link: 'https://dle.rae.es/cultura?m=form',
    },
    {
      referencia:
        'Seidmann, S. (2015). Identidad personal y subjetividad social: educación y constitución subjetiva. Cadernos de pesquisa, 45, 344-357.',
      link: '',
    },
    {
      referencia:
        'Syed, M. y McLean, K. C. (2017). Teoría del desarrollo psicosocial de Erikson.',
      link: '',
    },
    {
      referencia:
        'Tió, J. (2020). La formación del sentimiento de identidad en la adolescencia. Temas de psicoanálisis, 20, 1-29.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Apego',
      significado:
        'Es un vínculo emocional profundo y duradero que se establece entre un bebé y su cuidador principal, generalmente la madre. Este vínculo es fundamental para el desarrollo emocional y social del niño, ya que proporciona un sentido de seguridad y confianza en el mundo. El tipo de apego que se desarrolla en la infancia influirá en las relaciones interpersonales del individuo a lo largo de su vida.',
    },
    {
      termino: 'Conducta',
      significado:
        'La expresión observable de los procesos mentales internos de un individuo. Incluye tanto acciones físicas como verbales, y está influenciada por factores biológicos, psicológicos y sociales.',
    },
    {
      termino: 'Emociones',
      significado:
        'Son respuestas complejas que involucran componentes fisiológicos, cognitivos y conductuales. Son reacciones subjetivas a eventos o estímulos internos o externos. Las emociones desempeñan un papel crucial en la adaptación del individuo a su entorno y en la regulación de su conducta.',
    },
    {
      termino: 'Entorno',
      significado:
        'Se refiere a todos los factores externos que influyen en el desarrollo de un individuo. Incluye tanto el entorno físico (hogar, escuela, comunidad) como el entorno social (familia, amigos, cultura).',
    },
    {
      termino: 'Identidad',
      significado:
        'Es el sentido de uno mismo, que se desarrolla a lo largo de la vida a través de las interacciones con los demás y las experiencias personales. Incluye aspectos como la autoimagen, la autoestima, el sentido de pertenencia y los roles sociales.',
    },
    {
      termino: 'Inteligencia',
      significado:
        'Capacidad de adquirir y aplicar conocimientos, de resolver problemas y de adaptarse a nuevas situaciones. Existen diferentes teorías sobre la inteligencia, pero en general se considera una capacidad multifacética que incluye habilidades como la lógica, la creatividad, la memoria y la inteligencia emocional.',
    },
    {
      termino: 'Psicoanálisis',
      significado:
        'Es una teoría y una terapia psicológica desarrollada por Sigmund Freud. Se centra en el estudio de la mente inconsciente y en cómo los conflictos inconscientes influyen en la conducta y las emociones. El psicoanálisis utiliza técnicas como la asociación libre y la interpretación de los sueños para explorar el inconsciente y promover el cambio terapéutico.',
    },
    {
      termino: 'Psicosexual',
      significado:
        'El término psicosexual se refiere a la teoría freudiana del desarrollo de la personalidad, que enfatiza la importancia de la sexualidad en las primeras etapas de la vida.',
    },
    {
      termino: 'Psicosocial',
      significado:
        'Se refiere a la interacción entre los factores psicológicos y sociales que influyen en el desarrollo humano. Erik Erikson, uno de los principales teóricos del desarrollo psicosocial, propuso una teoría que describe ocho etapas del desarrollo a lo largo de la vida, cada una de las cuales se caracteriza por una crisis psicosocial específica.',
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
