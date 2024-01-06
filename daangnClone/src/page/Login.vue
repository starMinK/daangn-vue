

<template>
    <div class = "LoginBox">
        <label for="userId">User ID:</label>
        <input v-model="userId" required><br>

        <label for="password" type="password">Password:</label>
        <input v-model="password" type="password" required><br>

        <button @click="login()">로그인</button>
        <router-link to="/signup">회원가입</router-link>
    </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$axios.post("http://15.164.231.25:8080/api/user/login", {
        "userId": this.userId,
        "password": this.password
      })
      .then((response) => {
        console.log(response);
        const token = response.headers.authorization;
        
        localStorage.setItem("Authorization", token);
        this.$router.push('/');

      })
      .catch((error) => {
        console.log(error);
        alert("아이디, 비밀번호 다시확인");
      });
    },
  },
  mounted() {
    // this.get(); // get 메서드가 정의되어 있지 않아 주석 처리했습니다.
  },
};
</script>


<style scoped>
    /* Reset some default styles */
    body, html, div, label, input, button {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Set a nice background color */
    body {
        background-color: #f5f5f5;
        font-family: 'Arial', sans-serif;
    }

    /* Style for the LoginBox */
    .LoginBox {
        max-width: 400px;
        margin: 50px auto;
        margin-top: 200px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    /* Style for labels */
    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #333333;
    }

    /* Style for input fields */
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    /* Style for the login button */
    button {
        background-color: #ff6600;
        color: #ffffff;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    /* Style for the signup link */
    router-link {
        display: block;
        text-align: center;
        margin-top: 15px;
        color: #333333;
        text-decoration: none;
    }
</style>