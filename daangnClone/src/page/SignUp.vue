<template>
    <div calss = "SignUpBox">
    <label for="userId">User ID:</label>
    <input v-model="userId" required><br>
    <label for="password">Password:</label>
    <input v-model="password" required><br>
    <label for="nickname">닉네임:</label>
    <input v-model="nickname" required><br>
    <label for="address">주소:</label>
    <input v-model="address" required><br>

    <button @click="signUp()">회원가입</button>
</div>
</template>


<script>
export default {
  name: "SignUp",
  data() {
    return {
      userId: "",
      password: "",
      nickname: "",
      address: ""
    };
  },
  methods: {
    signUp() {
      this.$axios.post("http://15.164.231.25:8080/api/user/signup", {
        "userId": this.userId,
        "password": this.password,
        "nickname": this.nickname,
        "address": this.address
      })
      .then((response) => {
        
        console.log(response);
        //회원가입성공하면 로그인페이지로
        this.$router.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  mounted() {
    // this.get(); // get 메서드가 정의되어 있지 않아 주석 처리했습니다.
  },
};
</script>

<style>
    body{
        margin-top: 60px;
    }
</style>