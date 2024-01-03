export default {
  increment(context) {
    setTimeout(() => {
        context.commit('increment')
    }, 800)
  },
  increase(context, payload) {
      context.commit('increase', payload)
  }
}