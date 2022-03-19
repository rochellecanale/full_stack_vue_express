<template>
  <div>

    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <!--
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    -->
    <!--
    <form-helper>
      <h1 slot="form-header">{{ formTitle }}</h1>
      <div slot="form-content">
        <input type="text" placeholder="username" required />&nbsp;
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-buttons">
        <br />
        <button type="submit">Login</button>
      </div>
    </form-helper>
    -->
    <keep-alive>
     <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">Show form one</button>
    <button @click="component = 'form-two'">Show form twp</button>

    <app-footer v-bind:title="title"></app-footer>

  </div>
</template>
<script>

import Header from './components/Header'
import Footer from './components/Footer'
//import Ninjas from './components/Ninjas'

import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    //'app-ninjas': Ninjas,
    //'form-helper': FormHelper,
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      component: 'form-two',
      formTitle: 'Login Form',
      title: 'Vue Ninjas',
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  },
  methods: {
    updateTitle(data) {
      this.title = data
    }
  }
}
</script>
<style scoped>
  h1 {
    color: purple;
  }
</style>
