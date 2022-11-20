<template>

  <div class="hello">
    <el-button @click="login">login</el-button>
    <el-button type="primary" @click="getkey" >获取token</el-button>
    <el-button type="success">success</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning" round>warning</el-button>
    <el-button type="danger">danger</el-button>

    <i class="fa fa-user"></i>
    <div id="wx_qrcode"></div>


  </div>

</template>

<script>





import {getToken} from '../utils/setToken'



export default {


  mounted() {
		window.WwLogin({
			id: 'wx_qrcode', // 登录页面显示二维码的容器id
			appid: 'wx1b8f8bbebdd6f030', // 企业微信的CorpID，在企业微信管理端查看
			agentid: '1000009', // 授权方的网页应用id，在具体的网页应用中查看
			redirect_uri: encodeURIComponent('http://192.168.31.38:8080/home'), // 重定向的地址，需要进行encode
		})
	},
  
  methods: {
    getkey(){
      const user = (getToken("username"))
      console.log("user:",user,"key:",getToken("token"))
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">


.hello {
  background: rgb(195, 247, 193);
  width: 100%;
  height: 100%;
  position: absolute;
  // .el-button {
  //   color: rgb(198, 193, 196);
  // }
}


</style>
