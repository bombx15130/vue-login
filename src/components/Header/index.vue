<template>
  <div class="header-el">
    <div class="logo-el">
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <div class="features-el">
      <div>
        <span>{{ $store.state.userInfo.userName || '' }}</span>
        <span>大神安安</span>
      </div>
      <div class="login-out" @click="loginOut">登出</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['setUserInfo']),
    loginOut () {
      const info = {
        isLogin: false,
        userName: ''
      }
      this.setUserInfo(info)
      // sessionStorage.setItem('userInfo', JSON.stringify(info))
      sessionStorage.clear()
    },
    upload () {
      this.$refs.fileEl.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.header-el{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: .1rem .2rem;
  font-size: 16px;
  background: #5cdbd3;
  display: flex;
  align-items: center;
  z-index: 999;
  .logo-el{
    width: 80%;
  }
  .features-el{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .login-out {
      cursor: pointer;
      color: rgb(70, 163, 224);
      padding: .05rem;
      border-radius: 4px;
      margin-left: .05rem;
      &:hover{
        background: rgb(224, 238, 245);
      }
    }
  }
}
.add-album,
.upload-photo{
  display: flex;
  align-items: center;
  img{
    width: .2rem;
    margin-right: .03rem;
  }
}
.upload-photo{
  position: relative;
  input{
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
}
</style>
