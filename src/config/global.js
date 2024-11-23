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
        titulo: 'Desarrollo cognitivo y del lenguaje en niños y adolescentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo del lenguaje: etapas y factores influyentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas del desarrollo del lenguaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores que influyen en el desarrollo del lenguaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Relación entre el desarrollo del lenguaje y el desarrollo cognitivo',
            hash: 't_2_3',
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
        download: 'downloads/Pograma_Desarrollo_ciclo vital_Unidad_2.pdf',
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
        'Anaya, N. C. (2004). Diccionario de psicología. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Aparicio Aznar, M., & Igualada, A. (2019). El desarrollo del lenguaje y la comunicación en la infancia. Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106676?page=7',
    },
    {
      referencia:
        'Bruner, J. S. (2018). Desarrollo cognitivo y educación. Ediciones Morata.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119515',
    },
    {
      referencia:
        'Carmona, V. (2023, mayo 15). Descubre los factores clave que influyen en el lenguaje. Lingüística.',
      link:
        'https://linguistica.gea.lat/descubre-los-factores-clave-que-influyen-en-el-lenguaje/',
    },
    {
      referencia:
        'Feldman, R. (2015). Modelo del desarrollo cognoscitivo de Piaget.',
      link: '',
    },
    {
      referencia:
        'García, J. G. (2020). El constructivismo en la educación y el aporte de la teoría sociocultural de Vygotsky para comprender la construcción del conocimiento en el ser humano. Dilemas contemporáneos: Educación, política y valores.',
      link: '',
    },
    {
      referencia: 'Piaget, J. (1976). Desarrollo cognitivo. Fomtaine.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. J., & Santana, A. M. M. (2010). Adquisición y desarrollo del lenguaje. Psicología del desarrollo en la etapa de educación infantil, 2(5), 105-106.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. A. M. (1999). El enfoque sociocultural en el estudio del desarrollo y la educación. REDIE. Revista Electrónica de Investigación Educativa, 1(1), 16-37.',
      link: '',
    },
    {
      referencia:
        'Tajibo Association. (2023, octubre 24). La teoría de la adquisición del lenguaje de Noam Chomsky: La revolución del innatismo. Asociación Tajibo.',
      link: 'https://tajibo.org/teoria-adquisicion-lenguaje-noam-chomsky/',
    },
    {
      referencia:
        'Vygotsky, L. S. (1979). El desarrollo de los procesos psicológicos superiores. Grijalbo.',
      link: '',
    },
    {
      referencia:
        'Vygotsky, L. S. (2021). Pensamiento y lenguaje. Editorial Pueblo y Educación.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acomodación',
      significado:
        'Proceso opuesto a la asimilación. Implica modificar los esquemas mentales existentes para adaptarse a nueva información o experiencias que no encajan en los esquemas previos',
    },
    {
      termino: 'Andamiaje',
      significado:
        'Es un proceso de enseñanza en el que el adulto o tutor proporciona apoyo al niño para que pueda realizar tareas que inicialmente están fuera de su alcance. Este apoyo se ajusta gradualmente a medida que el niño va adquiriendo nuevas habilidades',
    },
    {
      termino: 'Asimilación',
      significado:
        'Proceso mediante el cual los nuevos conocimientos o experiencias se integran en los esquemas mentales preexistentes del individuo. Es decir, se ajusta la nueva información a lo que ya se conoce',
    },
    {
      termino: 'Equilibrio',
      significado:
        'Estado de equilibrio entre la asimilación y la acomodación. El individuo busca constantemente un estado de equilibrio cognitivo, donde los esquemas mentales sean coherentes con la realidad',
    },
    {
      termino: 'Factores',
      significado:
        'Son todas las variables que influyen en el desarrollo cognitivo y del lenguaje, como factores biológicos (madurez del cerebro), ambientales (estimulación, interacción social), cognitivos (procesos de atención, memoria) y socioculturales (valores, creencias)',
    },
    {
      termino: 'Filogenética',
      significado:
        'Hace referencia a los procesos evolutivos de una especie a lo largo del tiempo. En el contexto del desarrollo cognitivo, se refiere a los cambios evolutivos que han dado lugar a las capacidades cognitivas humanas',
    },
    {
      termino: 'Internalización',
      significado:
        'Proceso mediante el cual las funciones mentales externas (como el lenguaje) se convierten en funciones internas del individuo. Por ejemplo, cuando un niño interioriza las reglas del lenguaje, las utiliza de forma espontánea',
    },
    {
      termino: 'Microgenética',
      significado:
        'Estudia los cambios cognitivos que se producen en períodos cortos de tiempo, como minutos u horas. Permite observar de manera detallada los procesos de aprendizaje y resolución de problemas',
    },
    {
      termino: 'Ontogenética',
      significado:
        'Se refiere al desarrollo de un individuo a lo largo de su vida. En el contexto del desarrollo cognitivo, se centra en los cambios que se producen desde la infancia hasta la edad adulta',
    },
    {
      termino: 'Organización',
      significado:
        'Proceso mediante el cual los esquemas mentales se relacionan y se estructuran de manera jerárquica, formando sistemas más complejos de conocimiento',
    },
    {
      termino: 'Zona de Desarrollo Próximo (ZDP)',
      significado:
        'Concepto desarrollado por Vygotsky que se refiere a la distancia entre lo que un niño puede hacer por sí mismo y lo que puede hacer con la ayuda de un adulto o compañero más competente. Es la zona en la que se produce el aprendizaje más efectivo',
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
