export default {
  coaches(state) {
    return state.coaches
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches
    return coaches.some(coach => coach.id === rootGetters.userId)
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch
    if (!lastFetch) { return true }

    return (new Date().getTime() - lastFetch) / 1000 > 60
  }
}