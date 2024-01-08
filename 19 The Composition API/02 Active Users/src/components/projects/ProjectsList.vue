<template>
  <BaseContainer v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <BaseSearch v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></BaseSearch>
    <ul v-if="hasProjects">
      <ProjectItem v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></ProjectItem>
    </ul>
    <h3 v-else>No projects found.</h3>
  </BaseContainer>
  <BaseContainer v-else>
    <h3>No user selected.</h3>
  </BaseContainer>
</template>



<script>
import { ref, computed, watch } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: { ProjectItem },
  props: ['user'],
  setup(props) {
    // DATA
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')

    // COMPUTED
    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter(prj =>
          prj.title.includes(activeSearchTerm.value)
        )
      }
      return props.user.projects
    })
    const hasProjects = computed(() => {
      return props.user.projects &&
             availableProjects.value.length > 0
    })

    // WATCHERS
    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val
        }
      }, 300)
    })
    watch(props, () => {
      enteredSearchTerm.value = ''
    })

    // METHODS
    function updateSearch(val) {
      enteredSearchTerm.value = val
    }

    // RETURN
    return {
      hasProjects,
      updateSearch,
      enteredSearchTerm,
      availableProjects
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