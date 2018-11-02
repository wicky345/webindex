// 子组件
<template>
  <div>
      <h1>{{title}}</h1>
      <h1>{{likes}}</h1>
      <h1 v-show="isPublished">{{isPublished}}</h1>
      <h1>{{commentIds}}</h1>
      <h1>{{author}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
    commentIds: Array,
    author: Object
  },
  watch: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style scoped>
</style>