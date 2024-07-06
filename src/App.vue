<template >
  
  <div >
    
    <component :is="layout">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      
    </transition>
 <section class="section dashboard"><router-view></router-view></section>
    
  </component>

  <!-- <router-view v-slot="{ layout }">
  <transition>
    <component :is="layout" />
  </transition>
</router-view> -->

<!-- <router-view v-slot="{ layout }">
  <component :is="layout">
    <p>In Vue Router 3, I render inside the route component</p>
  </component>
</router-view> -->

  
  </div>
</template>

<script>
//import { mapActions } from "vuex";
//import Pusher from "pusher-js";
const default_layout = "default";
export default {
  computed: {
    layout() {
      //return (default_layout) + "-layout";
     return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
  created() {},
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
   // ...mapActions("Application", ["ajouterTransaction"]),
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
  mounted() {
    // let pusher = new Pusher("4b188c924054257223ab", {
    //   cluster: "eu",
    //   encrypted: false,
    // });
    // let vm = this;
    // let channel = pusher.subscribe("channel-resultat-all");
    // channel.bind("event-resultat-all", function (data) {
    //   let infomarche = data;
    //   vm.ajouterTransaction(infomarche.data);
    // });
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  /*transition-property: opacity;*/
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>