<template>
  <body>
  <h1 class="logo">SemiColon</h1>

  <div class="login">

    <div>
      <input class="login_data" type="text" placeholder="아이디">
    </div>
    <div>
      <input class="login_data" type="password" placeholder="비밀번호">
    </div>

  </div>


  <button class="login_button" type="submit">로그인</button>


  <div class="login_option">

    <div class="login_option_1">

      <div>
        <input type="checkbox" name="" id="">
        <span class="checkbox_name">로그인 상태 유지</span>
      </div>

    </div>
  </div>

  <div class="login_help">
    <a class="sign" href="">아이디 찾기</a>
    <span class="bar">|</span>
    <a class="sign" href="">비밀번호 찾기</a>
    <span class="bar">|</span>
    <a class="sign" href="">회원가입</a>
  </div>

  </body>
</template>

<script>
export default {
  name: "LoginView3"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap');

body{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f6f7;
}

.logo{
  font-family: 'Qwitcher Grypen', cursive;
  color: black;
  font-size: 110px;
}

.login{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login_data{
  margin-top: 15px;
  padding-left: 15px;
  width: 445px;
  height: 45px;
}

.login_button{
  display: flex;
  justify-content: center;
  width: 460px;
  height: 60px;
  font-size: 20px;
  color: white;
  background-color: black;
  border: none;
  margin-top: 30px;
  margin-bottom: 15px;
  align-items: center;
}

.login_option{
  display: flex;
  align-items: center;
  width: 460px;
  height: 25px;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-bottom: 10px;
  border-bottom: 1px #ceced3 solid;
}
.checkbox_name{
  font-size: 12px;
}
.login_option_2{
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: space-between;


}
.ipsec{
  font-size: 14px;
}
.off{
  font-size: 14px;
  font-weight: bold;
}
.onetime{
  text-decoration: underline;
  font-size: 13px;
}
.help{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: 1px #ceced3 solid;
}
.help_text{
  font-size: 11px;
  font-weight: bold;
}

.login_help{
  display: flex;
  margin-top: 20px;
  width: 240px;
  font-size: 12px;
  justify-content: space-between;

}
.bar{
  color: #ceced3;
}

a{
  text-decoration: none;
  color: #828282;
}

a:visited{
  text-decoration: none;
  color: #828282;
}
</style>