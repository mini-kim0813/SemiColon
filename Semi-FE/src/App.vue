<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">SemiColon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">로그인</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
  <router-view/>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      isLogined: false,
      users: [],
      arrayI: [],
      userInfoId: null,
      userNickName: '',
      password: '',
      userEmail: '',
      userInfoCreateDate: '',
      userUniqueID: null,
      userDescription: '',
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://fonts.googleapis.com/css2/family=Roboto:wght@300;400;500;700;900&");
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

template {
  width: 125%;
  height: 125%;
}

body {
  width: 125%;
  height: 125%;
  transition: all 0.5s ease;
}

.nav-item {
  font-size: 14px;
}
</style>
