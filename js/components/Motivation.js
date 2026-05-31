export function Motivation(totalCount) {
  return `
    <section class="motivation">
      <div class="motivation__inner">
        <p class="motivation__eyebrow">Project Motivation</p>
        <h1>K-Some을 시작한 이유</h1>
        <p class="motivation__lead">
          국내에는 제주도처럼 잘 알려진 섬도 있지만, 이름은 낯설어도 풍경과 이야기가 깊은 섬들이 훨씬 많습니다.
          K-Some은 그런 섬들을 더 쉽게 발견하고, 여행자의 취향에 맞게 비교할 수 있도록 만든 국내 섬 여행 AI 가이드입니다.
        </p>
        <div class="motivation__grid">
          <article>
            <strong>섬을 찾는 시간을 줄입니다</strong>
            <p>지역, 이동 방식, 여행 스타일을 한 화면에서 조합해 원하는 섬을 빠르게 좁힐 수 있습니다.</p>
          </article>
          <article>
            <strong>작은 섬의 매력을 보이게 합니다</strong>
            <p>여수섬박람회 섬처럼 잘 알려질 가치가 있는 섬들을 별도 필터와 상세 설명으로 강조했습니다.</p>
          </article>
          <article>
            <strong>여행 결정을 돕습니다</strong>
            <p>${totalCount}개의 섬 데이터를 바탕으로 자연경관, 접근성, 체류 방식, 추천 시기를 함께 살펴볼 수 있습니다.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}
