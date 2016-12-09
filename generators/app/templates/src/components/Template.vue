<template>
  <button class="<%=project_name%>" v-on:click="_click()" :type="type">
    <i>ICON</i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: '<%=project_name%>',
    props:{
      type:{
        type:String,
        default:'<%=project_name%>'
      }
    },
    methods:{
      _click:function(){
        alert('Hello YO VUE!');
      }
    }
  };
</script>

<style lang="scss">
  .<%=project_name%>{
    border:none;
    background: #999;
    padding:10px;
    font-size: 12px;
    color:#333;
    border-radius: 4px;
    i{
      color:#00f;
      font-size: 8px;
    }
  }
</style>
