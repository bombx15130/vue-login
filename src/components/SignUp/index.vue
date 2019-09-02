<template>
  <div class="signup-panel">
    <div class="sign-content">
      <h1>會員註冊</h1>
      <Reg/>
      <div class="back" @click="$router.push('/')">返回</div>
    </div>
    
  </div>
</template>

<script>
import Reg from './Reg'

export default {
  data () {
    return {

    }
  },
  components: {
    Reg
  }
}
</script>

<style lang="scss">
.signup-panel{
  position: fixed;
  width: 100%;
  height: 100%;
  background: #efefef;
  background: url('~@/assets/dobai-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.sign-content{
  width: 500px;
  margin-right: 100px;
  box-shadow:0px 0px 10px rgba(10,10,10,0.8);
  position: relative;
  h1{
    font-size: .24rem;
    padding: .1rem 0;
    background: #597ef7;
    color: #fff;
    text-align: center;
  }
}
.back{
  cursor: pointer;
  width: 35px;
  line-height: 25px;
  text-align: center;
  border-radius: 4px;
  position: absolute;
  background: #0050b3;
  color: #fff;
  top: 2%;
  left: 3%;
}
</style>