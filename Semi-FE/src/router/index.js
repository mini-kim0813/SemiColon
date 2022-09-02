import { createRouter, createWebHistory } from 'vue-router'
// Admin Page View
import AdMiniStarTorView from "@/components/Admin/AdMiniStarTorView.vue";
import AdMinView from "@/components/Admin/UserList.vue";

// Chatting Page View
import ChattingView from "@/components/Chat/ChattingView.vue";

// Login SUCCESS Page View
import LoginSUCCESView from "@/components/common/UserLoginSuccessView.vue";
import SettingView from "@/components/common/UserSettingsView.vue";
import userPostView from "@/components/Post/userPostView.vue";
import userPostEditView from "@/components/Post/userPostEditView";
import userPostWriteView from "@/components/Post/userPostWriteView";
import userProfileView from "@/components/UsersProfile/ProfileView.vue";
import userProfileAddView from "@/components/UsersProfile/ProfileAdded.vue";

// Extension Page View
import DevProfileView from "@/components/DevProfileView.vue";
import WelcomeView from "@/components/WelcomeView.vue";
import loginView from "@/components/LoginView.vue";
import loginView2 from "@/components/LoginView2.vue";
import loginView3 from "@/components/LoginView3.vue";
import notFoundView from "@/components/NotFoundView.vue";
import registerView from "@/components/RegisterView.vue";
import findAccountView from "@/components/User/findAccount.vue";
// import sendEmailView from "@/components/SendEmail.vue";
// import registerView2 from "@/components/RegisterView2.vue";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
  },
  {
    path: '/devProfile',
    name: 'DeveloperPage',
    component: DevProfileView,
  },
  {
    path: '/vUserPost',
    name: 'userPost',
    component: userPostView,
  },
  {
    path: '/login3',
    name: 'loginView',
    component: loginView3,
  },
  {
    path: '/login2',
    name: 'loginView2',
    component: loginView2,
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
    children : [
      {
        path: '/userPost',
        name: 'userPost',
        component: userPostView,
        props: { isLogin: true },
        children: [
          {
            path: '/:{userNickName}/write',
            name: 'userPostWrite',
            component: userPostWriteView,
            props: { isLogin: true },
          },
          {
            path: '/:{userNickName}/edit',
            name: 'userPostEdit',
            component: userPostEditView,
            props: { isLogin: true },
          },
        ]
      },
      {
        path: '/success',
        name: 'loginSUCCESS',
        component: LoginSUCCESView,
        props: { isLogin: true },
      },
      // {
      //   path: '/:{userNickName}/Profile',
      //   name: 'Profile',
      //   component: userProfileView,
      //   props: { isLogin: true },
      //   children: [
      //     {
      //       path: '/:{userNickName}/setting',
      //       name: 'ProfileSetting',
      //       component: SettingView,
      //       props: { isLogin: true },
      //     },
      //   ],
      // },
      {
        path: '/admin/:{userNickName}',
        name: 'AdminPost',
        component: AdMiniStarTorView,
        props: { isLogin: true },
      },
      {
        path: '/chat/:{userNickName}',
        name: 'ChattingPage',
        component: ChattingView,
        props: { isLogin: true },
        // children: [
        //
        // ]
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: registerView,
  },
  {
    path: '/findAccount',
    name: 'findAccount',
    component: findAccountView,
  },
  // {
  //   path: '/register2',
  //   name: 'register2',
  //   component: registerView2,
  // },
  {
    path: '/profile',
    name: 'profileView',
    component: userProfileView,
    props: { isLogin: true },
  },
  {
    path: '/profileAdd',
    name: 'profileAddView',
    component: userProfileAddView,
    props: { isLogin: true },
  },
  {
    path: '/Admin',
    name: 'AdminView',
    component: AdMinView,
    props: { isLogin: true },
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: userProfileView,
    // props: { isLogin: true },
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: SettingView,
    // props: { isLogin: true },
  },
  {
    path: '/:catchAll(.*)+',
    name: 'error404',
    component: notFoundView,
  },
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;

