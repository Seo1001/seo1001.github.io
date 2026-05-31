export function Motivation(totalCount) {
  return `
    <section class="motivation">
      <div class="motivation__inner">
        <p class="motivation__eyebrow">2026 섬 방문의 해 & 여수세계섬박람회 기념</p>
        <h1>대한민국 섬과 이제는 '썸(Some)' 탈 시간</h1>
        <p class="motivation__lead">
          국내에는 제주도처럼 잘 알려진 섬도 있지만, 이름은 낯설어도 풍경과 이야기가 깊은 섬들이 훨씬 많습니다. 특히 2026년은 '섬 방문의 해'이자 '여수세계섬박람회'가 열리는 해입니다. K-Some은 이 아름다운 섬들을 더 쉽게 발견하고, 여행자의 취향에 맞게 비교할 수 있도록 만든 국내 섬 여행 AI 가이드입니다.
        </p>
        <div class="motivation__grid">
          <article>
            <strong>복잡한 섬 탐색, 단 1분 컷</strong>
            <p>지역, 이동 방식, 여행 스타일만 선택하세요. 조건에 딱 맞는 섬을 빠르고 쉽게 매칭해 드립니다.</p>
          </article>
          <article>
            <strong>2026 박람회부터 숨은 섬까지 한눈에</strong>
            <p>2026 여수세계섬박람회 정보는 물론, 그동안 잘 알려지지 않았던 가치 있는 국내의 섬들을 상세히 검토할 수 있습니다.</p>
          </article>
          <article>
            <strong>실패 없는 나만의 섬 여행 가이드</strong>
            <p>자연경관, 접근성, 체험 활동, 추천 방문 시기 등 ${totalCount}개의 세부 데이터를 바탕으로 나에게 딱 맞는 섬 결정을 돕습니다.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}
