<template>
  <index @scroll="getScrollTop" class="min-h-screen overflow-auto snap-y snap-center snap-proximity "
    :social-account="socialAccount">
    <div class="h-screen flex items-center">
      <header class=" w-full lg:block flex flex-col items-center justify-center relative">
        <img data-aos="fade-left" data-aos-duration="1000" alt="" src="/Illustration/header.svg"
          class=" lg:hidden flex w-full px-4" />
        <Carousel class="" dir="ltr" :itemsToShow="1" :wrapAround="true" :autoplay="5000">
          <Slide v-for="slide in imageSlider" :key="slide.id" class=" flex items-center justify-center">
            <div
              class="carousel__item lg:h-auto h-full lg:w-1/2 w-full flex items-center justify-center flex-col mt-10 text-left text-xl text-gray-900 z-0">
              <div data-aos="fade-up" data-aos-duration="1000" class=" lg:px-0 px-8">
                <div v-text="slide.title"
                  class="my-2 text-2xl font-semibold flex items-center justify-start text-gray-800"></div>
                <p class="lg:w-[60vh] w-full flex items-center justify-center text-gray-800" v-text="slide.desc">
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 w-full hidden lg:flex"></div>
          </Slide>
          <template #addons>
            <!-- <Pagination /> -->
          </template>
        </Carousel>

        <div class="absolute hidden lg:flex top-1/2 right-16 transform -translate-y-1/2 w-1/2 h-80">
          <div class=" h-full w-full rounded-full relative">
            <img src="/Illustration/header.svg" class="w-full h-full object-cover rounded-full" alt="">
            <div class="absolute hidden -bottom-6 -left-6 w-44 h-44 bg-primary-800 rounded-full flex">
              <div class="mx-auto w-full h-full flex flex-col items-center justify-center">
                <h1 class="text-xl font-semibold text-white">Social Media</h1>
                <div class="flex items-center justify-evenly mt-1 w-full">
                  <img src="/Icons/bank.svg" class="w-6 h-6" alt="">
                  <img src="/Icons/bank.svg" class="w-6 h-6" alt="">
                  <img src="/Icons/bank.svg" class="w-6 h-6" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- about us //need for edit -->
    <Section data-aos="fade-top" id="about-us">
      <article data-aos="zoom-in" class="lg:px-20 px-10 flex items-center justify-center mt-2 mb-4">
        ALOMANA PHARMA Group is an independent company, privately owned by family, located in the Republic of Yemen,
        founded in 2010 dealing in the field of pharmaceuticals & health care products, dedicated to the highest quality
        of service. Our main activities are in the local market.
        ALOMANA PHARMA performs the registration, promotion, importation and distribution of highest quality of
        pharmaceuticals & health care products in the Yemeni Market.
        The company has strong relationship with most senior Health Authorities including purchase and drug
        registrations departments in the Ministry of Health and other local health departments.
        The company is working in the private market, enjoys well reputation, covering all hospitals and almost all
        clinics, dealing with about 85% of the pharmacies in the market, enjoying handsome annual turnover yearly. The
        company is ranked medium size company and well dynamic in the marketing, promoting and distribution.
        The company as well participating in local tenders, it has nice and strong result in tenders, in which it
        captures good share in the tenders. The Company generate about 15% of its turnover from local tenders.
      </article>
    </Section>

    <!-- goals //done -->
    <Section title="Goals">
      <div class="w-full flex lg:flex-row flex-col items-center justify-evenly">
        <img data-aos="fade-right" src="/Illustration/goal.svg" class="lg:w-1/2 w-full" alt="" />
        <div class="lg:w-1/2 w-full lg:px-14 px-8 grid grid-rows-4 gap-2">
          <div v-for="(goal,i) in goals" :key="i" data-aos="fade-left"
            class="lg:hover:shadow-lg shadow-lg h-28 overflow-hidden lg:border lg:hover:border-none bg-white rounded-md py-2 px-4 w-full">
            <h1 class="w-full text-goalTile py-1 text-xl uppercase" v-text="goal.title"></h1>
            <p class="text-sm h-20 overflow-hidden text-gray-500" v-text="goal.desc"></p>
          </div>
        </div>
      </div>
    </Section>

    <!-- vision//done -->
    <Section data-aos="fade-top" title="Vision">
      <div data-aos="fade-right" class="w-full flex lg:flex-row flex-col items-center justify-evenly">
        <div class="lg:w-1/2 w-full lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <div class="text-lg text-gray-700 bg-white rounded-md p-10 w-full">
            Offer to the Yemeni market a variety of medicines, from the most essential to the latest generation
            products; basing our success on the innovation and creativity that allows us to distribute our products 'the
            nationwide and to be the health solution for all Yemeni People .
          </div>
        </div>
        <img data-aos="fade-left" src="/Illustration/vision.svg" class="lg:w-1/2 w-full" alt="" />
      </div>
    </Section>

    <!-- statistics -->
    <Section title="Statistics">
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="m-2 w-32 h-32 bg-primary-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <img src="/Icons/bank.svg" class="w-12 h-12 " alt="" />
          <p class="text-secondaryOrange-900 text-lg py-1 font-semibold capitalize ">title</p>
          <p class="text-white text-sm ">123</p>
        </div>
        <div class="m-2 w-32 h-32 bg-primary-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <img src="/Icons/bank.svg" class="w-12 h-12 " alt="" />
          <p class="text-secondaryOrange-900 text-lg py-1 font-semibold capitalize ">title</p>
          <p class="text-white text-sm ">123</p>
        </div>
        <div class="m-2 w-32 h-32 bg-primary-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <img src="/Icons/bank.svg" class="w-12 h-12 " alt="" />
          <p class="text-secondaryOrange-900 text-lg py-1 font-semibold capitalize ">title</p>
          <p class="text-white text-sm ">123</p>
        </div>
      </div>
    </Section>

    <!-- values //done -->
    <Section title="Values">
      <div data-aos="fade-up" data-aos-duration="3000"
        class="w-full flex flex-col lg:flex-row items-center justify-center">
        <div class="lg:w-1/2 w-full lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <p class="text-xl text-gray-700">
            The company is based on a number of key values that form the foundations of our comp any's true culture.
            These values are what define us specifically. They illustrate what we aim for, through which the behavior of
            individuals and the nature of their decisions are determined, which are represented
            by the following values:
          </p>
        </div>
        <img src="/Illustration/values.svg" class="lg:w-1/2 w-full" alt="" />
      </div>
      <div class="w-full flex items-center justify-center mb-14 lg:px-20 px-10">
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"
            class="hover:shadow-lg border hover:border-none bg-white text-gray-500 rounded-md p-4 text-sm w-full">
            Transparency, integrity and the strict adherence to ethical and legal standards.
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"
            class="hover:shadow-lg border hover:border-none bg-white text-gray-500 rounded-md p-5 text-sm  w-full">
            Innovation, creativity and team work with equal opportunities and mutual respect.
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"
            class="hover:shadow-lg border hover:border-none bg-white text-gray-500 rounded-md p-5 text-sm  w-full">
            Satisfying the customers, gain their trust and meet their needs.
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"
            class="hover:shadow-lg border hover:border-none bg-white text-gray-500 rounded-md p-5 text-sm  w-full">
            Transparency with suppliers from all over the world and pursuing thair ambitions in the Yemeni markets.
          </p>
        </div>
      </div>
    </Section>

    <!-- our partner // need for icons and urls -->
    <Section title="Our Partner" id="our-partner">
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <img data-aos="fade-right" data-aos-duration="3000" src="/Illustration/partner.svg" class="lg:w-1/2 w-full"
          alt="" />
        <div class="lg:w-1/2 w-full lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <a data-aos="fade-left" data-aos-duration="3000" target="_blank" :href="partner.url"
            v-for="(partner,i) in partners" :key="i"
            class="hover:shadow-lg h-28 my-2 overflow-hidden border hover:border-none bg-white rounded-md w-full grid grid-cols-6 gap-2">
            <div class=" col-span-2 flex h-full rounded-l-lg bg-gray-300">
              <img class="m-auto h-10 w-10" :src="partner.icon" alt="" />
            </div>
            <div class=" col-span-4 flex items-center justify-center w-full">
              <h1 class="w-full text-center text-goalTile py-1 text-xl uppercase" v-text="partner.title">
              </h1>
            </div>
          </a>
        </div>
      </div>
    </Section>

    <!-- services //done without icons -->
    <Section title="Services" id="services">
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <div data-aos="fade-right" class="lg:w-1/2 w-full lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <p class="text-xl text-gray-700">
            Al-Omana Pharma Company has three main marketing departments pharmaceuticals Departmentant,Food and Baby
            Supplies Department. <br />
            Each department has its own marketing staff, althoough the administrative staff is the same for all
            department.<br />
            The companies business thanks to senior management, which is characterized by professionalism, experience
            efficiency and wisdom in all its plans, policies and strategies.
          </p>
        </div>
        <img data-aos="fade-left" src="/Illustration/service.svg" class="lg:w-1/2 w-full px-6" alt="" />
      </div>
      <div class="w-full flex items-center justify-center mb-14 lg:px-20 px-10 h-14">
        <div class="flex h-full flex-col lg:flex-row items-center justify-evenly w-full">
          <server-department-vue class="m-2" v-for="(item , i ) in serviceDepartment" :key="i" :depData="item" />
        </div>
      </div>
    </Section>

    <!-- sales department //done -->
    <Section title="Sales Departments">
      <div class="w-full flex flex-col lg:flex-row items-center justify-evenly">
        <img data-aos="fade-left" data-aos-duration="1000" alt="" src="/Illustration/selasDepartment.svg"
          class="lg:w-1/2 w-full px-4" />
        <div data-aos="fade-right" data-aos-duration="1000"
          class="lg:w-1/2 w-full lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <p class="text-xl text-gray-500">
            Selling is one ofthe major forms of communication, gaining profit and customer acquisition in our company
            this department is like a power station sending out energy to all departments of company, the sales team is
            devoted to the advertising, and selling our products more over to be in a direct contact on daily basis with
            our customers. for this reason, we always hire and attract the best professional staff member's and provide
            the optimal work environment for them, and continue training and education to insure that each member of the
            team is capable of delivering the business to the desired level.
          </p>
        </div>
      </div>
    </Section>

    <!-- finance Departments //done -->
    <Section title="finance Departments">
      <div class="w-full lg:h-auto flex lg:flex-row flex-col items-center justify-evenly">
        <div data-aos-duration="1000" data-aos="zoom-in-left"
          class="lg:w-1/2 w-full row-span-2 lg:px-14 px-8 flex flex-col items-center justify-evenly">
          <p class="text-xl text-gray-500">
            The achivites expected from a finance department cover awide range from basic book-keeping to providing
            information.
          </p>
        </div>
        <div
          class="lg:w-1/2 w-full row-span-3 lg:px-14 px-8 py-10 grid grid-cols-2 gap-2 h-[60vh] capitalize text-base text-goalTile">
          <p data-aos="zoom-in-right" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            The Right Person
          </p>
          <p data-aos="zoom-in-left" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            Directional & Motivational Pay Plan
          </p>
          <p data-aos="zoom-in-right" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            Proper Coaching & Training
          </p>
          <p data-aos="zoom-in-left" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            Systems & Control
          </p>
          <p data-aos="zoom-in-right" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            Proper Product Mix
          </p>
          <p data-aos="zoom-in-left" data-aos-duration="1000"
            class="shadow-lg text-center flex items-center justify-center overflow-hidden bg-white rounded-md p-4">
            Dealer & Management Support
          </p>
        </div>
      </div>
    </Section>

    <!-- hr department //done without icons -->
    <Section title="hr Department">
      <div class="w-full mt-4 flex lg:flex-row flex-col items-center justify-evenly">
        <hr-card v-for="(item ,i) in hrCardsData" :hrData="item" :key="i" />
      </div>
    </Section>

    <!-- contact us // need for back-end -->
    <Section title="Contact Us" id="contact-us">
      <div
        class="w-full flex flex-col-reverse lg:flex-row items-center justify-evenly lg:justify-evenly lg:px-32 px-10 lg:h-[80vh]">
        <div data-aos="fade-right" data-aos-duration="1000"
          class="lg:w-2/3 w-full h-full bg-gradient-to-tl flex items-center justify-start py-6 from-primary-700 to-primary-900 rounded-sm shadow-lg relative">
          <div action="" class="lg:w-96 w-full lg:px-4 px-6 lg:ml-10 mx-auto flex flex-col items-center justify-evenly"
            method="post">
            <p class="w-full text-xl font-semibold text-gray-100 py-1">
              Hire us
            </p>
            <label class="w-full py-2">
              <span class="w-full block text-gray-400 text-sm" v-text="'Title'"></span>
              <input ref="subject" type="text" class="w-full bg-transparent text-white p-1 border-b-2 ">
            </label>
            <label class="w-full py-2">
              <span class="w-full block text-gray-400 text-sm" v-text="'Email'"></span>
              <input ref="email" type="email" class="w-full bg-transparent text-white p-1 border-b-2 ">
            </label>
            <label class="w-full py-2">
              <span class="w-full block text-gray-400 text-sm" v-text="'Message'"></span>
              <textarea ref="message" type="email"
                class="w-full bg-gray-900 bg-opacity-20 rounded-t-lg text-sm resize-y max-h-28 h-28 text-white p-1 border-b-2 "></textarea>
            </label>
            <button @click="sendMessage"
              class="px-4 py-1.5  hover:bg-gray-300 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg self-end">
              Send
            </button>
            <div class="flex items-center text-gray-200">
              <span>or</span>
              <a href="tel:+967-777-777-777" class=" hover:text-gray-400 text-sm font-semibold px-2 underline">Call
                us</a>
              <span>,</span>
              <a href="mailto:gg@gmail.com" class=" hover:text-gray-400 text-sm font-semibold px-2 underline">Email
                us</a>
            </div>
          </div>
        </div>
        <Location />
      </div>
    </Section>


    <button v-show="showButtonScroll" @click="scrollUp"
      class="w-10 flex items-center justify-center h-10 fixed bottom-8 right-8 rounded-sm bg-gray-300 animate-bounce shadow-lg ">
      <img src="/Icons/arrow-down.svg" class="h-6 w-6 rotate-180" alt="arrow-up" />
    </button>

  </index>
