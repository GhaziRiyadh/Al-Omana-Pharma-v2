<template>
  <div class="relative whitespace-pre-wrap max-w-screen min-h-screen bg-gray-50"
    style="">
    <div class=" w-full h-14 text-gray-900 md:text-gray-500 z-50">
      <slot name="navigation"></slot>
    </div>
    <div>
      <slot name="content"></slot>

    </div>
    <div class=" w-full flex items-center justify-center  text-gray-300 bg-footer ">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'webLayout',
  data() {
    return {
      showButtonScroll: false,
    }
  },
  methods: {
    getScrollTop() {
      this.showButtonScroll = window.screenTop > 230
      console.log(window.screenTop)
    },
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}

</script>

<style>
.headerImage {
  background-image: url('/Illustration/headerBack.svg');
  object-fit: fill;
}
</style>
