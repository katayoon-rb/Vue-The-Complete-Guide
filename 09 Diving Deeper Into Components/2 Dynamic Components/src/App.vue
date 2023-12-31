<template>
  <div>
    <TheHeader />
    <button @click="SetSelectedComp('ActiveGoals')">Active Goals</button>
    <button @click="SetSelectedComp('ManageGoals')">Manage Goals</button>
    <!--
      <ActiveGoals v-if="selectedComp === 'ActiveGoals'" />
      <ManageGoals v-if="selectedComp === 'ManageGoals'" />
    -->
    <KeepAlive>
      <component :is="selectedComp"></component>
    </KeepAlive>
  </div>
</template>

<script>
  import TheHeader from "./components/layout/TheHeader.vue";
  import ActiveGoals from "./components/ActiveGoals.vue";
  import ManageGoals from "./components/ManageGoals.vue";

  export default {
    components: { TheHeader, ActiveGoals, ManageGoals },
    data() {
      return {
        selectedComp: 'ActiveGoals',
        activeUser: {
          name: "Maximilian Schwarzmüller",
          description: "Site owner and admin",
          role: "admin",
        }
      }
    },
    methods: {
      SetSelectedComp(cmp) { this.selectedComp = cmp }
    }
  }
</script>

<style>
  html { font-family: sans-serif; }
  body { margin: 0; }
</style>
