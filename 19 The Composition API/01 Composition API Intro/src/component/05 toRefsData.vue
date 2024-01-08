<template>
  <section class="container">
    <h1>Data with toRefs</h1>
    <h3>{{ userName }}</h3>
    <h3>{{ userAge }}</h3>
  </section>
</template>



<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const user = reactive({
      name: 'Maximilian',
      age: 31
    })
    const userRefs = toRefs(user)

    setTimeout(() => {
      user.name = 'Max'
      user.age = 32
    }, 2000)

    return {
      userName: userRefs.name,
      userAge: userRefs.age
    }
  }
}
</script>