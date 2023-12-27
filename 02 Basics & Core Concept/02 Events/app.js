const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    }
  },
  computed: {
    fullName() {
      if (this.name === '') { return '' }
      else { return this.name + '  LastName' }
    }
  },
  methods: {
    addNum(num) { this.counter += num },
    reduceNum(num) { this.counter -= num },

    setName(event) { this.name = event.target.value },
    resetInput() { this.name = '' },
    submitForm() { alert('submitted!') }
  }
})
app.mount('#events')
