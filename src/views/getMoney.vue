<template>
  <div class="container">
    <div class="back-icon">
      <img src="../assets/img/back.png" alt />
    </div>
    <div class="password">提币</div>
    <div class="title1">提币数量</div>
    <div class="cash">
      <input type="text" placeholder="输入提现数量" />
    </div>
    <div class="line"></div>
    <div class="title2">填写钱包地址</div>
    <div class="address">
      <input type="text" placeholder="输入或长按粘贴钱包地址" />
    </div>
    <div class="line"></div>
    <div class="title3">备注</div>
    <div class="tips">
      <input type="text" placeholder="MEMO" />
    </div>
    <div class="line"></div>
    <div class="btn" @click="affirmPassword"></div>
    <div class="notice">
      <div>注意事项</div>
      <div>1、请认真检查提现地址正确无误，否则导致的损失平台概不负责；</div>
      <div>2、提现到上述钱包地址后，将会在2个区块确认后到账。</div>
    </div>

    <!-- 弹框 -->
    <div class="shade" v-show="show == true" :class="{animation:isactive ==show}">
      <div class="box" >
        <div class="title">请输入支付密码</div>
        <div class="input">
          <input type="text" placeholder="支付密码" />
        </div>
        <div class="footer">
          <div class="cancle" @click="show = false"></div>
          <div class="affirm" @click="show = false"></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nikname",
  data() {
    return {
      show: false,
      isactive:true,
    };
  },
  methods: {
    affirmPassword() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0 0.42rem;
  padding-top: 0.63rem;
  box-sizing: border-box;
  .shade {
   
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    .animation {
      transition: all 4s;
    }
    .box {
      padding: 0 0.36rem;
      box-sizing: border-box;
      opacity: 1;
      width: 6.42rem;
      height: 3.99rem;
      background-color: #fff;
      border-radius: 0.2rem;
      margin-top: 3.78rem;
      .title {
        width: 100%;
        margin-top: 0.53rem;
        text-align: center;
        color: #3f2d26;
        font-size: 0.34rem;
      }
      .input {
        margin-top: 1rem;
        width: 100%;
        border-bottom: 2px solid #ccc;
        input {
          background-color: #fff;
          font-size: 0.28rem;
          color: #4c4331;
        }
      }
      .footer {
        margin-top: 0.47rem;
        display: flex;
        justify-content: space-around;
        .cancle {
          width: 2.44rem;
          height: 0.75rem;
          background: url("../assets/img/cancel.png") no-repeat center / 100%
            100%;
        }
        .affirm {
          width: 2.44rem;
          height: 0.75rem;
          background: url("../assets/img/affirm.png") no-repeat center / 100%
            100%;
        }
      }
    }
  }
  input {
    background-color: #020202;
    color: #4c4331;
    border: none;
    outline: none;
    font-size: 0.28rem;
    width: 5rem;
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
  .title1 {
    margin-top: 0.97rem;
    color: #f3dfb7;
    font-size: 0.24rem;
  }
  .title2 {
    margin-top: 0.6rem;
    color: #f3dfb7;
    font-size: 0.24rem;
  }
  .title3 {
    margin-top: 0.6rem;
    color: #f3dfb7;
    font-size: 0.24rem;
  }

  .cash {
    font-size: 0.28rem;
    margin-top: 0.32rem;
    color: #4c4331;
  }
  .address {
    margin-top: 0.32rem;
  }
  .tips {
    margin-top: 0.32rem;
  }
  .line {
    margin-top: 0.15rem;
    width: 6.69rem;
    height: 1px;
    background: url("../assets/img/line.png") center no-repeat / 100% 100%;
  }
  .btn {
    margin-top: 0.73rem;
    width: 6.67rem;
    height: 0.87rem;
    background: url("../assets/img/cash.png") center no-repeat / 100% 100%;
  }
  .notice {
    margin-top: 0.66rem;
    color: #978561;
    font-size: 0.26rem;
    div {
      line-height: 0.4rem;
    }
  }
}
</style>


