<template>
  <div>
    <input type="text" v-model="inputData" placeholder="result.change에 변경할 값 입력 하세요.">
    <button type="button" @click="changeBtn(inputData)">change</button>
    <p> result {{ result }}</p>

    <input type="text" v-model="result2.change" placeholder="result2.change에 변경할 값 입력 하세요.">
    <p> result {{ result2 }}</p>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
  setup() {

    const result = reactive({
      data1: '데이터1',
      data2: '데이터2',
      change: '변경 대상'
    });

    const result2 = reactive({
      data1: 'aaa',
      data2: 'bbb',
      change:'즉시 반응~'
    });

    const inputData = '';

    const changeBtn = (inputData) => {
      console.log('changeBtn change :: ', inputData);
      result.change = inputData;
    }


    // watch: 데이터 변경을 감시하고 콜백 함수를 실행합니다.
    watch(result, (nVal, oVal) => {
      console.log(`result 데이터가 변경되었습니다. 이전 값: ${oVal}, 새 값: ${nVal}`);
    });

    return {
      result,
      changeBtn,
      inputData,
      result2
    };
  },
};

</script>
