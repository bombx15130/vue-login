<template>
  <div class="wrap">
    <Loading v-if="isLoading"/>
    <Header/>
    <h1>圖書CRUD</h1>
    <div class="main">
      
      <div class="api-content">
        <ul class="func-list">
          <li
              v-for="tab in tabs"
              :key="tab.id"
              :class="currentTab === tab.id ? 'active': ''"
              @click="currentTab = tab.id"
          >{{ tab.txt }}</li>
        </ul>
        <div class="func-content">
          <component
            :is="currentTab.toLowerCase()"
            @getApi="getApi"
          />
        </div>
      </div>

      <div class="content">
        <h2>書本資訊</h2>
        <table>
          <thead>
            <tr>
              <th>編號</th>
              <th>書名</th>
              <th>作者</th>
              <th>庫存</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody v-if="books.length !== 0">
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.id }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.quantity }}</td>
              <td>{{ `$${book.price}` }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'
import utils from '@/utils'
import axios from 'axios'

export default {
  data () {
    return {
      books: [],
      currentTab: 'get',
      isLoading: false,
      tabs: [
        {id: 'get', txt: '取得資料'},
        {id: 'post', txt: '新增資料'},
        {id: 'put', txt: '修改資料'},
        {id: 'delete', txt: '刪除資料'}
      ]
    }
  },
  components: {
    Header, Loading, Get, Post, Put, Delete
  },
  mounted () {
    this.getApi()
  },
  methods: {
    async getApi (method = 'get', body = {}, params = {}) {
      let url = 'http://172.18.200.65:8080/bookInfo/'
      if (params.id) {
        url = `http://172.18.200.65:8080/bookInfo/${params.id}`
      }
      this.isLoading = true

      const res = await axios({
        method: method,
        url: url,
        data: body
      })
      .then(res => res)
      .catch(err => console.log(err))

      await setTimeout(() => {
        this.isLoading = false
      }, 500)
      
      if (method === 'get') {
        this.books = res.data.data
      } else {
        // 新增、修改、刪除後更新table
        const newRes = await utils.request.apiBook()
        this.books = newRes.data.data
        console.log(res.data.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  padding: 20px;
  padding-top: 75px;
  h1{
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
.main{
  display: flex;
}
.content{
  h2{
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
  }
  table{
    text-align: center;
    th, td{
      border: 1px solid #ccc;
      padding: 5px 10px;
    }
    thead{
      th{
        background: #eef1f6;
      }
    }
  }
}
.api-content{
  margin-right: 50px;
  .func-list{
    display: flex;
    li{
      padding: 5px;
      border-bottom: 1px solid #91d5ff;
      cursor: pointer;
      border-radius: 4px 4px 0 0;
    }
    .active{
      background: #91d5ff;
      border-bottom: 1px solid #91d5ff;
    }
  }
  .func-content{
    position: relative;
    top: -1px;
    min-height: 200px;
    border: 1px solid #91d5ff;
    width: 300px;
  }
}
</style>
