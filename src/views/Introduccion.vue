<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'Unidad 3. Desarrollo socioemocional y conductual en niños y adolescentes'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-5
        .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
          p.mb-4 En esta tercera unidad, se profundizará en la Teoría del Desarrollo Psicosocial de Erikson, que explora las etapas del desarrollo humano a lo largo de la vida. Se pondrá especial énfasis en el desarrollo de la identidad durante la adolescencia, una etapa crucial en la que los jóvenes comienzan a definir quiénes son y cómo se perciben en relación con su entorno. Asimismo, se abordarán los aportes de diversos autores.
          .d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-right")
            p.pe-xl-3.mb-0(data-aos="fade-up") Además, se analizará la influencia del entorno social y familiar en la conducta y las emociones de los adolescentes, reconociendo el papel de estos factores en su desarrollo socioemocional y conductual. Con el apoyo de recursos documentales, portales web y videos, al finalizar el curso, los estudiantes estarán en capacidad de describir y comprender la importancia del entorno familiar y social en la conducta de niños y adolescentes, así como el impacto que este tiene en su identidad y bienestar emocional.
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0  Se espera que la motivación que los llevó a iniciar este viaje académico los haya acompañado hasta el final de esta asignatura, acercándolos un paso más a alcanzar su objetivo profesional.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
