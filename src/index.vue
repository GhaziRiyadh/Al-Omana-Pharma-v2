<template>
  <WebsiteLayout class="relative">
    <template #navigation>
      <navigation ></navigation>
    </template>
    <template #content>
      <div class="max-w-full">
        <slot></slot>
      </div>
    </template>
    <template #footer>
      <FooterLayout :social-account="socialAccount"></FooterLayout>
    </template>
  </WebsiteLayout>
</template>

<script>
import WebsiteLayout from "./Layouts/WebsiteLayout.vue";
import FooterLayout from "./components/footer.vue";
import Navigation from "./components/nav.vue";
export default {
  name: "index",
  components: {
      Navigation,
    WebsiteLayout,
    FooterLayout,
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
