<template>
  <BaseContainer v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <BaseSearch v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></BaseSearch>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </BaseContainer>
  <BaseContainer v-else>
    <h3>No user selected.</h3>
  </BaseContainer>
</template>



<script>
import { computed, watch, toRefs } from 'vue'
import ProjectItem from './ProjectItem.vue'
import useSearch from '../../hooks/search.js'

export default {
  components: { ProjectItem },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props)
    const projects = computed(() => {
      return user.value ? user.value.projects : []
    })
    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(projects, 'title')

    const hasProjects = computed(() => {
      return user.value.projects && availableItems.value.length > 0;
    })

    watch(user,() => { updateSearch('') })

    return {
      enteredSearchTerm,
      availableProjects: availableItems,
      hasProjects,
      updateSearch
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