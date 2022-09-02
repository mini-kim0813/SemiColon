<template>
	<div class="login">
		<h1>SemiColon</h1>
		<br />
		<form class="LoginForm" @submit.prevent="fnLogin">
			<p>
				<label for="memberEmailInput">EMAIL</label>&nbsp;
				<input type="text" id="memberEmailInput" class="input_text" ref="memberEmailInput"
					placeholder="이메일을 입력하세요." v-model="user_email"/>
			</p>
			<p>
				<label for="memberPasswordInput">PASSWORD</label>
				<input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput"
               placeholder="비밀번호를 입력하세요." v-model="user_pw"/>
			</p>
			<div class="login_etc">
				<div class="checkbox">
					<input type="checkbox" name="SaveSession" id="SaveSession"> 정보를 저장할까요?
				</div>
				<br />
				<div class="forgot_account">
					<a href="/findId"> 아이디</a> 혹은 <a href="/findPw"> 비밀번호</a>를 잊으셨나요?
				</div>
			</div>
			<br />
			<div class="SubmitAccount">
				<span>만약 계정이 없다면, <router-link to="/register">회원가입</router-link>을 먼저 진행해주세요!</span>
			</div>
			<p class="buttons">
				<button @click="fnLogin" type="button" id="btn_login" class="btn btn-primary btn-lg" data-bs-toggle="modal">로그인</button>
				<button @click="doCancel" type="button" id="btn_login" class="btn btn-danger btn-lg" data-bs-toggle="modal">취소</button>
			</p>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import { rules } from '@/assets/mixin/rules';

export default {
	name: 'LoginForm',
  mixins: [
    rules,
  ],
	data : function() {
		return {
      user_email: '',
      user_pw: '',
      users: [],
		};
	},
	methods : {
    save() {
      // const isValidate = this.$refs.refForm.validate();
    },
    fnLogin() {
      try {
          if(this.user_email === '') {
            alert('이메일을 입력해주세요');
            return
          }
          if(this.user_pw === '') {
            alert('비밀번호를 입력해주세요.');
            return
          }
          if(this.user_email != null && this.user_pw != null) {
            axios.get('/api/login/').then(res => {
              // this.users = res.data;
              console.log(res.data);
              this.router.push('/userPost')
            });
          }else {
            alert("데이터 가져오기 실패!");
          }
      } catch (err) {
          console.log(err);
      }
    },
		doCancel() {
			document.getElementById("memberEmailInput").value = null;
			document.getElementById("memberPasswordInput").value = null;
			document.getElementById("memberEmailInput").focus();
		},
	},
	mounted() {
		document.getElementById("memberEmailInput").focus();
	},
};
</script>

<style scoped>
/* Google Fonts Import */

@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");

/* Import End */

div {
	box-sizing: border-box;
}

div .login { background-color: white; }

.login { 
	width: 800px; 
	margin: 20px auto;
}
.login h1 { 
	text-align: center; 
	font-family: 'Black Han Sans', sans-serif; 
}
.LoginForm { 
	margin: auto; 
	text-align: left;
}
.LoginForm p > label { 
	display: inline-block; 
	font-size: 24px; 
	padding-right: 16px;
	align-items: center; 
	font-family: 'Black Han Sans', sans-serif; 
}
.LoginForm p > .input_text { 
	width: 100%;
	height: 50px;
	text-align: center;
	font-family: 'Jua', sans-serif;
	border-radius: 30px;
	margin-top: 10px;
	outline: none;
	font-size: 28px;
	align-items: center;
}

.LoginForm p > .input_text:focus { 
	font-size: 340%;
}

.buttons {
  margin-top: 20px;
  margin-left: 300px;
}

.buttons #btn_login {
	text-align: center;
  font-weight: bold;
}

.login_etc {
  padding: 12px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
}

.login_etc > .forgot_account > a {
	text-decoration: underline;
}

div .SubmitAccount {
	padding: 12px;
	width: 100%;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	text-align: center;
	margin-left: 10px;
}
</style>
