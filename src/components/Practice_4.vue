<template>
  <div>
    <button @click="fetchBtnClick('add')">메시지 변경</button>
    <p> result {{ result }}</p>
    <p> result.data1 {{ result.data1 }}</p>

    <p> result2 {{ result2 }}</p>

    <button type="button" @click="addBtn">add~</button>
    <p> result {{ result }}</p>

    <button type="button" @click="changeBtn(change)" v-bind="change">change~</button>
    <p> result {{ result }}</p>

    <input type="text" v-model="result.change" @input="changeBtn(change)" placeholder="result.change에 변경할 값 입력 하세요.">
  </div>
</template>

<script>
import {  ref, reactive, watch, computed } from 'vue';

export default {
  setup() {
    const params = reactive({
      srch1: '',
      srch2: ''
    });

    // const result = reactive({
    //   data1: '',
    //   data2: '',
    //   data3: '',
    //   data4: '',
    // });

    // let result = reactive({});

    ////////////////////////// 이벤트 훅 중 onBeforeMount 사용 예제
    // onBeforeMount(async () => {      
    //   // 컴포넌트가 마운트되기 전에 데이터를 가져옵니다.
    //   console.log('onBeforeMount on');
      
    //   // await 비동기 함수를 동기화처럼 처리해 주는 키워드
    //   const response = await fetchData();
    //   console.log('onBeforeMount response on :: ', response);
    //   // Object.assign(result, response);
    //   result = response;
    //   console.log('onBeforeMount result on :: ', result);
    // });

    // ////////////////////////// 이벤트 훅 중 onBMounted 사용 예제
    // onMounted(async () => {      
    //   // 컴포넌트가 마운트된 후에 데이터를 가져옵니다.
    //   console.log('onMounted on');
      
    //   // await 비동기 함수를 동기화처럼 처리해 주는 키워드
    //   const response = await fetchData();
    //   console.log('onMounted response on :: ', response);
    //   // Object.assign(result, response);
    //   result = response;
    //   console.log('onMounted result on :: ', result);
    // });
    
    let result = reactive({});
    let result2 = reactive({});
    ////////////////////////// 테스트 버튼
    const fetchBtnClick = async (add) => {
      console.log('fetchBtnClick on');
      const response = await fetchData(add);
      console.log('fetchBtnClick response on :: ', response);
      // result = response;  
      Object.assign(result, response);
      result2 = computed(() => result);      
      console.log('fetchBtnClick result on :: ', result);
    }

    const addBtn = () => {
      result.add = '장~';
    }

    const changeBtn = (change) => {
      result.change = change;
    }

    const fetchData = async (add) => {
      const loadResult = {      
        data1: '김재현',
        data2: '황누나',
        data3: '김범수',
        data4: '정혜수',
        data5: add,
      };
      console.log('fetchData on :: ', loadResult);
      return loadResult
    }


    ////////////////////////// watch 예제
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    // watch: 데이터 변경을 감시하고 콜백 함수를 실행합니다.
    watch(result, (nVal, oVal) => {
      console.log(`result 데이터가 변경되었습니다. 이전 값: ${oVal}, 새 값: ${nVal}`);
    });

    return {
      params,
      result,
      increment,
      fetchBtnClick,
      result2,
      addBtn,
      changeBtn,
    };
  },
};

</script>
