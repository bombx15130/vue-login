<template>
  <div class="post-block">
    <ul>
      <li>編號:<input type="text" v-model="id"></li>
      <li>書名:<input type="text" v-model="title"></li>
      <li>作者:<input type="text" v-model="author"></li>
      <li>庫存:<input type="text" v-model="quantity"></li>
      <li>單價:<input type="text" v-model="price"></li>
    </ul>
    <div class="post-btn" @click="putData">修改資料</div>
  </div>
</template>

<script>
import utils from '@/utils'

export default {
  data () {
    return {
      id: '',
      title: '',
      author: '',
      quantity: '',
      price: ''
    }
  },
  methods: {
    putData () {
      if (!this.id) {
        alert('請輸入正確編號')
        return
      }
      const bookInfo = {
        title: this.title,
        author: this.author,
        quantity: this.quantity,
        price: this.price
      }
      this.$emit('getApi', 'put', bookInfo, {id: this.id})
    }
  }
}
</script>

<style lang="scss">
.post-block{
  padding: 10px;
  ul{
    margin-bottom: 20px;
    li{
      margin-bottom: 10px;
      input{
        margin-left: 5px;
      }
    }
  }
  .post-btn{
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
}
</style>