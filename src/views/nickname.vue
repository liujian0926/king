<template>
  <div class="container">
    <div class="back-icon">
      <img src="../assets/img/back.png" alt />
    </div>
    <div class="nick">昵称设置</div>
    <div class="name">谢霆锋</div>
    <div class="line"></div>
    <div class="btn"></div>
  </div>
</template>
<script>
export default {
  name: "nikname"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0 0.42rem;
  padding-top: 0.63rem;
  box-sizing: border-box;
  .back-icon {
    width: 100%;
    height: 0.81rem;
    img {
      width: 0.81rem;
      height: 0.81rem;
    }
  }
  .nick {
    margin-top: 0.87rem;
    color: #fff;
    font-size: 0.46rem;
    line-height: 0.46rem;
  }
  .name {
    font-size: 0.28rem;
    color: #7E6843;
    line-height: 0.28rem;
    margin-top: 0.99rem;
  }
  .line {
    margin-top: 0.39rem;
    width: 6.69rem;
    height: 1px;
    background: url("../assets/img/line.png") center no-repeat / 100% 100%;
  }
  .btn {
    margin-top: 0.98rem;
    width: 6.67rem;
    height: 0.87rem;
    background: url("../assets/img/submit.png") center no-repeat / 100% 100%;
  }
}
</style>


