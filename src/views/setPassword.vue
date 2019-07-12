<template>
  <div class="container">
    <div class="back-icon">
      <img src="../assets/img/back.png" alt />
    </div>
    <div class="password">登录密码设置</div>
    <div class="moblie">
      <input type="text" placeholder="输入手机号码" />
      <span>发送验证码</span>
    </div>
    <div class="line"></div>
    <div class="code">
      <input type="text" placeholder="输入手机验证码" />
    </div>
    <div class="line"></div>
    <div class="login">
      <input type="text" placeholder="输入6到20位手机登录密码" />
    </div>
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
  input {
    background-color: #020202;
    color: #4c4331;
    border: none;
    outline: none;
    font-size: 0.28rem;
  }
  input::placeholder {
    color: #4c4331;
  }
  .back-icon {
    width: 100%;
    height: 0.81rem;
    img {
      width: 0.81rem;
      height: 0.81rem;
    }
  }
  .password {
    margin-top: 0.67rem;
    color: #ceced1;
    font-size: 0.46rem;
    line-height: 0.46rem;
  }
  .moblie {
    font-size: 0.28rem;
    margin-top: 0.97rem;
    display: flex;
    justify-content: space-between;
    span:nth-child(2) {
      color: #4c4331;
    }
  }
  .code {
    margin-top: 0.4rem;
    color: #cdcdd0;
    font-size: 0.28rem;
    line-height: 0.28rem;
  }
  .login {
    margin-top: 0.4rem;
    color: #cdcdd0;
    font-size: 0.28rem;
  }
  .line {
    margin-top: 0.4rem;
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


