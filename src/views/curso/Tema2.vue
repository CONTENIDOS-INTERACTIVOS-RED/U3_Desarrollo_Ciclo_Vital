<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Desarrollo cognitivo y del lenguaje en niños y adolescentes'" :subTitulo="'2. Desarrollo del lenguaje: etapas y factores influyentes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El desarrollo del lenguaje, considerado un pilar en el crecimiento cognitivo, ha sido abordado desde diversas teorías de aprendizaje, como la conductual, la cognitiva-constructivista y la sociocultural. La teoría conductual, propuesta por Skinner (1957), entiende el lenguaje como una conducta adquirida a través de mecanismos como el condicionamiento, la imitación y la asociación con estímulos, donde el entorno y la aprobación de los adultos desempeñan un papel fundamental en su desarrollo.
        p Sin embargo, esta teoría se centra únicamente en el comportamiento observable, dejando de lado aspectos internos como la gramática o estructuras mentales. Esta limitación impulsó el surgimiento de la teoría innatista, que propone una explicación más profunda y estructurada del desarrollo del lenguaje, reconociendo que existen componentes mentales innatos que contribuyen a su adquisición y desarrollo.


    h2 Teorías del desarrollo del lenguaje

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-left")
        p.mb-0  En el campo del desarrollo del lenguaje, varias teorías han tratado de explicar cómo los seres humanos adquieren esta capacidad única. La teoría lingüística, propuesta por Noam Chomsky en 1957, plantea que el lenguaje es una estructura gobernada por reglas y que su adquisición es innata, distinta a cualquier otra habilidad. Esta
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="zoom-in") Chomsky introduce la idea de una gramática universal, sugiriendo que todas las lenguas comparten una estructura subyacente común, lo que permite a los niños desarrollar su conocimiento lingüístico desde una capacidad innata. Además, plantea el concepto de "período crítico," una etapa en la primera infancia donde el aprendizaje del idioma es óptimo. Sin embargo, esta teoría ha sido cuestionada, ya que algunos investigadores argumentan que las diferencias entre lenguas son profundas y desafían la idea de una gramática universal; también han puesto en duda la rigidez del "período crítico" (Tajibo, 2023). En el desarrollo del lenguaje, se distinguen dos enfoques:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Teoría lingüística de Chomsky
              p Chomsky sugiere que el lenguaje es innato y gobernado por una gramática universal, permitiendo que todas las lenguas compartan una estructura común. Incluye el concepto de "período crítico" para la adquisición del lenguaje.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Críticas a la teoría de Chomsky
              p La idea de la gramática universal y el "período crítico" ha sido cuestionada, investigadores argumentan que el contexto social y la experiencia pueden ser cruciales para aprender un idioma.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") Siguiendo con la influencia del contexto social, la teoría de la <strong>interacción social o sociointeraccionismo</strong>, sugiere que el lenguaje no se desarrolla de manera aislada, sino que depende de las relaciones sociales y culturales. Vygotsky, uno de los principales defensores de esta teoría, argumenta que el lenguaje se desarrolla a través de la interacción con otros, especialmente adultos, quienes enriquecen el ambiente lingüístico del niño (Aparicio e Igualada, 2019). Esta teoría se diferencia de la teoría innatista de Chomsky al enfatizar la importancia del contexto social y cultural en el desarrollo del lenguaje.

    .row.mb-5
      .col-12.col-xl-8.bg-amarillo.p-4(data-aos="fade-right")
        p.text-bold Teoría de la interacción social
        p Propone que el lenguaje surge de la interacción social y cultural, destacando la importancia de las relaciones y el contexto en su desarrollo. Vygotsky subraya el papel de los adultos y cuidadores en este proceso.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
    
    p.mb-4(data-aos="zoom-in") Finalmente, la <strong>teoría cognitiva-constructivista</strong>, de origen piagetiano (1954), sostiene que el lenguaje es una habilidad que se construye a partir de la interacción del niño con el entorno. A diferencia de la teoría lingüística, esta perspectiva sugiere que primero se adquieren conceptos y luego la capacidad para expresarlos verbalmente. Este enfoque, conocido como constructivismo, concibe el lenguaje como un proceso gradual y adaptativo (Aparicio e Igualada, 2019). 

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.flex-column.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          p.text-bold Teoría cognitiva-constructivista
          p.pe-xl-3.mb-0(data-aos="fade-up") Basada en Piaget, plantea que el lenguaje se desarrolla gradualmente y es el resultado de interacciones con el entorno. Se aprende primero el concepto y después la expresión verbal.
        p.mb-4 Estas teorías, aunque distintas en sus enfoques, contribuyen al entendimiento del lenguaje y subrayan la importancia de diversos factores—innatos, sociales y cognitivos—en el desarrollo lingüístico.
        p.mb-0 Ya se tiene claro que el desarrollo del lenguaje es un proceso fundamental en la vida de los niños y adolescentes, ya que no solo se refiere a la adquisición de habilidades lingüísticas, sino que también está intrínsecamente relacionado con el desarrollo cognitivo y aunque cada autor enfatiza diferentes aspectos, podemos identificar algunas etapas comunes en el desarrollo del lenguaje. 

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Etapas del desarrollo del lenguaje

    p.mb-5(data-aos="zoom-in") El desarrollo del lenguaje se puede dividir en varias etapas que reflejan el crecimiento y la complejidad del uso del lenguaje en los niños. Lo invitamos a revisar el video sobre <strong>"Etapas del desarrollo del lenguaje en la infancia y adolescencia"</strong>, en el que se exploran estas fases desde la etapa pre-lingüística hasta el refinamiento en la adolescencia. A través del video, comprenderá cómo los niños aprenden a comunicarse progresivamente, desde balbuceos y palabras simples hasta conversaciones complejas y matices lingüísticos en la adolescencia. Cada etapa es una oportunidad única de apoyar y fomentar su aprendizaje y expresión.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://youtu.be/xcJtL7QggTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.bg-white Video: Leyenda del video

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Factores que influyen en el desarrollo del lenguaje

    p.mb-4 El desarrollo del lenguaje es un proceso complejo influido por diversos factores biológicos, sociales, psicológicos y ambientales, como señala Carmona (2023). Estos elementos trabajan en conjunto, moldeando la manera en que las personas aprenden y utilizan el lenguaje, destacando la importancia del entorno y la individualidad en el desarrollo lingüístico:

    TabsC.mb-5
      .tabs-content.bg-amarillo.border.px-4.p-md-5.py-3(titulo="Factores biológicos", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Factores biológicos
            p(data-aos="fade-up") Incluyen la maduración cerebral, la estructura de los órganos del habla (lengua, labios, cuerdas vocales) y la genética. Cada niño sigue su propio ritmo de desarrollo, influido por su genética y características neurológicas.
      .tabs-content.bg-amarillo.border.px-4.p-md-5.py-3(titulo="Factores sociales", :iconUrl="require('@/assets/curso/unidad/img-21.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Factores sociales
            p Se refieren a la interacción social, la edad, la cultura, el género y la clase social, que afectan el uso del lenguaje en contextos sociales. La interacción con otros, como en juegos y narraciones, enriquece las habilidades lingüísticas del niño en contextos familiares y educativos.
      .tabs-content.bg-amarillo.border.px-4.p-md-5.py-3(titulo="Factores psicológicos", :iconUrl="require('@/assets/curso/unidad/img-22.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Factores psicológicos
            p Influyen en cómo se aprende y procesa el lenguaje, considerando aspectos como la personalidad, el aprendizaje y las experiencias individuales. Estos factores afectan la manera en que cada persona utiliza el lenguaje.
      .tabs-content.bg-amarillo.border.px-4.p-md-5.py-3(titulo="Factores ambientales", :iconUrl="require('@/assets/curso/unidad/img-23.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Factores ambientales
            p Abarcan el contexto social y la ubicación geográfica, determinando las palabras y expresiones que se utilizan en distintas áreas.

    p.mb-5(data-aos="fade-up") El desarrollo del lenguaje es una herramienta esencial que depende de la interacción entre múltiples factores. Desde la biología hasta el contexto social, todos estos elementos se combinan para dar forma a la forma en que nos comunicamos, estableciendo la relación entre el lenguaje y el desarrollo cognitivo.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Relación entre el desarrollo del lenguaje y el desarrollo cognitivo

    p.mb-5 El desarrollo del lenguaje y el desarrollo cognitivo se encuentran profundamente entrelazados, ya que el lenguaje permite a los niños expresar pensamientos y emociones, lo cual refuerza sus habilidades cognitivas. A medida que los niños amplían su vocabulario y comprenden la sintaxis, desarrollan capacidades para el pensamiento abstracto, fundamentales para enfrentar tareas cognitivas complejas como las matemáticas y la comprensión lectora:
    
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img.-mt-18px(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Expresión de pensamientos y emociones")
            p Piaget describe cuatro etapas del desarrollo cognitivo: sensoriomotora, preoperacional, de operaciones concretas y de operaciones formales. Cada etapa representa un cambio cualitativo en la manera en que la mente procesa la información.
          .div(titulo="Desempeño en tareas cognitivas")
            p Un vocabulario amplio mejora habilidades en matemáticas y comprensión lectora.
          .div(titulo="Desarrollo del pensamiento abstracto")
            p La adquisición de vocabulario y la comprensión de la sintaxis ayudan a los niños a conceptualizar ideas abstractas.
          .div(titulo="Capacidad de planificación y organización")
            p El lenguaje facilita la planificación de actividades y la organización del pensamiento, habilidades esenciales para el aprendizaje.
          .div(titulo="Procesamiento de información")
            p El lenguaje contribuye a procesar y organizar información, aumentando la eficiencia cognitiva en tareas diarias.

    p.mb-4(data-aos="fade-up") Además, el desarrollo del lenguaje influye de manera significativa en la construcción de relaciones interpersonales. Los adolescentes que dominan habilidades lingüísticas avanzadas suelen establecer conexiones significativas y participan en discusiones profundas, lo que les ayuda a enriquecer su desarrollo social y emocional:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Relaciones interpersonales
              p Habilidades lingüísticas avanzadas facilitan conexiones significativas y fortalecen el desarrollo social y emocional.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Capacidad de empatía y comprensión
              p El lenguaje permite entender las perspectivas de los demás, promoviendo la empatía.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Participación en actividades grupales
              p Facilita la colaboración en equipo, el trabajo en grupo y el desarrollo de habilidades sociales.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Resolución de conflictos
              p Ayuda a resolver problemas de manera verbal y pacífica, lo cual es esencial para la interacción social.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Expresión de emociones y sentimientos
              p Los adolescentes con buena habilidad lingüística pueden expresar sus emociones de forma efectiva, promoviendo relaciones sanas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    h2 Conclusión y recursos adicionales
    p.mb-5 El desarrollo del lenguaje es un proceso complejo que se despliega en diversas etapas y está influido por múltiples factores. Su relación con el desarrollo cognitivo es esencial para el aprendizaje y la comunicación. Comprender teorías como las de Piaget y Vygotsky, las etapas del desarrollo del lenguaje y sus factores contribuyentes es clave para apoyar el crecimiento integral de niños y adolescentes.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Adquisición y desarrollo del lenguaje
          p.mb-5 Para profundizar en estos temas, el documento de Jorge Rodríguez, <strong>La adquisición y desarrollo del lenguaje</strong>, ofrece una revisión detallada de las dimensiones del lenguaje, la conexión entre mente y lenguaje, y sus implicaciones educativas. Este recurso complementa la comprensión teórica y práctica del desarrollo del lenguaje y su impacto en el aprendizaje y las habilidades interpersonales.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://iltemprana.wordpress.com/wp-content/uploads/2014/01/teorc3adas-y-enfoques-explicativos-sobre-adquisicic3b3n-y-desarrollo-del-lenguaje.pdf" target="_blank")
            img.h-100(style="width: 49px" src='@/assets/template/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.my-auto.p-2.px-3.text-small <strong>Anexo.</strong> Adquisición y desarrollo del lenguaje

        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
