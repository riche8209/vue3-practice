<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text">
    </div>
    <button class="" v-on:click="outputMsg('아자~~~!!??')">
      outputMsg 변경
    </button>
    <p>
      full name :: {{ greeting() }}
    </p>
    <p>
      message :: {{ outputMsg('아자??') }}
    </p>
    <button @click="countUp()">countUp</button>
    <h1> count :: {{ count }}</h1>
    <button @click="addArray()">addArray</button>
    <h1> myArray :: {{ myArray }}</h1>
    <ul v-for="item in myArray" v-bind:key="item"> 
      <li> array :: {{ item }} </li>
    </ul>
    <button @click="count1Up()">count1Up</button>
    <h1>
      count1 :: {{ count1 }}
    </h1>
    <h1>obj data</h1>
    <p>{{ data }}</p>
    <p>{{ data.objString }}</p>
    <p>{{ data.objInt }}</p>
    <p>{{ data.objJson }}</p>
    <p>{{ data.objJson.a }}</p>
    <p>{{ data.objBoolean }}</p>
    <p>{{ data.objArray }}</p>
    <p>{{ data.objArray[1] }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { ref, reactive } from 'vue';

export default {
  name: 'practice_1',
  props: {
    msg: String
  },
  

  init() {
    let text = 'jang';
    let ret = text;
    this.greeting(ret);
  },

  setup() {
    
    let msg = '아자~!';
    const greeting = (text) => {  
      if (text == null) {
        text = 'jang';
      }    
      const familyName = text;
      let fullName = 'chiwon';
      fullName += ' ' + familyName;
      return 'hello, ' + fullName;
    };

    const outputMsg = (text) => {
      if (text != null) {
        msg = text;
      }
      console.log('msg', msg);
      return msg;
    };

    axios.get("/smpl").then((res) => {
      console.log("axios 호출 res :: ", res);
    });

    let count1 =0;
    const count1Up = () => {
      count1++;
    };

    const count = ref(0);
    const countUp = () => {
      count.value++;
    };

    let myArray = reactive([]);

    const addArray = () => {
      myArray.push('*');
    };


    const data = reactive({
      'objString': 'string~~',
      'objInt': 0,
      'objArray': ['el1', 'el2', 'el3'],
      'objJson': { 'a':'a',
                   'b': 'b'},
      'objBoolean': false
    });

    data.objString = 'change String';
    data.objBoolean = !data.objBoolean;
    data.objArray.pop();

    data.objArray.push('push~');
    data.objJson.c = 'c';

    data.objJson['abcabc'] = 'abc?';

    return {
      greeting,
      outputMsg,
      count,
      countUp,
      myArray,
      addArray,
      count1,
      count1Up,
      data,
    };

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
