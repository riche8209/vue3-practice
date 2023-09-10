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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
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

    return {
      greeting,
      outputMsg,
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
