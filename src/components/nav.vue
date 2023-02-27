<template>
  <div :class="` max-h-screen z-50 w-full lg:block flex items-center justify-between` + classes">
    <div class="flex items-center h-full w-full justify-between md:px-10 ">
      <a href="#" class="h-14 w-20 flex items-center justify-center py-2">
        <img src="/Icons/logo.png" class="object-contain w-32" alt="" />
      </a>
      <div class="hidden h-full lg:flex items-center justify-center">
        <!-- <NavItem :title="$store.state.lang == 'ltr' ? 'Home' : 'الصفحة الرئيسية'" url="/"></NavItem> -->
        <NavItem v-for="(item, i) in tabType" :key="i" @mouseenter="toggleDropDown(item.id)"
          @mouseleave="toggleDropDown(item.id, false)" :title="item.title" :url="item.url">
        </NavItem>
      </div>
    </div>

    <div class="lg:hidden h-full flex items-center justify-center">
      <div @click="showSmNav = !showSmNav" class="cursor-pointer flex items-center justify-center w-14 h-full">
        <div class="relative">
          <div
            :class="`${showSmNav ? 'rotate-45 absolute right-0 bottom-0 w-4 h-0.5' : 'w-6 h-0.5'} bg-gray-900 transition-all duration-300 ease-linear`">
          </div>
          <div v-if="!showSmNav" :class="`w-6 my-0.5 h-0.5 bg-gray-900`"></div>
          <div
            :class="`${showSmNav ? '-rotate-45 absolute right-0 bottom-0 w-4 h-0.5' : 'w-6 h-0.5'} bg-gray-900 transition-all duration-300 ease-linear`">
          </div>
        </div>
      </div>
      <div
        :class="` fixed rtl:left-0 right-0 top-14 ${showSmNav ? 'w-[80vw]' : 'w-0'} z-50 shadow-lg h-screen bg-white overflow-auto transition-all ease-linear duration-500 `">
        <div class="flex items-center justify-center w-full h-40 border-b border-gray-900">
          <img @click="showSmNav = false" src="/Icons/logo.png" class="h-20 object-cover w-20" alt="" />
        </div>
        <div
          :class="`${showSmNav ? 'text-base' : 'text-[0pt]'} transition ease-linear duration-500 h-full flex-row items-center justify-center`">
          <NavItem v-for="(item, i) in tabType" @click="showSmNav = false" :key="i"
            @mouseenter="toggleDropDown(item.id)" @mouseleave="toggleDropDown(item.id, false)" :title="item.title"
            :url="item.url">
          </NavItem>
          <!-- <NavItem :title="$store.state.lang == 'ltr' ? 'Home' : 'الصفحة الرئيسية'" url="/"></NavItem> -->
          <!-- <NavItem :title="$store.state.lang == 'ltr' ? 'About Us' : 'من نحن'" url="/#about-us"></NavItem> -->
          <!-- <DropDown title="About us"></DropDown>
          <NavItem :title="$store.state.lang == 'ltr' ? 'Department' : 'الاقسام'" url="/#department"></NavItem>
          <NavItem :title="$store.state.lang == 'ltr' ? 'Our Clients' : 'عملاءنا'" url="/#our-clients"></NavItem>
          <NavItem :title="$store.state.lang == 'ltr' ? 'Contact Us' : 'تواصل معنا'" url="/#contact-us"></NavItem> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "./navItem.vue";
import DropDown from "./DropDown.vue";

export default {
  name: "navigation",
  components: {
    NavItem,
    DropDown
  },
  props: {
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showSmNav: false,
      showNav: 1,
      hoverDetails: false,
      tabType: [
        {
          id: 1,
          title: "About Us",
          url: "#about-us",
          showDropDown: false,
          class: " h-auto ",
        },
        {
          id: 2,
          title: "Our Partner",
          url: "#our-partner",
          showDropDown: false,
          class: " h-auto "
        },
        {
          id: 2,
          title: "Our product",
          url: "#our-product",
          showDropDown: false,
          class: " h-auto "
        },
        {
          id: 3,
          title: "Our Service",
          url: "#services",
          showDropDown: false,
          class: " h-auto "
        },
        {
          id: 4,
          title: "Contact Us",
          url: "#contact-us",
          showDropDown: false,
          class: " h-auto "
        }
      ],
      showNavTitle: '',
    };
  },
  created() {
    this.scrollUp()
  },
  methods: {
    toggleDropDown(id = this.showNav, state = true) {
      this.showNav = id
      this.showNavTitle = this.tabType.find(v => v.id === id)?.title
      this.tabType.map(item => {
        if (item.id === id) {
          item.showDropDown = state
        } else {
          item.showDropDown = false
        }
      })
    },

    scrollUp() {
      window.scrollTo({
        behavior: 'smooth',
        top: 20
      })
    }
  },

};
</script>

<style>

</style>
