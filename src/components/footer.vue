<template>
  <div class="w-full flex items-center justify-center border-t-2  ">
    <div class="w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <img src="/Icons/baselogo.png" alt="base-logo" class="h-20 px-10" srcset="">
        <!--   links     -->
        <div class="px-10 text-gray-500 capitalize flex items-center justify-between">
          <a href="#about-us" class="px-4 hover:text-gray-800 font-semibold cursor-pointer">about us</a>
          <a href="#services" class="px-4 hover:text-gray-800 font-semibold cursor-pointer">Services</a>
          <a href="#our-partner" class="px-4 hover:text-gray-800 font-semibold cursor-pointer">Our Partner</a>
        </div>

      </div>
      <div class="flex items-center justify-center py-6 ">
        <div v-for="(item , i) in socialAccount" :key="i">
          <a :href="item.url" target="_blank" class="flex">
            <img :src="item.icon" alt="social-icon" class=" h-6 w-6 mx-2 hover:filter">
<!--            <p v-text="item.name" class="text-gray-500 font-semibold hover:underline hover:text-primary-500 transition-all duration-300"></p>-->
          </a>
        </div>
      </div>
      <div class="text-base">
        <hr class="bg-gray-500"/>
        <p class="w-full text-sm text-center py-2 text-gray-800">
          © Copyright <strong>AL-Omana Pharma.</strong> All Rights Reserved<br>
          Designed by <a target="_blank" class="underline font-semibold text-yellow-700" href="https://temmam.com">Temmam
          Company</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FooterItem from "./footerItem.vue";

export default {
  name: "footer",
  components: {
    FooterItem,
  },
  props: {
    socialAccount: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>
