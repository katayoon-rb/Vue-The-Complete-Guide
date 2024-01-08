<template>
  <UserAlert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </UserAlert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>



<script>
import UserAlert from './UserAlert.vue'
import alertMixin from '../mixins/alert.js'

export default {
  components: { UserAlert },
  mixins: [ alertMixin ]
}
</script>