<template>
  <div class="container" id="container">
    <div class="form-container sign-up-container">
      <form>
        <h1>회원가입</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-twitter-square"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        </div>
        <span>혹은 이메일로 계정 생성도 가능합니다!</span>
        <input type="email" placeholder="이메일을 입력해주세요" v-model="user_Email_register" />
        <input type="text" placeholder="닉네임을 입력해주세요" v-model="user_NickName_register" />
        <input type="password" placeholder="비밀번호를 입력해주세요" v-model="user_Pw_register" />
        <button @click.prevent="fnRegister">회원가입</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form>
        <h1>로그인</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-twitter-square"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        </div>
        <span>계정이 있으시다면<a href="/login2"> 로그인 </a>을 이용해주세요!</span>
        <input type="email" placeholder="이메일 주소를 입력해주세요" v-model="user_Email_login"/>
        <input type="password" placeholder="비밀번호를 입력해주세요" v-model="user_Pw_login"/>
        <a href="/findAccount">닉네임 혹은 비밀번호를 잊어버리셨나요?</a>
        <button @click.prevent="fnLogin">로그인</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>다시 돌아왔구나!</h1>
          <p class="typing-txt">서비스를 이용하려면 로그인 해주세요</p>
          <button class="ghost" id="signIn">로그인</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>안녕!</h1>
          <p class="typing-txt">회원가입 하고 SemiColon과 함께 여행을 시작하십시오.</p>
          <button class="ghost" id="signUp">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView2",
  mounted() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  },
  data : function() {
    return {
      user_Email_login: '',
      user_NickName_login: '',
      user_Pw_login: '',
      user_Email_register: '',
      user_NickName_register: '',
      user_Pw_register: '',
      users: [],
    };
  },
  methods: {
    fnLogin() {
      try {
        if(this.user_Email_login === '') {
          alert('이메일을 입력해주세요');
          return
        }
        if(this.user_Pw_login === '' ) {
          alert('비밀번호를 입력해주세요.');
          return
        }
        if(this.user_Email_login != null && this.user_Pw_login != null) {
          axios.get('/api/login/').then(res => {
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
    fnRegister(){
      try {
        if(this.user_Email_register === '') {
          alert('이메일을 입력해주세요');
          return
        }
        if(this.user_Pw_register === '' ) {
          alert('비밀번호를 입력해주세요.');
          return
        }
        if(this.user_NickName_register === '' ) {
          alert('닉네임을 입력해주세요.');
          return
        }
        if(this.user_Email_register != null && this.user_Pw_register != null && this.user_NickName_register != null) {
          axios.post('/api/signUp', {
            userEmail: this.user_Email_register,
            userNickName: this.user_NickName_register,
            password: this.user_Pw_register,
          })
        }else {
          alert("데이터 가져오기 실패!");
        }
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
/* ---- */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
@import url('https://fonts.googleapis.com/css?family=Finger+Paint');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');

/* START */
@keyframes tipsy {
  0 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

body {
  background-color: #2e2e31;
}

.a_animation {
  color: #fffbf1;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.a_animation:before,
.a_animation:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid red;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

.a_animation:before {
  border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  z-index: -1;
}

.a_animation:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
  box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}

/* END */
* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: transparent;
  backface-visibility: hidden;
  height: 100vh;
  margin: -20px 0 50px;
}


h1 {
  font-weight: bold;
  margin: 0;
  /*font-family: 'Black Han Sans', sans-serif;*/
  font-family: 'Gamja Flower', cursive;
  font-size: 32px;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 14.5px;
  font-family: 'Black Han Sans', sans-serif;
}

a {
  color: #333;
  text-decoration: none;
  margin: 15px 0;
  font-size: 18px;
  font-family: 'Jua', sans-serif;
}

a::hover {
  color: blue;
}

button {
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  font-size: 20px;
  font-family: 'Jua', sans-serif;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 20px;
  font-family: 'Jua', sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>