</template>

<script lang="ts">
import index from "./index.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Section from "./components/Section.vue";
import AOS from 'aos'
import { defineComponent, ref } from "vue";
import Location from "./components/Location.vue";
import serverDepartmentVue from "./components/serverDepartment.vue";
import HrCard from "./components/hrCard.vue";

export default defineComponent({
  name: "home",
  components: {
    Location,
    index,
    Carousel,
    Slide,
    serverDepartmentVue,
    Section,
    HrCard
  },
  data() {
    return {
      hrCardsData: [
        {
          icon: '/Icons/pie-graph.png',
          title: 'RETAINING<br/>GUIDING PRINCEPLES',
          desc: 'The company metrics, and the factores that keep the company guided toward success ar optimized.'
        },
        {
          icon: '/Icons/presentation.png',
          title: 'TRAINING<br/>BUSINESS NEEDS',
          desc: 'Achieve growth this can be done through managing our company\'s most valuble resouces its employees'
        },
        {
          icon: '/Icons/hiring.png',
          title: 'HIRING<br/>WE BELIEVE THAT',
          desc: 'An efficiently can provide our company with structure and th ability to meet business needs.'
        }
      ],
      serviceDepartment: [
        {
          title: 'Pharmaceuticals Department',
          icon: '/Icons/medicine.png',
        },
        {
          title: 'Baby food & Supplies Department',
          icon: '/Icons/feeding.png',
        },
        {
          title: 'Personal Care and Cosmetics',
          icon: '/Icons/medicine-tool.png',

        },
      ],
      imageSlider: [
        {
          id: 1,
          title: 'Root',
          desc: ' of major and minor multinational pharmaceutical industries worldwide and partner with international NGOs in the country to pave the way for better access for Yemeni patients.'
        }
      ],
      socialAccount: [
        {
          id: 1,
          name: 'hadaacenter',
          url: "https://www.facebook.com/hadaacenter",
          icon: "/Icons/facebook.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
        {
          id: 2,
          name: 'hadaacenter',
          url: "https://www.instagram.com/hadaacenter/",
          icon: "/Icons/instagram.svg",
        },
        {
          id: 3,
          name: 'hadaacenter',
          url: "https://twitter.com/hadaacenter",
          icon: "/Icons/twitter.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
        {
          id: 4,
          name: 'hadaacenter',
          url: "https://www.linkedin.com/company/hadaacenter",
          icon: "/Icons/linkedin.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
        {
          id: 4,
          name: '7777777777',
          url: "tel:",
          icon: "/Icons/phone.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
        {
          id: 4,
          name: 'gg@gmail.com',
          url: "mailto:",
          icon: "/Icons/email.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
        {
          id: 4,
          name: '77777777777',
          url: "https://wa.me/",
          icon: "/Icons/whatsapp.svg",
          hoverIcon: '/Icons/twitter-hover.svg'
        },
      ],
      showButtonScroll: true,
      indexOfData: 0,
      goals: [
        {
          title: 'profitability',
          desc: 'To reach the desire annual sales target and become market leaders.'
        },
        {
          title: 'EFFICINCY',
          desc: 'Improve staff productivity and assist them to reach success>'
        },
        {
          title: 'GROWTH',
          desc: 'Increase the number of products and include more business partners>'
        },
        {
          title: 'CUSTOMER SERVICE',
          desc: 'Improve the customer service and provide community educational service programs.'
        },
      ],
      partners: [
        {
          icon: '/Icons/user.svg',
          title: 'Dongkwang Parm',
          url: '#'
        },
        {
          icon: '/Icons/user.svg',
          title: 'Warafana Pharmaceutlcas',
          url: '#'
        },
      ]
    }
  },
  created() {
    AOS.init()
  },
  methods: {
    getScrollTop(e: any) {
      this.showButtonScroll = window.screenTop > 230
      console.log(window.screenTop, e.target)
    },
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async sendMessage() {
      let postData = {
        email: this.$refs.email.value,
        subject: this.$refs.subject.value,
        message: this.$refs.message.data
      }
      let res = await fetch('http://127.0.0.1:8000/php/sendMail.php', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      })

      console.log(res)
    }
    // sliceDesc(text) {
    //     let end = "";
    //     for (const item of text.split(/<\/?[a-z]*(\s*\w*)*>|\r\n/))
    //         if (item != null && item != "") end += item;
    //     return end.slice(0, 40);
    // },
  },
});
</script>

<style>

</style>
