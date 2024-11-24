<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Desarrollo socioemocional y conductual en niños y adolescentes'" :subTitulo="'2. Desarrollo de la identidad en la adolescencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Durante este periodo crucial de la vida, los adolescentes atraviesan profundos cambios físicos, emocionales y sociales que los impulsan a descubrir quiénes son, qué los define y cómo se conectan con el mundo que los rodea. Este viaje hacia la autodefinición y la construcción de su identidad personal es complejo y multifacético, influenciado tanto por sus experiencias internas como por las interacciones con su entorno social.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')


    .bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        
        .row
          .col-6.d-none.d-lg-block(data-aos="fade-right")
            img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          .col-12.col-lg-6(data-aos="fade-left")
            p.mb-4 Los invitamos a escuchar el podcast sobre el desarrollo de la identidad en la adolescencia, donde exploraremos cómo los jóvenes construyen su sentido de identidad en medio de cambios físicos, emocionales y sociales: 

            TarjetaAudio.color-primario.bg-white.mb-3(
                  texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
                  tiempo
                  :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    .row.bg-azul-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto ¿Sabía que la identidad ha sido estudiada desde múltiples perspectivas?
          p.mb-5 Este documento Teorías filosóficas y psicoanalíticas sobre la construcción de la identidad, le invita a conocer teorías clave de autores como Locke, Freud, Mead y Taylor, quienes aportan enfoques únicos sobre cómo se construye la identidad a través de la conciencia, el desarrollo, la interacción social y el reconocimiento. Estas ideas han transformado la pedagogía y la psicología, ampliando nuestra comprensión de los factores que moldean quiénes somos.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teorías filosóficas y psicoanalíticas sobre la construcción de la identidad
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    h2 Teorías del desarrollo de la identidad
    p.mb-4.pb-3 James Marcia, basándose en la teoría de Erikson, identificó cuatro estados de identidad que reflejan el grado de exploración y compromiso de los adolescentes. La quinta etapa de Erikson, "Identidad vs. Confusión de Roles", destaca cómo los adolescentes buscan establecer un sentido claro de sí mismos al enfrentarse a preguntas sobre su dirección, valores y lugar en la sociedad. Según Marcia, el desarrollo de la identidad se centra en dos elementos clave: la exploración de opciones y el compromiso con una de ellas, generando los siguientes estados de identidad:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Identidad lograda")
            p Los adolescentes han explorado diversas opciones y han tomado decisiones conscientes sobre su identidad, lo cual les brinda un sentido claro de quiénes son y hacia dónde quieren ir.
          .div(titulo="Moratoria")
            p Los adolescentes están en una fase de exploración activa, probando distintas opciones en búsqueda de su identidad, pero aún no han llegado a un compromiso firme con ninguna de ellas.
          .div(titulo="Identidad difusa")
            p Los adolescentes no han explorado ni se han comprometido con ninguna identidad específica, lo que puede llevar a una sensación de confusión, inseguridad y falta de dirección en su vida.
          .div(titulo="Identidad forzada")
            p Los adolescentes han aceptado decisiones o roles impuestos por otros sin cuestionarlos, resultando en una identidad que puede sentirse poco auténtica y no representa sus deseos reales.

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Factores clave en el desarrollo de la identidad en la adolescencia: la familia, los amigos y la cultura son elementos esenciales en la construcción de una identidad firme en los adolescentes.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Dinámica familiar", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Dinámica familiar
            p(data-aos="fade-up") Los adolescentes con un entorno familiar de apoyo emocional y libertad para explorar tienden a desarrollar una identidad más sólida. Por el contrario, la falta de apoyo o la presión pueden dificultar este proceso.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Relaciones con pares", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Relaciones con pares
            p(data-aos="fade-up") Las amistades son fundamentales durante la adolescencia; los adolescentes buscan aprobación y aceptación, lo que puede influir en sus elecciones y sentido de identidad. La presión de grupo puede ser positiva o negativa.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Cultura", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Cultura
            p(data-aos="fade-up") Las normas culturales, expectativas sociales y valores de la comunidad afectan cómo los adolescentes ven su identidad, especialmente en relación con su origen étnico y la sociedad en general.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Era digital y redes sociales", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Era digital y redes sociales
            p(data-aos="fade-up") Los medios y redes sociales exponen a los adolescentes a múltiples imágenes y narrativas, afectando su autopercepción y cómo desean proyectarse ante los demás.

    .row.bg-azul-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Construcción de la identidad en la adolescencia 
          p.mb-5 Para un análisis detallado de los efectos de las redes sociales en la construcción de la identidad en la adolescencia, consulta los capítulos I y VI de la tesis de Cáceres Lembcke y Otoya Puccio (2021): Construcción de la identidad en la adolescencia a través del uso de redes sociales.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://repositorio.unife.edu.pe/repositorio/bitstream/handle/20.500.11955/753/CACERES%20LEMBCKE%2C%20ELENA%20BEATRIZ%20Y%20OTOYA%20PUCCIO%2C%20KARINA_%202021%20(1).pdf?sequence=1" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> Tesis de Cáceres Lembcke y Otoya Puccio (2021)
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
    
    p.mb-4 El desarrollo de la identidad en la adolescencia es un proceso complejo que integra factores biológicos, psicológicos, sociales y culturales. Los marcos teóricos de los autores estudiados permiten comprender este proceso y su relevancia. Es fundamental que educadores, padres y la sociedad en general apoyen a los adolescentes en esta búsqueda, brindando un entorno que facilite la exploración y el compromiso en su desarrollo de identidad.

    .row.bg-azul-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto La adquisición de la identidad y conciencia personal
          p.mb-5 Para profundizar, te invitamos a ver el video de la Magister Claudette Donayre, quien aborda la adquisición de la identidad y la conciencia personal:
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://www.youtube.com/watch?v=IViLGcgxlGc " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Claudette Donayre



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
