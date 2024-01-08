<template>
    <section class="container">
      <h1>Data with ref</h1>
      <h3>{{ userName }}</h3>
      <h3>{{ userAge }}</h3>
    </section>
</template>



<script>
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('Maximilian')
    const age = ref(31)

    setTimeout(() => {
      name.value = 'Max'
      age.value = 32
    }, 2000)
    return {
        userName: name,
        userAge: age
    }
  }
}
</script>