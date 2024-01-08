<template>
  <BaseContainer>
    <h2>Active Users</h2>
    <BaseSearch @search="updateSearch" :search-term="enteredSearchTerm"></BaseSearch>
    <div>
      <button @click="sort('asc')" :class="{selected: sorting === 'asc'}">Sort Ascending</button>
      <button @click="sort('desc')" :class="{selected: sorting === 'desc'}">Sort Descending</button>
    </div>
    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('listProjects', $event)"
      />
    </ul>
  </BaseContainer>
</template>



<script>
import { ref, computed, watch } from 'vue'
import UserItem from './UserItem.vue'

export default {
  components: { UserItem },
  props: ['users'],
  emits: ['listProjects'],
  setup(props) {
    // SEARCHING
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')
    const availableUsers = computed(() => {
      let users = []
      if (activeSearchTerm.value) {
        users = props.users.filter(user =>
          user.fullName.includes(activeSearchTerm.value)
        )
      }
      else if (props.users) { users = props.users }
      return users
    })
    watch(enteredSearchTerm, val => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val
        }
      }, 300)
    })
    function updateSearch(val) {
      enteredSearchTerm.value = val
    }

    // SORTING
    const sorting = ref(null)
    const displayedUsers = computed(() => {
      if (!sorting.value) { return availableUsers.value }

      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' &&
            u1.fullName > u2.fullName) {
          return 1
        }
        else if (sorting.value === 'asc') {
          return -1
        }
        else if (sorting.value === 'desc' &&
                 u1.fullName > u2.fullName) {
          return -1
        }
        else { return 1 }
      })
    })
    function sort(mode) {
      sorting.value = mode
    }

    // RETURN
    return {
      enteredSearchTerm,
      updateSearch,
      displayedUsers,
      sorting,
      sort
    }
  }
}
</script>



<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>