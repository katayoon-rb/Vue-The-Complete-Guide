<template>
    <section class="container">
      <h1>Data with reactive</h1>
      <h3>{{ user.name }}</h3>
      <h3>{{ user.age }}</h3>
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

    setTimeout(() => {
      user.name = 'Max'
      user.age = 32
    }, 2000)

    return { user }
  }
}
</script>