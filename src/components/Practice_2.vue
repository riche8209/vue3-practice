<template>
  <div>

    <button @click="incrementCounter()">counter 증가</button>
    <p> counter :: {{ counter }}</p>
    <p> doubleCounter :: {{ doubleCounter }}</p>
  </div>
</template>

<script>

import { ref, computed, watch } from 'vue';

export default {

  setup() {

    let counter = ref(0);

    const incrementCounter = () => {
      counter.value++;
    };

    // const doubleConter = ref(counter.value * 2);
    const doubleCounter = computed(() => counter.value * 2);
    // let doubleCounter = ref(counter.value * 2);

    // computed 속성의 변경을 감시하고 로직을 처리합니다.
    watch(doubleCounter, () => {
      console.log("watching doubleCounter가 변경되었습니다.");
    });

    return {
      counter,
      incrementCounter,
      doubleCounter,
    }
  },
  // computed() {
  //   console.log("computed on");
  //   this.doubleCounter.value = (this.counter.value * 2);
  //   return {
  //     // doubleCounter,
  //   }
  // }


}


</script>