<template>
  <div class="container">
    <div class="back-icon">
      <img src="../assets/img/back.png" alt />
    </div>
    <div class="password">注册</div>
    <div class="nickname">
      <input type="text" placeholder="请输入昵称" />
    </div>
    <div class="line"></div>
    <div class="code">
      <input type="text" placeholder="请输入手机号码" />
    </div>
    <div class="line"></div>
    <div class="moblie">
      <input type="text" placeholder="请输入手机验证码" />
      <span>发送验证码</span>
    </div>
    <div class="line"></div>
    <div class="login">
      <input type="text" placeholder="请输入6到20位含有字母、数字的密码" />
    </div>
    <div class="line"></div>
    <div class="pay">
      <input type="text" placeholder="输入6位数字支付密码" />
    </div>
    <div class="line"></div>
    <div class="invite">
      <input type="text" placeholder="输入邀请码" />
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
    width:5rem;
  }
  input::placeholder {
    color: #4C4331;
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
  .nickname {
    font-size: 0.28rem;
    margin-top: 0.97rem;
    color: #4c4331;
  }
  .moblie {
    font-size: 0.28rem;
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    span:nth-child(2) {
      color: #F5D183;
    }
  }
  .code {
    margin-top: 0.4rem;
    color: #cdcdd0;
    font-size: 0.28rem;
    line-height: 0.28rem;
  }
  .login,.pay,.invite {
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
    margin-top: 0.94rem;
    width: 6.67rem;
    height: 0.87rem;
    background: url("../assets/img/regsiter.png") center no-repeat / 100% 100%;
  }
}
</style>


