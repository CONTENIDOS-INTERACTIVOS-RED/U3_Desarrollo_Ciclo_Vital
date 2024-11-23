<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'unidad 2: Desarrollo cognitivo y del lenguaje en niños y adolescente'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 En esta unidad, se profundizará en la teoría del desarrollo cognitivo de <strong>Jean Piaget</strong>, explorando su propuesta sobre el desarrollo cognitivo y las etapas secuenciales que atraviesan las personas para comprender el mundo.

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Luego, se abordará el enfoque sociocultural de Lev Vygotsky y su impacto en el aprendizaje, lo cual permitirá entender cómo, para este autor, el contexto social y cultural desempeña un papel fundamental en la construcción del conocimiento. También se revisarán las biografías de estos autores y la relevancia de sus aportes en la psicología y la educación.
        p El recorrido culminará con el desarrollo del lenguaje, abordando sus etapas y los factores que influyen en él, destacando las contribuciones de otros autores como Burrhus Frederic Skinner y Noam Chomsky.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
      .col-12.p-4.bg-amarillo
        p Es fundamental la participación activa en todas las actividades propuestas para esta unidad, manteniendo el excelente ritmo de trabajo demostrado desde el inicio del curso.



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
