<script>
export default {
  name: 'HotArticles',
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <main>
    <section class="fleamarket-cover">
      <div class="cover-content">
        <div class="contents">
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
        </div>
        <div class="cover-image">
        <span class="fleamarket-cover-image">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"
              alt="믿을만한 이웃 간 중고거래"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"
              height="100%">
        </span>
        </div>
      </div>
    </section>

    <section id="fleamarket-article-list">
      <h1 class="text-article-list"> 중고거래 인기매물</h1>
      <div class="cards-wrap">
        <!--      <article class="card-top" v-for="card in cards" :key="card">
                &lt;!&ndash;card.href = "/articles/[id]"&ndash;&gt;
                <a class="card-link" href="{{ card.href }}">
                  <div class="card-photo">
                    <img alt="{{ card.name }}" src="{{ card.imgUrl }}">
                  </div>
                  <div class="card-desc">
                    <h2 class="card-title">{{ card.name }}</h2>
                    &lt;!&ndash;card.price = 190,000원&ndash;&gt;
                    <div class="card-price">{{ card.price }}</div>
                    &lt;!&ndash;card.regionName = 경기도 성남시 분당구 정자동&ndash;&gt;
                    <div class="card-region-name">{{ card.regionName }}</div>
                    <div class="card-counts">
                      <span> 관심 {{ card.likeCount }}</span>

                      ∙

                      <span> 채팅 {{ card.chatCount }}</span>
                    </div>
                  </div>
                </a>
              </article>-->
        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div class="cards-wrap">
        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card-top">
          <a class="card-link" href="/articles/1232">
            <div class="card-photo">
              <img alt="갤럭시 노트20 981n 그린색상"
                   src="https://dnvefa72aowie.cloudfront.net/origin/article/202312/053d1083ee3525f97981e94b9357500e4917ad68fcfb8b03e501697824178b50_0.webp?q=82&s=300x300&t=crop&f=webp">
            </div>
            <div class="card-desc">
              <p class="card-title">갤럭시 노트20 981n 그린색상</p>
              <!--card.price = 190,000원-->
              <div class="card-price">200,000원</div>
              <!--card.regionName = 경기도 성남시 분당구 정자동-->
              <div class="card-region-name">부산 사하구 하단동</div>
              <div class="card-counts">
                <span> 관심 19</span>

                ∙

                <span> 채팅 16</span>
              </div>
            </div>
          </a>
        </article>
      </div>

      <div class="text-articles-more">
        <a id="hot-articles-more" data-url="/hot_artivles">인기매물 더 보기</a>
      </div>
    </section>

    <section class="fleamarket-keywords">
      <h3 class="keywords-list">
        <a class="keyword-title" href="/top_keywords">중고거래 인기검색어</a>
      </h3>
      <ul class="keywords-list">
<!--        <li class="keyword-item" v-for="keyword in keywords" :key="keyword">
          <a class="keyword-link" href="{{ keyword.href }}">{{ keyword.name }}</a>
        </li>-->
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
        <li class="keyword-item">
          <a class="keyword-link">순금</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
@import "../components/css/hotArticles.css";
</style>