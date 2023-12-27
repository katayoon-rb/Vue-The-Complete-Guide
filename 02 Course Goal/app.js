const app = Vue.createApp({
    data() {
        return {
            courseGoalHtml: '<h3>Finish the course</h3>',
            courseGoalA: 'Finish the course',
            courseGoalB: 'Master the course',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const rand = Math.random()
            if (rand < 0.5) { return this.courseGoalA }
            else { return this.courseGoalB }
        }
    }
})
app.mount('#user-goal')

