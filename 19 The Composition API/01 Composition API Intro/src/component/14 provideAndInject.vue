<template>
  <section class="container">
    <h1>Provide and Inject</h1>
    <UserData :first-name="firstName" :last-name="lastName" :age="userAge"></UserData>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input class="input" type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>



<script>
import { ref, computed, watch, provide } from 'vue'
import UserData from './12 components/UserData.vue'

export default {
  components: { UserData },
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const lastNameInput = ref(null)
    const age = ref(31)

    provide('useAge', age)

    const name = computed(function() {
      return firstName.value + ' ' + lastName.value
    })

     watch(age, function(newValue, oldValue) {
      console.log('Old age: ' + oldValue)
      console.log('New age: ' + newValue)
    })

    function setNewAge() {
      age.value = 33
    }
    function setLastName() {
      lastName.value = lastNameInput.value.value
    }

    return {
      userName: name,
      userAge: age,
      setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    }
  }
}
</script>



<style>
  .input {
    display: block;
    margin: 12px auto 6px;
  }
</style>