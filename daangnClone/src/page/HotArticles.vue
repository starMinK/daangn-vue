<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: HotArticles,
  components: {
    Header,
    Footer,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <Header></Header>
  <section class="fleamarket-cover">
    <div class="cover-content">
      <h1 class="cover-title">
        믿을만한
        <br/>
        이웃 간 중고거래
      </h1>
      <span class="cover-description">
        동네 주민들과 가깝고 따뜩한 거개를
        <br/>
        지금 경험해보세요.
      </span>

      <div class="cover-image">
        <span class="fleamarket-cover-image">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"
              alt="믿을만한 이웃 간 중고거래"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"/>
        </span>
      </div>
    </div>
  </section>

  <section id="fleamarket-article-list">
    <h1 class="text-center article-list-title"> 중고거래 인기매물</h1>
    <div class="cards-wrap">
      <article class="card-top" v-for="card in cards" :key="card">
        <!--card.href = "/articles/[id]"-->
        <a class="card-link" href="{{ card.href }}">
          <div class="card-photo">
            <img alt="{{ card.name }}" src="{{ card.imgUrl }}">
          </div>
          <div class="card-desc">
            <h2 class="card-title">{{ card.name }}</h2>
            <!--card.price = 190,000원-->
            <div class="card-price">{{ card.price }}</div>
            <!--card.regionName = 경기도 성남시 분당구 정자동-->
            <div class="card-region-name">{{ card.regionName }}</div>
            <div class="card-counts">
              <span> 관심 {{ card.likeCount }}</span>

              ∙

              <span> 채팅 {{ card.chatCount }}</span>
            </div>
          </div>
        </a>
      </article>
    </div>

    <div class="text-center article-list-more">
      <a id="hot-articles-more" data-url="/hot_artivles">인기매물 더 보기</a>
    </div>
  </section>

  <section class="fleamarket-keywords">
    <h3 class="keywords-list">
      <a href="/top_keywords">중고거래 인기검색어</a>
    </h3>
    <ul class="keywords-list">
      <li class="keyword-item" v-for="keyword in keywords" :key="keyword">
        <!--keyword.href = /search/%EC%88%9C%EA%B8%`88`-->
        <a class="keyword-link" href="{{ keyword.href }}">{{ keyword.name }}</a>
      </li>
    </ul>
  </section>
  <Footer></Footer>
</template>

<style scoped>

</style>