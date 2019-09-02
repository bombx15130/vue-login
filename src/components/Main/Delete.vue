<template>
  <div class="del-block">
    <div class="func-block">
      書籍編號:<input type="text" v-model="id">
    </div>
    <div class="del-btn" @click="delData">刪除資料</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  methods: {
    delData () {
      this.$emit('getApi', 'delete', {}, {id: this.id})
    }
  }
}
</script>

<style lang="scss">
.del-block{
  padding: 10px;
  .func-block{
    margin-bottom: 50px;
    input{
      margin-left: 5px;
    }
  }
  
}
.del-btn{
  width: 80px;
  line-height: 30px;
  color: #fff;
  border-radius: 4px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background: #1890ff;
  margin: auto;
  &:hover{
    background: #096dd9;
  }
}
</style>