<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Desarrollo socioemocional y conductual en niños y adolescentes'" :subTitulo="'3. Influencia del entorno social y familiar en la conducta y emociones de los adolescentes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 La formación de la personalidad y el comportamiento en la adolescencia es un proceso complejo influido por múltiples factores, especialmente el entorno social y familiar. Autores como Erikson, Freud, Bowlby, Bandura, Baumrind y Bourdieu han investigado esta relación, proporcionando herramientas para comprender cómo el entorno moldea nuestra identidad y acciones.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Psicóloga explica la influencia del entorno en el comportamiento de las personas
          p.mb-5 Para iniciar esta exploración, recomendamos el siguiente video donde la psicóloga Andrea Manjares analiza el impacto del entorno en el comportamiento humano: 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://www.youtube.com/watch?v=JrfhBsAPCag" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Psicóloga explica la influencia del entorno en el comportamiento de las personas
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Papel del entorno familiar

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 El entorno familiar es crucial en la formación de la identidad emocional de los adolescentes. Según Freijo (2004), la familia funciona como un sistema interconectado donde las interacciones y emociones de cada miembro afectan al conjunto. 
        .bg-azul-claro.p-4 Freud, el padre del psicoanálisis, destacó el impacto de las relaciones tempranas en el desarrollo de la personalidad, a través de conceptos como el complejo de Edipo y el complejo de Electra, que influyen en la identidad y en la internalización de normas sociales. La resolución de estos complejos es esencial para un desarrollo emocional saludable y para la capacidad de establecer relaciones satisfactorias en la adultez (Glover, 2018; Nicuesa, 2017).

    p.mb-4 Otro enfoque destacado es el de Erik Erikson, quien amplió la teoría de Freud al considerar las relaciones sociales como esenciales en cada etapa del desarrollo humano. Según Erikson, la adolescencia es una etapa clave para la formación de la identidad, y las relaciones con pares y adultos juegan un papel fundamental en este proceso.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        h2.mb-4 Teoría del Apego de John Bowlby
        p.mb-0 John Bowlby, psicólogo británico, formuló la teoría del apego en los años 60, enfocándose en la importancia de los vínculos afectivos establecidos en la infancia y su impacto en las relaciones futuras. Bowlby argumenta que los niños tienen un impulso biológico para formar lazos emocionales con sus cuidadores, lo que les proporciona seguridad y fomenta relaciones saludables. Moneta (2014) explica que los cuidadores que responden de manera consistente y sensible a las necesidades de sus hijos desarrollan en ellos un apego seguro, mientras que los cuidadores ausentes o inconsistentes pueden generar un apego inseguro, afectando las relaciones futuras del individuo.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.bg-azul-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Teoría de Bowlby sobre el apego: qué es, etapas y características
          p.mb-5 La teoría del apego ha tenido un impacto duradero en la psicología y la educación, ya que destaca cómo los vínculos tempranos moldean la capacidad de los individuos para establecer relaciones sanas a lo largo de la vida. Para profundizar en esta teoría, se recomienda el siguiente artículo:
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://www.psicologia-online.com/teoria-de-bowlby-sobre-el-apego-que-es-etapas-y-caracteristicas-6083.html" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teoría de Bowlby sobre el apego: qué es, etapas y características

    h2 Estilos de Crianza según Diana Baumrind
    p.mb-4 Diana Baumrind, psicóloga del desarrollo, es conocida por su clasificación de estilos de crianza y su impacto en la conducta de los adolescentes. Murillo et al. (2015) destacan que Baumrind identificó cuatro estilos: autoritario, permisivo, autoritativo y negligente. Cada uno tiene características que afectan el desarrollo emocional y comportamental de los adolescentes:


    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Autoritario
              p Alta demanda y baja respuesta. Padres con reglas estrictas y expectativas de obediencia sin cuestionamientos. Este estilo puede producir adolescentes obedientes, pero con baja autoconfianza y dificultades para tomar decisiones. (Murillo et al., 2015)
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Permisivo
              p Baja demanda y alta respuesta. Padres indulgentes que permiten a los hijos tomar decisiones sin establecer límites claros, lo que puede resultar en adolescentes con falta de disciplina y problemas de responsabilidad y autorregulación. (Murillo et al., 2015)
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Autoritativo
              p Alta demanda y alta respuesta. Padres que equilibran normas claras con comunicación abierta, promoviendo adolescentes competentes, responsables y socialmente hábiles. Este estilo se asocia con resultados positivos como mayor autoestima y habilidades sociales. (Murillo et al., 2015)
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Negligente
              p Baja demanda y baja respuesta. Padres ausentes o desinteresados, lo cual puede afectar negativamente el desarrollo emocional y de conducta del adolescente, generando problemas de comportamiento. (Murillo et al., 2015)
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          
    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Estilos de crianza 
          p.mb-5 Baumrind postuló estos estilos en 1966, y su investigación ha influido profundamente en la psicología y educación, resaltando la importancia de un estilo de crianza equilibrado. Para explorar más sobre estos estilos, consulta este video:
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://www.youtube.com/watch?v=eAITJNEQWzI " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Cuantificadores lógicos: existenciales y universales.


    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Papel del entorno familiar

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4.mb-4
          p.mb-0 El entorno social desempeña un papel decisivo en el desarrollo de los adolescentes, impactando su comportamiento y emociones. Este entorno incluye amigos, compañeros de clase y la comunidad. La interacción con estos grupos puede moldear la autoimagen de los adolescentes y su respuesta ante diversas situaciones. Por ejemplo, la presión de grupo puede llevarlos a comportarse de maneras que no reflejan sus verdaderos valores, en un intento por lograr aceptación social.
        p.mb-0 Las emociones también están profundamente ligadas a estas interacciones sociales. La aceptación o el rechazo por parte de sus pares puede generar un rango de emociones, desde felicidad y confianza hasta ansiedad y tristeza. Pertenecer a un grupo tiende a fortalecer la autoimagen positiva, mientras que el aislamiento o el bullying pueden resultar en sentimientos de inseguridad y depresión, evidenciando el fuerte impacto de las dinámicas sociales en la salud emocional de los adolescentes.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
    h2 Factores que impactan el comportamiento social
    p.mb-4 Sara González (2023) sostiene que el comportamiento humano está profundamente influenciado por el entorno, desafiando la creencia de que solo la genética define la personalidad. En su artículo ¿Cómo influye el entorno en el comportamiento?, González explora factores determinantes en la conducta, tales como:

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Cultura", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Cultura
            p(data-aos="fade-up") Desde la infancia, las normas y valores culturales se internalizan, formando personalidades que reflejan características culturales. Las culturas colectivistas priorizan el bienestar grupal, mientras que las individualistas fomentan la competitividad.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presión social", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Presión social
            p(data-aos="fade-up") Las personas tienden a ajustar sus opiniones para alinearse con las de su grupo, buscando integración y evitando conflictos, incluso si saben que las creencias del grupo son incorrectas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Experiencias tempranas", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Experiencias tempranas
            p(data-aos="fade-up") La teoría del apego de Bowlby sugiere que las primeras relaciones con los padres establecen patrones de comportamiento en la adultez, influenciando cómo las personas se relacionan en el futuro.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Regulación emocional en adolescentes
          p.mb-5 Para profundizar en la relación entre el entorno y la regulación emocional, se recomienda el artículo Regulación emocional en adolescentes: importancia e influencia del contexto, que aborda los factores biológicos y sociales en la regulación emocional:
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Regulación emocional en adolescentes
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

    h2 La influencia social según Judith Harris
    p.mb-4 Judith Harris, en su obra La crianza de los hijos: La familia no importa (1998), desafía la idea tradicional de que solo los padres influyen en el desarrollo de los niños. Harris argumenta que las interacciones con pares y el contexto social tienen un rol más significativo. Para ella, las experiencias fuera del hogar, especialmente con otros niños, son determinantes en la formación de habilidades sociales y patrones de comportamiento que pueden diferir de los enseñados en casa.


    .row.bg-fondo-4.bg-full-width.py-4.mb-0.pb-xl-5
      div.px-5.pb-md-3.py-4.d-flex
        .row.mb-4
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img.h-100(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.ps-xl-3(data-aos="fade-left")
            .bg-azul-claro.p-4.h-100
              p.mb-0 Según Harris, la educación y los grupos de amigos pueden influir en la identidad y valores de los niños de manera más efectiva que los padres. Al reconocer que la familia no es la única influencia, Harris invita a explorar cómo las relaciones entre pares y experiencias comunitarias contribuyen a la formación de los jóvenes.
    .row.mb-4
      .col-11.col-xl-10.col-xxl-8.mx-auto.-mt-50px(data-aos="fade-up")
        .tarjeta.bg-white.box-shadow.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.ps-lg-4
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-2 Judith Rich Harris
                  p.text-small.mb-0 Para aprender más sobre Judith Harris, consulta:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-claro(href="https://academia-lab.com/enciclopedia/judith-rich-harris/" target="_blank")
                    span.text-small.text-app Ir al sitio
                    i.fas.fa-arrow-right.text-app

    h2.mb-0 Teoría del aprendizaje social de Albert Bandura
    
    .row.bg-fondo-4.bg-full-width.py-4.mb-0.pb-xl-5
      div.px-5.pb-md-3.p-4.d-flex

        .row.mb-4
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')  
          .col-12.col-xl-7.d-flex.flex-column
            p.mb-4 Albert Bandura, a través de su teoría del aprendizaje social (1977), plantea que las personas aprenden actitudes y comportamientos observando a otros. Esta influencia es visible en la interacción con pares y en la cultura, haciendo que los adolescentes sean especialmente susceptibles a la presión social, adoptando normas que no siempre son positivas.
            div.d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-49.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.pe-xl-3.mb-0(data-aos="fade-up") Orengo (2016) destaca la autoeficacia, la creencia en la propia capacidad para realizar tareas y alcanzar metas. Una alta autoeficacia motiva a los individuos a persistir ante las dificultades. En el contexto educativo, los estudiantes con autoeficacia elevada participan activamente y se esfuerzan en sus estudios.
            p.mb-0 Bandura también subraya la importancia del refuerzo y la retroalimentación: la recompensa o castigo que sigue a una conducta afecta la probabilidad de su repetición. Este aprendizaje por observación demuestra cómo el entorno influye en el comportamiento. 

    .row.mb-4
      .col-11.col-xl-10.col-xxl-8.mx-auto.-mt-50px(data-aos="fade-up")
        .tarjeta.bg-white.box-shadow.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.ps-lg-4
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-2 El aprendizaje social de Albert Bandura
                  p.text-small.mb-0 Para saber  cómo esta teoría se aplica en la enseñanza, consulta el artículo:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-claro(href="https://dialnet.unirioja.es/servlet/articulo?codigo=9335841 " target="_blank")
                    span.text-small.text-app Ir al sitio
                    i.fas.fa-arrow-right.text-app
    
    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-50.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Tanto el entorno familiar como los factores sociales influyen en la formación de la conducta y emociones de los adolescentes. Las teorías aquí exploradas aportan perspectivas valiosas sobre cómo estas influencias afectan el desarrollo emocional y social de los jóvenes. Educadores y padres deben reconocer la importancia de crear entornos de apoyo, asegurando que los adolescentes crezcan como adultos resilientes y emocionalmente equilibrados.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/journal/270/27065158006/") González-Grandón, X., Chao Rebolledo, C., & Patiño Domínguez, H. (2021). El juego en la educación: una vía para el desarrollo del bienestar socioemocional en contextos de violencia.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/JrfhBsAPCag") Telenord (2021). Psicóloga explica la influencia del entorno en el comportamiento de las personas [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desarrollo de la Identidad y Aspectos Psicosociales',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué aspecto psicológico es crucial para una buena autoimagen en la adolescencia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Apoyo familiar', esCorrecta: true },
            {
              id: 'b',
              texto: 'Demostración de habilidades',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Interacción social', esCorrecta: false },
            {
              id: 'd',
              texto: 'Consistencia en la educación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo se ve influenciada la identidad durante la adolescencia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por factores biológicos únicamente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por el entorno social y familiar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Por la educación formal exclusivamente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por experiencias individuales aisladas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué crítico sueco también analizó la identidad en su obra?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Erikson', esCorrecta: true },
            { id: 'b', texto: 'Charles Taylor', esCorrecta: false },
            { id: 'c', texto: 'John Locke', esCorrecta: false },
            { id: 'd', texto: 'Sigmund Freud', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica clave en la etapa de identidad según Erikson?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocimiento pleno de sí mismo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Confusión de roles', esCorrecta: true },
            { id: 'c', texto: 'Responsabilidad personal', esCorrecta: false },
            { id: 'd', texto: 'Independencia económica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo impacta el entorno familiar en el desarrollo socioemocional?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Generando estrés', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ofreciendo apoyo y seguridad',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aislando al individuo', esCorrecta: false },
            {
              id: 'd',
              texto: 'Proporcionando estructuras rígidas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
