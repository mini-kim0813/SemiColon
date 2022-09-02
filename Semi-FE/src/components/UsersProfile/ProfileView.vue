<template>
  <div class="container">
    <div class="userNi">
      <h3>
        <b>{{ userNickName }} </b>
        <button class="btn1">프로필 편집</button><button class="btn2" @click="fnSetting"><i class="fa fa-cog" aria-hidden="true"></i></button>
      </h3>
    </div>
    <div class="userInfoVi">
      <h3>게시물
        <b>{{ userPostCount }}</b>
      </h3>
      <h3>팔로워
        <b>{{ followerCount }}</b>
      </h3>
      <h3>팔로우
        <b>{{ followCount }}</b>
      </h3>
    </div>
    <div class="userDescVi">
      <br/>
      <h3>
        <b>{{ userDescription1 }}</b>
      </h3>
      <h3>
        <b>{{ userDescription2 }}</b>
      </h3>
      <h3>
        <b>{{ userDescription3 }}</b>
      </h3>
    </div>
    <hr>
<!--    <div class="topnav">-->
<!--      <a class="active">모든 게시물</a>-->
<!--      <a>저장된 게시물</a>-->
<!--      <a>태그된 게시물</a>-->
<!--    </div>-->
  </div>
  <div class="buttonbox">
    <button class="btnL" type="button" id="btn_1">tap1</button>
    <button class="btnL" type="button" id="btn_2">tap2</button>
    <button class="btnL" type="button" id="btn_3">tap3</button>
    <button class="btnL" type="button" id="btn_4">tap4</button>
  </div>
  <div style="clear:both;"></div>
  <div style="width : 480px; height: 400px;">
    <div id="table1" width="480px">
      <table class="col-100 col">
        <colgroup>
          <col width="10%">
          <col width="20%">
          <col width="*%">
          <col width="*%">
        </colgroup>
        <thead>
        <tr>
          <th>#</th>
          <th>제품명</th>
          <th>상세설명</th>
          <th>가격</th>
          <th>비고</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>1</td>
          <td>~~~</td>
          <td>100$</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>2</td>
          <td>~~~</td>
          <td>100$</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>3</td>
          <td>~~~</td>
          <td>100$</td>
          <td>&nbsp;</td>
        </tr>
        </tbody>
      </table>

    </div>

    <div id="table2" width="480px">
      <table class="col-100 col">
        <colgroup>
          <col width="10%">
          <col width="20%">
          <col width="*%">
          <col width="*%">
        </colgroup>
        <thead>
        <tr>
          <th>#</th>
          <th>22</th>
          <th>22</th>
          <th>22</th>
          <th>22</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox2" type="checkbox">
              <label for="checkbox2">
              </label>
            </div>
          </td>
          <td>☆</td>
          <td>☆</td>
          <td>&nbsp;</td>
          <td>☆</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox2" type="checkbox">
              <label for="checkbox2">
              </label>
            </div>
          </td>
          <td>☆</td>
          <td>☆</td>
          <td>&nbsp;</td>
          <td>☆</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox2" type="checkbox">
              <label for="checkbox2">
              </label>
            </div>
          </td>
          <td>☆</td>
          <td>☆</td>
          <td>&nbsp;</td>
          <td>☆</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox2" type="checkbox">
              <label for="checkbox2">
              </label>
            </div>
          </td>
          <td>☆</td>
          <td>☆</td>
          <td>&nbsp;</td>
          <td>☆</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox2" type="checkbox">
              <label for="checkbox2">
              </label>
            </div>
          </td>
          <td>☆</td>
          <td>☆</td>
          <td>&nbsp;</td>
          <td>☆</td>
        </tr>
        </tbody>
      </table>
    </div>



    <div id="table3" width="480px">
      <table class="col-100 col">
        <colgroup>
          <col width="10%">
          <col width="20%">
          <col width="*%">
          <col width="*%">
        </colgroup>
        <thead>
        <tr>
          <th>3</th>
          <th>3</th>
          <th>3</th>
          <th>3</th>
          <th>3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox1" type="checkbox">
              <label for="checkbox1">
              </label>
            </div>
          </td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox1" type="checkbox">
              <label for="checkbox1">
              </label>
            </div>
          </td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox1" type="checkbox">
              <label for="checkbox1">
              </label>
            </div>
          </td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
          <td>♥</td>
        </tr>
        </tbody>
      </table>
    </div>



    <div id="table4" width="480px">
      <table class="col-100 col">
        <colgroup>
          <col width="10%">
          <col width="20%">
          <col width="*%">
          <col width="*%">
        </colgroup>
        <thead>
        <tr>
          <th>4</th>
          <th>4</th>
          <th>4</th>
          <th>4</th>
          <th>4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>♤</td>
          <td>♤</td>
          <td>&nbsp;</td>
          <td>%<br>%<br>%</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>♤</td>
          <td>♤</td>
          <td>&nbsp;</td>
          <td>%<br>%<br>%</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>♤</td>
          <td>♤</td>
          <td>&nbsp;</td>
          <td>%<br>%<br>%</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>♤</td>
          <td>♤</td>
          <td>&nbsp;</td>
          <td>%<br>%<br>%</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox2 m-0">
              <input id="checkbox0" type="checkbox">
              <label for="checkbox0">
              </label>
            </div>
          </td>
          <td>♤</td>
          <td>♤</td>
          <td>&nbsp;</td>
          <td>%<br>%<br>%</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>

