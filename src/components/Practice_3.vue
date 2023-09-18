<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage(' add')">메시지 변경</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    const message = ref('안녕하세요!');

    const changeMessage = (add) => {
      message.value = message.value + add;
    };

    // beforeCreate 이벤트 훅 (Vue 2의 beforeCreate와 유사)
    onBeforeMount(() => {
      console.log('컴포넌트가 마운트되기 전에 실행됩니다.');
    });

    // created 이벤트 훅 (Vue 2의 created와 유사)
    onMounted(() => {
      console.log('컴포넌트가 마운트된 후에 실행됩니다.');
    });

    // beforeUpdate 이벤트 훅 (Vue 2의 beforeUpdate와 유사)
    onBeforeUpdate(() => {
      console.log('데이터 업데이트 전에 실행됩니다.');
    });

    // updated 이벤트 훅 (Vue 2의 updated와 유사)
    onUpdated(() => {
      console.log('데이터 업데이트 후에 실행됩니다.');
    });

    // beforeUnmount 이벤트 훅 (Vue 2의 beforeDestroy와 유사)
    onBeforeUnmount(() => {
      console.log('컴포넌트가 언마운트되기 전에 실행됩니다.');
    });

    // unmounted 이벤트 훅 (Vue 2의 destroyed와 유사)
    onUnmounted(() => {
      console.log('컴포넌트가 언마운트된 후에 실행됩니다.');
    });

    return {
      message,
      changeMessage
    };
  }
};
</script>
