<template>
  <div class="container">
    <div class="back-icon">
      <img src="../assets/img/back.png" alt />
    </div>
    <div class="language">语言</div>
    <div class="english">English</div>
    <div class="line"></div>
    <div class="chinese">
      <span>简体中文</span>
      <span class="icon"></span>
    </div>
    <div class="line"></div>
    <div class="old">繁體中文</div>
    <div class="line"></div>
    <div class="Korean">한글</div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: "language"
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
  .language {
    margin-top: 0.67rem;
    color: #ceced1;
    font-size: 0.46rem;
    line-height: 0.46rem;
  }
  .english {
    font-size: 0.28rem;
    margin-top: 1rem;
    color: #806944;
  }
  .chinese {
    margin-top: 0.4rem;
    color: #ebc87e;
    font-size: 0.28rem;
    line-height: 0.28rem;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding-right: 0.23rem;
    box-sizing: border-box;
  }
  .old {
    margin-top: 0.4rem;
    color: #806944;
    font-size: 0.28rem;
  }
  .line {
    margin-top: 0.4rem;
    width: 6.69rem;
    height: 1px;
    background: url("../assets/img/line.png") center no-repeat / 100% 100%;
  }
  .Korean {
    margin-top: 0.4rem;
    color: #806944;
    font-size: 0.28rem;
  }
  .icon {
    display: block;
    width: 0.27rem;
    height: 0.19rem;
    background:url('../assets/img/yes.png') no-repeat center / 100% 100%;
  }
}
</style>


