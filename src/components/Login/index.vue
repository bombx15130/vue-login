<template>
  <div class="login-el">
    
      <div class="panel" :class="isRotate ? 'panel-rotate' : ''">
        <div class="login-panel" >
          <div class="panel-content" :class="isShow ? 'none' : ''">
            <h1>會員登入</h1>
            <div class="content-wrap">
              <h3>帳號</h3>
              <input type="text" placeholder="請輸入您的會員帳號" v-model="account">
              <h3>密碼</h3>
              <input type="password" placeholder="請輸入您的會員密碼" v-model="password">
            </div>
            <div class="login-btn" @click="login">登入</div>
            <ul class="menber-func">
              <li @click="$router.push('/signup')">加入會員</li>
            </ul>
          </div>
        </div>
        <!-- <SignUp
         @delay="delay"
         :class="isShow ? '' : 'none'"
        /> -->
      </div>
    
  </div>
</template>

<script>
import utils from '@/utils'
import { mapActions } from 'vuex'
// import SignUp from './SignUp'
import { setTimeout } from 'timers';

export default {
  data () {
    return {
      account: '',
      password: '',
      isRotate: false,
      isShow: false
    }
  },
  components: {
    // SignUp
  },
  methods: {
    ...mapActions(['setUserInfo']),
    delay (state, type) {
      if (type === 'front') {
        this.isRotate = state
        this.isShow = state
      } else {
        this.isRotate = state
      
        setTimeout(() => {
          this.isShow = state
        }, 500)
      }
      
    },
    rotate () {
      console.log(111)
      this.isRotate = false
    },
    login () {
      utils.request.apiUserLogin({
        account: this.account,
        password: this.password
      })
      .then(res => {
        if (res.data.success) {
          const info = {
            isLogin: true,
            userName: res.data.data[0].name
          }
          this.setUserInfo(info)
          sessionStorage.setItem('userInfo', JSON.stringify(info))
        } else {
          alert('帳號密碼錯誤')
        }
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.login-el{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('~@/assets/dobai-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.panel{
  width: 500px;
  margin-right: 100px;
  position: relative;
  height: 460px;
  transform-style:preserve-3d;
  transition:1s all ease;
  box-shadow:0px 0px 10px rgba(10,10,10,0.8);
  background: #efefef;
}
.panel-rotate{
  transform: rotateY(180deg);
}
.login-panel{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #efefef;
  text-align: center;
  box-sizing: border-box;
  backface-visibility:hidden;
  .panel-content{
    background: #efefef;
    margin: auto;
    padding-bottom: .2rem;
    h1{
      font-size: .24rem;
      padding: .1rem 0;
      background: #597ef7;
      color: #fff;
    }
    .content-wrap{
      width: 80%;
      margin: auto;
      text-align: left;
      padding-top: .4rem;
      h3{
        font-size: .16rem;
        margin-bottom: .05rem;
      }
      input{
        width: 100%;
        padding: .1rem .1rem;
        margin: .05rem 0 .3rem;
      }
    }
  }
}
.login-btn{
  width: 100px;
  border-radius: .25em;
  z-index: 1;
  position: relative;
  font-size: .16rem;
  font-family: Oswald,Microsoft JhengHei;
  color: white;
  padding: 0.5em 1em;
  background-color: #1d39c4;
  overflow: hidden;
  cursor: pointer;
  margin: .1rem auto .7rem;
  font-weight: 700;
  line-height: 30px;
  user-select: none;
}
.login-btn::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transition: transform 0.3s ease-in-out;
  transform: translate3d(-590%, 0, 0) rotate(35deg);
}

.login-btn:hover::after {
  transform: translate3d(320%, 0, 0) rotate(35deg);
}
.menber-func{
  width: 80%;
  margin: auto;
  text-align: left;
  li{
    display: inline-block;
    cursor: pointer;
    padding-right: .1rem;
    border-right: 1px solid #ccc;
    margin-right: .1rem;
    &:last-child{
      border-right: none;
    }
    &:hover{
      color: #597ef7;
    }
  }
}

.none{
  display: none;
}
</style>
