<template>
  <section class="wrapper">
    <RefData />
    <ReactiveData />
    <ToRefsData />
    <ReplaceMethods />
    <ReplaceComputedProps />
    <TwoWayBinding />
    <ReplaceWatchers />
    <CompsAndProps />
    <ProvideAndInject />
  </section>
</template>



<script>
import RefData from './component/02 refData.vue'
import ReactiveData from './component/03 reactiveData.vue'
import ToRefsData from './component/05 toRefsData.vue'
import ReplaceMethods from './component/06 replaceMethods.vue'
import ReplaceComputedProps from './component/07 replaceComputedProps.vue'
import TwoWayBinding from './component/08 twoWayBinding.vue'
import ReplaceWatchers from './component/09 replaceWatchers'
import CompsAndProps from './component/12 compsAndProps.vue'
import ProvideAndInject from './component/14 provideAndInject.vue'

export default {
  components: {
    RefData, ReactiveData, ToRefsData,
    ReplaceMethods, ReplaceComputedProps,
    TwoWayBinding, ReplaceWatchers, CompsAndProps,
    ProvideAndInject
  }
}
</script>



<style>
  * { box-sizing: border-box; }
  html { font-family: sans-serif; }
  body { margin: 0; }

  h1 {
    border-bottom: 2px solid;
    padding-bottom: 10px;
    margin: 0 50px;
  }

  .container {
    margin: 3rem auto 1rem;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    text-align: center;
  }
  .wrapper {
    padding: 0 15rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>
