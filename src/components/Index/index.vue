<template>
  <Login
    v-if="!isLogin"
  />
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  data () {
    return {

    }
  },
  computed: {
    isLogin () {
      return this.$store.state.userInfo.isLogin
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="scss">

</style>