<template>
  <TransitionGroup tag="ul" name="userList">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      users: ['Max', 'Julie', 'Angela', 'Michael']
    }
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value)
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user)
    }
  }
}
</script>



<style scoped>
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
  }

  .userList-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }
  .userList-enter-active { transition: all 1s ease-out; }
  .userList-enter-to,
  .userList-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .userList-leave-active { transition: all 1s ease-in; }
  .userList-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .userList-move { transition: transform 0.8s ease; }
</style>