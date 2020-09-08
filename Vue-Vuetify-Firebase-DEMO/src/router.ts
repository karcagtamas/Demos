import Vue from "vue";
import Router from "vue-router";
import Demo from "./views/Demo.vue";
import Registration from "./views/Registration.vue";
import Login from "./views/Login.vue";
import Verify from "./views/Verify.vue";
import firebase from "firebase";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "demo",
      component: Demo,
      beforeEnter: (to, from, next) => {
        let user = firebase.auth().currentUser;
        if (user != null) {
          if (user.emailVerified) next();
          else {
            next(false);
            alert("A tovább lépéshez aktiválnod kell a fiókodat!");
          }
        } else {
          next(false);
          alert("A tovább lépéshez be kell lépned a fiókodba!");
        }
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      beforeEnter: (to, from, next) => {
        let user = firebase.auth().currentUser;
        if (user != null) {
          if (user.emailVerified) next();
          else {
            next(false);
            alert("A tovább lépéshez aktiválnod kell a fiókodat!");
          }
        } else {
          next(false);
          alert("A tovább lépéshez be kell lépned a fiókodba!");
        }
      }
    },
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) next();
        else {
          next(false);
          alert("A tovább lépéshez ki kell lépned a fiókodból!");
        }
      }
    },
    {
      path: "/verify",
      name: "verify",
      component: Verify,
      beforeEnter: (to, from, next) => {
        let user = firebase.auth().currentUser;
        if (user != null) {
          if (!user.emailVerified) next();
          else {
            next(false);
            alert("A fiókod már aktiválva van!");
          }
        } else {
          next(false);
          alert("A tovább lépéshez be kell lépned a fiókodba!");
        }
        /* if (user && !user.emailVerified) next();
        else next(false); */
      }
    }
  ]
});
