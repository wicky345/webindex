<template>
  <div class="demo">
   <p v-once>{{msg}}</p>
   <p v-html="msg1"></p>
   <p v-bind:class="value">运用了v-bind</p>
   <p>{{msg3.toLowerCase()}}</p>
   <a v-bind:href="url">链接</a>
   <button @click="onSubmit()">点击</button>
   <button @click="newDoc()">加载新文档</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world!',
      msg1: '<strong>这是html文件</strong>',
      value:'content',
      msg3:'THIS IS MY VUE PROJECT',
      url:'www.baidu.com',
    }
  },
  methods:{
    onSubmit(){
    
      document.write(location.pathname+"\n");
    },
    newDoc(){
      window.location.assign("http://www.baidu.com");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
