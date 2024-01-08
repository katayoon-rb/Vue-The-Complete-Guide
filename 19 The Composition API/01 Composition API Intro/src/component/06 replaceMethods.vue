<template>
  <section class="container">
    <h1>Replace Methods</h1>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.age }}</h3>
    <button @click="setNewData">Change Age</button>
  </section>
</template>



<script>
import { reactive } from 'vue'

export default {
  setup() {
    const user = reactive({
      name: 'Maximilian',
      age: 31
    })
    function setNewData() {
      user.age = 32
    }

    return { user, setNewData }
  }
}
</script>