<template>
	<el-container>
		<div class="loginbg"></div>
	  <el-main>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm xl-login-container">
				<h2>管理员登陆</h2>
				<el-form-item prop="username" label-width="0">
					<el-input v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item prop="password" label-width="0">
					<el-input v-model="ruleForm.password" type="password"></el-input>
				</el-form-item>
				<el-button type="primary" class="btn-block" @click="submitForm('ruleForm')">登陆</el-button>
			</el-form>
		</el-main>
	</el-container>
</template>
 
<script  type="text/javascript">
	import pub from '../assets/js/basic.js';
	export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
      	var _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) { 
            this.$http.post("app/login",this.ruleForm).then(response =>{
            	console.log(response,"zzz")
            	_this.$router.push({path: '/index/proindex'})
            }).catch(function (error) {
					    _this.$router.push({path: '/index/proindex'})
					  });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped" lang="less">
	@import "../assets/css/basic.less";
	html{
		min-height: 100%;
	}
</style>
