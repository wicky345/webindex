<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <my-Test title="hello,this is a title"></my-Test>
    <h3>动态改变子组件的likes值</h3>
    <my-Test v-bind:likes='43'></my-Test>
    <my-Test isPublished></my-Test>
    <my-Test v-bind:commentIds='[1,2,3]'></my-Test>
    <my-Test v-bind:author="{id:'1',name:'nancy'}"></my-Test>
  </div>
</template>

<script>
import myTest from './test.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      entermsg:null,
      obj:[{id:'1',value:'nancy'},
            {id:'2',value:'lucy'},
            {id:'4',value:'jonn'},
            {id:'7',value:'lucky'}]
    }
  },
  components:{
    myTest
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
