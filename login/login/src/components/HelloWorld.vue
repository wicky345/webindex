<template>
<div class="login_container" style="background-color:#141a48;overflow:hidden;margin:0px;height:700px;">
  <div class="login_msg" style="width:300px">
    <el-container>
      <el-header class="login_legend">欢迎登陆</el-header>
      <el-main class="login_main" :rules="loginRules" :model="loginForm">
    <el-input class="username" v-model="loginForm.email" placeholder="请输入邮箱" prefix-icon="el-icon-mobile-phone" auto-complete="on"></el-input> 
    <el-input class="userpsw" v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-message"></el-input>
    <el-button class="btnsubmit" @click="submit('loginForm')" type="primary">提交</el-button>
      </el-main>
      </el-container>
  </div> 
  </div>
</template>
<script>
export default {
  data () {
    const validateEmail=(rule,value,callback) => {
      if(!isWscnEmail(value)){
        //export function isWscnEmail(str){
        //const reg=/^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wz\.com$/i;
        //return reg.test(str.trim());
        //}
        callback(new Error('请输入正确的合法邮箱'));
      }else{
        callback();
      }
    };
    const validatePass = (rule,value,callback) => {
        if (value.length < 6) {
            callback(new Error('密码不能小于6位'));
          } else {
            callback();
          }
        };  
        return {
          loginForm: {
            email: 'admin@wz.com',
            password: ''
          },
          loginRules: {
            email: [
                { required: true, trigger: 'blur', validator: validateEmail }
            ],
            password: [
                { required: true, trigger: 'blur', validator: validatePass }
            ]
          },
          loading: false,
          showDialog: false
        }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
  font-size:30px;
  color:#FFF;
  letter-spacing:8px;
}
.login_msg{
  margin:70px auto;
}
.el-input{
  margin-bottom:30px;
}
.el-button{
  width:100px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
