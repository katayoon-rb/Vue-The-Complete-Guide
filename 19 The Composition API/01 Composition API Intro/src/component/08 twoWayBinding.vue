<template>
    <section class="container">
      <h1>Two Way Binding</h1>
      <h3>{{ userName }}</h3>
      <h3>{{ userAge }}</h3>
      <div>
        <input v-model="firstName" type="text" placeholder="First Name">
        <input v-model="lastName" type="text" placeholder="Last Name">
      </div>
    </section>
  </template>
  
  
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    setup() {
      const firstName = ref('')
      const lastName = ref('')
      const age = ref(31)
  
      const name = computed(() => {
        return firstName.value + ' ' + lastName.value
      })
  
      function setFirstName(e) {
        firstName.value = e.target.value
      }
      function setLastName(e) {
        lastName.value = e.target.value
      }
  
      return {
        userName: name,
        userAge: age,
        firstName,
        lastName,
        setFirstName,
        setLastName
      }
    }
  }
  </script>