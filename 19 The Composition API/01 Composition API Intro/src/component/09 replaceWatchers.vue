<template>
    <section class="container">
      <h1>Replace Watchers</h1>
      <h3>{{ userName }}</h3>
      <h3>{{ userAge }}</h3>
      <button @click="setNewData">Change Age</button>

    </section>
  </template>
  
  
  
  <script>
  import { ref, computed, watch } from 'vue'
  
  export default {
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        const age = ref(31)

        watch(age, (newVal, oldVal) => {
            console.log('Old Value: ' + oldVal)
            console.log('New Value: ' + newVal)
        })

        
        const name = computed(() => {
            return firstName.value + ' ' + lastName.value
        })

        function setNewData() {
            age.value = 32
        }
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
            setLastName,
            setNewData 
        }
    }
}
</script>