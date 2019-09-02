<template>
  <div class="get-block">
    <div class="get-btn" @click="$emit('getApi')">取得資料</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.get-block{
  .get-btn{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 80px;
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