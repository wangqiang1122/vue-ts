<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js" @addFeature="addFeature"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
//
// @Component
// class hei extends HelloWorld{
//     constructor() {
//         super()
//     }
// }

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
      addFeature(val) {
          console.log(val)
          alert(val.name)
      }
  }
};
</script>
