<template>
    <section>
        <CoachFilter @changeFilter="setFilters" />
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton link to="/register" v-if="!isCoach">Register as Coach</BaseButton>
            </div>
            <ul v-if="hasCoaches">
                <CoachItem :key="coach.id"
                    v-for="coach in filterCoaches"
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                />
            </ul>
            <h3 v-else>No coaches found.</h3>
        </BaseCard>
    </section>
</template>



<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components: { CoachItem, CoachFilter },
    data() {
        return {
            activeFilters: { frontend: true, backend: true, career: true }
        }
    },
    computed: {
        filterCoaches() {
            const coaches = this.$store.getters['coaches/coaches']
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true
                }
                return false
            })
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach']
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters
        }
    }
}
</script>



<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .controls {
        display: flex;
        justify-content: space-between;
    }
</style>
