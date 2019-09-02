<template>
  <div class="reg">
    <div class="regWrap">
      <div>
        <span>帳號</span>
        <span>
          <input
            type="text"
            v-model="accountC"
            @blur="accountCK"
            placeholder="*帳號(請輸入6~24個英文或數字半形字元)"
          >
        </span>
        <span class="checkStyle">{{ accountText }}</span>
      </div>

      <div>
        <span>密碼</span>
        <span>
          <input
            type="password"
            v-model="passwordC"
            @blur="passwordCK"
            placeholder="*密碼(請輸入6~24個英文或數字半形字元)"
          >
        </span>
        <span class="checkStyle">{{passwordText}}</span>
      </div>

      <div>
        <span>確認密碼</span>
        <span>
          <input
            type="password"
            v-model="psdC"
            @blur="psdCK"
            placeholder="*再次輸入密碼"
          >
        </span>
        <span class="checkStyle">{{checkPsd}}</span>
      </div>

      <div>
        <span>電子信箱</span>
        <span>
          <input
            type="email"
            v-model="emailC"
            @blur="emailCK"
            placeholder="*example@gmail.com"
          >
        </span>
        <span class="checkStyle">{{emailText}}</span>
      </div>

      <div>
        <span>姓名</span>
        <span>
          <input
            type="text"
            v-model="nameC"
            @blur="nameCK"
            placeholder="*姓名"
          >
        </span>
        <span class="checkStyle">{{nameText}}</span>
      </div>

      <div>
        <span>手機</span>
        <span>
          <input
            type="tel"
            v-model="phoneC"
            @blur="phoneCK"
            placeholder="*手機號碼"
          >
        </span>
        <span class="checkStyle">{{phoneText}}</span>
      </div>

      <div>
        <span>地址</span>
        <Address
          @getAddress = "getAddress"
        />
        <input
          type="text"
          class="address"
          placeholder="地址"
          v-model="addressText"
        >
      </div>
      <button class="submitBtn" @click="sumbitData">送出資料</button>
    </div>
  </div>
</template>

<script>
import Address from './Address'
import utils from '@/utils'

export default {
  data(){
    return{
      accountC:null,
      accountText:"",
      passwordC:null,
      passwordText:"",
      psdC:null,
      checkPsd:"",
      emailC:null,
      emailText:"",
      nameC:null,
      nameText:"",
      phoneC:null,
      phoneText:"",
      addressTitle:"200基隆市仁愛區",
      addressText:null
    }
  },
  components:{
    Address
  },
  methods:{
    accountCK(){
      if(this.accountC === null || this.accountC === ""){
        this.accountText = "帳號不得為空白"
      }else{
        if(/^.[A-Za-z0-9]+$/.test(this.accountC) === true){
          this.accountText = ""
        }else{
          this.accountText = "帳號不符合規定(請輸入6~24個英文或數字半形字元)"
        }
      }
    },
    passwordCK(){
      if(this.passwordC === null || this.passwordC === ""){
        this.passwordText = "密碼不得為空白"
      }else{
        if(/^.[A-Za-z0-9]+$/.test(this.passwordC) === true){
          this.passwordText = ""
        }else{
          this.passwordText = "密碼不符合規定(請輸入6~24個英文或數字半形字元)"
        }
      }
    },
    psdCK(){
      this.psdC !== this.passwordC ? this.checkPsd = "與密碼不符": this.checkPsd = ""
    },
    emailCK(){
      let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      if(this.emailC === null || this.emailC === ""){
        this.emailText = "電子信箱不得為空白"
      }else{
        if(emailRule.test(this.emailC) === true){
          this.emailText = ""
        }else{
          this.emailText = "Email不符合格式"
        }
      }
    },
    nameCK(){
      this.nameC === null || this.nameC === "" ?this.nameText = "名字不得為空白":this.nameText = ""
    },
    phoneCK(){
      this.phoneC === null || this.phoneC === "" ?this.phoneText = "電話不得為空白":this.phoneText = ""
    },
    getAddress(value){
      let address = value.join('')
      this.addressTitle = address
    },
    async sumbitData(){
      if(this.accountC === null || this.accountText === "帳號不符合規定(請輸入6~24個英文或數字半形字元)"){
        alert('請檢查帳號')
      }else if(this.passwordC === null || this.passwordText === "密碼不符合規定(請輸入6~24個英文或數字半形字元)"){
        alert('請檢查密碼')
      }else if(this.psdC === null || this.checkPsd === "與密碼不符"){
        alert('請檢查確認密碼')
      }else if(this.emailC === null || this.emailText === "Email不符合格式"){
        alert('請檢查電子信箱')
      }else if(this.nameC === null || this.nameText  === "名字不得為空白"){
        alert('請檢查姓名')
      }else if(this.phoneC === null || this.phoneText === "電話不得為空白"){
        alert('請檢查手機號碼')
      }else{
        const memberInfo = {
          account:this.accountC,
          password:this.passwordC,
          email:this.emailC,
          name:this.nameC,
          phone:this.phoneC,
          address:this.addressTitle+this.addressText
        }
        const res = await utils.request.apiUserSignUp(memberInfo)

        if (res.data.success) {
          alert('註冊成功')
          this.$router.push({path:'/'})
        } else {
          alert('註冊失敗')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.reg{
  width:500px;
  margin:auto;
  box-sizing: border-box;
  background: rgba(250, 250, 250, 1);
  .regWrap{
    padding:10px;
    box-sizing: border-box;
    text-align: left;
    input{
      margin-left: 5px;
      width:280px;
      height:24px;
    }
    select{
      height:30px;
    }
    div{
      padding-bottom: 10px;
    }
    div span:first-child{
      width:70px;
      display:inline-block;
      background-color: #DDD;
      height:30px;
      text-align: center;
      line-height: 30px;
    }
    .address{
      margin-top:10px;
      margin-left:75px;
    }
    input[type=checkbox]{
      width:15px;
      vertical-align: middle;
    }
  }
  h2{
    font-size:20px;
    font-family: 14px;
    padding:20px 0px;
    text-align: center;
  }
  .submitBtn{
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
    margin: .1rem auto .3rem;
    font-weight: 700;
    line-height: 30px;
    user-select: none;
    outline: none;
    border: none;
    display: block;
  }
  .submitBtn::after {
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

  .submitBtn:hover::after {
    transform: translate3d(320%, 0, 0) rotate(35deg);
  }
  .checkStyle{
    color:#F00;
    font-size:12px;
    font-family: 14px;
  }
}
</style>