export default {
  name: 'ProfileView',
  data() {
    return {
      userPostCount: 10,
      followerCount: 5,
      followCount: 7,
      userNickName: 'Jeon Jong Wook',
      userDescription1: '설명',
      userDescription2: '#태그',
      userDescription3: '안녕!',
    };
  },
  methods: {
    fnSetting() {
      this.$("/Setting");
    }
  },
  mounted() {
    window.onload = function() {
      const table1 = document.getElementById("table1");
      const table2 = document.getElementById("table2");
      const table3 = document.getElementById("table3");
      const table4 = document.getElementById("table4");

      table1.show();
      table2.hide();
      table3.hide();
      table4.hide();
    }
  },
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
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  margin-top: 100px;
  margin-left: 100px;
}
.col {
  border-collapse: collapse;
}

.btnL {
  background-color: dodgerblue;
  padding: 8px 30px !important;
  width: 120px;
  font-size: 14px;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 0px solid transparent;
  float: left;
}

.btnL:hover {
  background-color: skyblue;
}

.col-100 {
  width: 100%;
}

table {
  text-align: center;
  font-size: 14px;
}

th {
  background-color: dimgrey;
  border: 1px solid rgba(224, 224, 224, 0.2);
  height: 34px;
  color: white;
  font-size: 12px;
}

tr,
td {
  padding: 4px 0px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  font-size: 12px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 12px;
}

.topnav a:hover {
  background-color: whitesmoke;
  color: #625c5c;
}

.topnav a.active {
  background-color: whitesmoke;
  color: #625c5c;
}

.userInfoVi {
  text-align: center;
  margin-top: 30px;
  padding: 12px;
  text-decoration: none;
}

.userInfoVi > h3 {
  text-align: center;
  float: left;
  justify-content: center;
}

.userInfoVi > h3 > b {
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 18px;
  padding: 10px;
}

.userDescVi {
  text-align: center;
  text-decoration: none;
  margin-top: 12px;
  margin-bottom: 15px;
}

.userDescVi > h3 {
  text-align: center;
  margin: 12px;
}

.userDescVi > h3 > b {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 20px;
  text-align: center;
}

.userNi > h3 {
  text-align: center;
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 28px;
}

.userNi > h3 > button {
  border: none;
  color: #4d4c4c;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

.userNi > h3 > .btn1 {
  font-size: 22px;
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  margin: 15px;
  border-radius: 8px;
}

.userNi > h3 > .btn2 {
  font-size: 20px;
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  margin: 15px;
  border-radius: 8px;
}



</style>