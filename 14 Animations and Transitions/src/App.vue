<template>
  <Samesies>
    <div class="container">
      <div class="block" :class="{transform: transformedBlock}"></div>
      <button @click="transformBlock">Animate with transform</button>
    </div>
    <div class="container">
      <div class="block" :class="{animate: animatedBlock}"></div>
      <button @click="animateBlock">Animate with animation</button>
    </div>
  </Samesies>

  <Samesies>
    <div class="container">
      <Transition name="transformTra">
        <p v-if="paraIsVisibleTransform">Only sometimes visible!</p>
      </Transition>
      <button @click="toggleParaTransform">Transform Toggle Paragraph</button>
    </div>
    <div class="container">
      <Transition name="animateTra">
        <p v-if="paraIsVisibleAnimate">Only sometimes visible!</p>
      </Transition>
      <button @click="toggleParaAnimate">Animate Toggle Paragraph</button>
    </div>
    <div class="container">
      <Transition :css="false"
          @enter-cancelled="enterCancelled"
          @leave-cancelled="leaveCancelled"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
      >
        <p v-if="paraIsVisibleJs">Only sometimes visible!</p>
      </Transition>
      <button @click="toggleParaJs">Js Toggle Paragraph</button>
    </div>
  </Samesies>
  

  <div class="container">
    <transition name="fadeBtn" mode="out-in">
      <button @click="showUser" v-if="!userIsVisible">Show Users</button>
      <button @click="hideUser" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <UsersList />
  </div>
</template>  



<script>
  import UsersList from './components/UsersList.vue'
  import Samesies from './components/Samesies.vue'

  export default {
    components: { UsersList, Samesies },
    data() {
      return {
        animatedBlock: false,
        transformedBlock: false,
        dialogIsVisible: false,
        userIsVisible: false,
        paraIsVisibleTransform: false,
        paraIsVisibleAnimate: false,
        paraIsVisibleJs: false,
        enterInterval: null,
        leaveInterval: null
      }
    },
    methods: {
      animateBlock() { this.animatedBlock = true },
      transformBlock() { this.transformedBlock = true },
      toggleParaTransform() { this.paraIsVisibleTransform = !this.paraIsVisibleTransform },
      toggleParaAnimate() { this.paraIsVisibleAnimate = !this.paraIsVisibleAnimate },
      toggleParaJs() { this.paraIsVisibleJs = !this.paraIsVisibleJs },
      
      showUser() { this.userIsVisible = true },
      hideUser() { this.userIsVisible = false },
      showDialog() { this.dialogIsVisible = true },
      hideDialog() { this.dialogIsVisible = false },

      enterCancelled(el) {
        console.log(el)
        clearInterval(this.enterInterval)
      },
      leaveCancelled(el) {
        console.log(el)
        clearInterval(this.leaveInterval)
      },
      beforeEnter(el) {
        el.style.opacity = 0
      },
      enter(el, done) {
        let round = 1
        this.enterInterval = setInterval(() => {
          el.style.opacity = round * .01
          round++
          if (round > 100) {
            clearInterval(this.enterInterval)
            done()
          }
        }, 20)
      },
      afterEnter(el) { console.log(el) },
      beforeLeave(el) {
        el.style.opacity = 1
      },
      leave(el, done) { 
        let round = 1
        this.leaveInterval = setInterval(() => {
          el.style.opacity = 1 - round * .02
          round++
          if (round > 50) {
            clearInterval(this.leaveInterval)
            done()
          }
        }, 20)
       },
      afterLeave(el) { console.log(el) }
    }
  }
</script>



<style>
  * { box-sizing: border-box; }
  html { font-family: sans-serif; }
  body { margin: 0; }
  button {
    font: inherit;
    padding: 0.5rem 2rem;
    border: 1px solid #810032;
    border-radius: 30px;
    background-color: #810032;
    color: white;
    cursor: pointer;
  }
    button:hover,
    button:active {
      background-color: #a80b48;
      border-color: #a80b48;
    }
  .block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
  }
  .container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
  }
    .same .container { margin: 2rem 1rem; }

  /* With transform */
  .transform { transform: translateX(-150px); }
  .block.transform { transition: transform .3s; }
  

  /* With animation */
  .animate { animation: slideScale .3s ease-in forwards; }


  /* Transform with transition component */
  .transformTra-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  .transformTra-enter-active {
    transition: all .3s ease-out;
  }
  .transformTra-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .transformTra-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .transformTra-leave-active {
    transition: all .3s ease-in;
  }
  .transformTra-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }


  /* Animate with transition component */
  .animateTra-enter-active {
    animation: slideScale .3s ease-in;
  }
  .animateTra-leave-active {
    animation: slideScale .3s ease-out;
  }


  /* buttons transition component */
  .fadeBtn-enter-from,
  .fadeBtn-leave-to {
    opacity: 0;
  }
  .fadeBtn-enter-active {
    transition: opacity .3s ease-out;
  }
  .fadeBtn-leave-active {
    transition: opacity .3s ease-out;
  }
  .fadeBtn-enter-to,
  .fadeBtn-leave-from {
    opacity: 1;
  }

  
  @keyframes slideScale {
    0% { transform: translateX(0) scale(1); }
    70% { transform: translateX(-120px) scale(1.1); }
    100% { transform: translateX(-150px) scale(1); }
  }
</style>