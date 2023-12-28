function getRandomValue(min, max) {
    return Math.floor( Math.random() * (max - min) ) + min
  }

const app = Vue.createApp({
    data() {
        return {
            currentRound: 0,
            playerHealth: 100,
            monsterHealth: 100,
            winner: null,
            logMessages: []
        }
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
              this.winner = 'draw'
            }
            else if (value <= 0) {
              this.winner = 'monster'
            }
          },

          monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
              this.winner = 'draw'
            }
            else if (value <= 0) {
              this.winner = 'player'
            }
          }
    },


    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },

        playerHealthBar() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },

        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },


    methods: {
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.currentRound = 0
            this.logMessages = []
        },

        attackMonster() {
            this.currentRound++
            this.monsterHealth -= getRandomValue(5, 12)
            this.attackPlayer()
        },

        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15)
        },

        specialAttackMonster() {
            this.currentRound++
            this.monsterHealth -= getRandomValue(10, 25)
            this.attackPlayer()
        },

        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(8, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            }
            else {
                this.playerHealth += healValue
            }
            this.attackPlayer()
        },

        surrender() {
            this.winner = 'monster'
        },
        
        addLogMessage( who, what, value ) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
}) 
app.mount('#game')