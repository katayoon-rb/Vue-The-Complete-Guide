export default {
  contactCoach(context, payload) {
    context.commit('addRequest', {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    })
  }
}