<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer,

  }
}
</script>


<template>
  <div id="gnb-root">
    <div class="light-theme">
      <Header/>
    </div>
  </div>
  <main>
    <section id="rebranded-home-main-section-top" class="background-pale-peach">
      <div id="home-main-top">
        <div class="home-main-desc">
          <h1 class="home-main-title">당신 근처의<br>지역 생활 커뮤니티</h1>
          <p class="service-desc">
            동네라서 가능한 모든 것<br>당근에서 가까운 이웃과 함께해요.
          </p>
          <br>
          <div id="download-buttons">
            <a target="_blank" class="fixed-download-button" id="header-download-button-android"
               href="https://play.google.com/store/apps/details?id=com.towneers.www">
              <img class="fixed-google-play" alt="Google Play"
                   src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-white-0531cab5dbe15262e226cfb4acebeb316708ae0034d50b86ad4d809a03b6f5f0.svg">
              <div class="fixed-download-text">Google Play</div>
            </a>
            <a target="_blank" class="fixed-download-button" id="header-download-button-ios"
               href="https://apps.apple.com/app/id1018769995">
              <img class="fixed-apple-store" alt="App Store"
                   src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-white-9ebb10b431c549dd19f032f70e6762df307939b5add030265d9c2dea888b2d03.svg">
              <div class="fixed-download-text">App Store</div>
            </a>
          </div>
        </div>
        <div class="home-main-image-top">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-e765d561ee9df7f5ab897f622b8b5a35aaa70314f734e097ea70e6c83bdd73f1.webp "
              class="home-main-image-top" alt="중고거래, 동네생활 질문글, 알바와 동네업체"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-eb44f81acb1938b57ba029196887cdd56fbb66dc46aa5d8c6d8392a7d8c9e671.png">
        </div>
      </div>
    </section>

    <section class="rebranded-home-main-section" style="background-color:#f9f9f9">
      <div class="home-main-content">
        <div class="home-main-image home-main-image-01">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-c84dd43a3a50742bc296bd36e8b9b1c4a487b8d36aaf67e7f90ecce80201cf60.webp "
              class="home-main-image-01" alt="우리동네 중고 직거래 사진"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-efd09cb54044140d530c6647906303c669ca80a8b51473722fc2b1747a3d9047.png">
        </div>
        <div>
          <p class="service-title">
            중고거래
          </p>
          <h1 class="home-main-title">믿을만한<br>이웃 간 중고거래</h1>
          <p class="service-desc">
            동네 주민들과 가깝고 따뜻한 거래를<br>지금 경험해보세요.
          </p>
          <div class="home-buttons">
            <a class="home-button button-text" href="/hot_articles">인기매물 보기</a>
            <a class="home-button button-text" href="/trust">믿을 수 있는 중고거래</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div id="footer-root">
    <div class="light-theme">
      <Footer/>
    </div>
  </div>
</template>

<style>
@import "./components/css/app.css";
</style>
