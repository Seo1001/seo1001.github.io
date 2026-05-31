const scoreFields = [
  { key: "congestion", label: "활성도", hint: "유명 관광지일수록 높은 점수" },
  { key: "activity", label: "액티비티", hint: "트레킹, 체험, 즐길 거리" },
  { key: "accessibility", label: "접근성", hint: "이동이 쉬운 섬" },
  { key: "nature", label: "자연경관", hint: "풍경과 해상 경관" },
  { key: "convenience", label: "편의성", hint: "숙박, 음식, 여행 기반" }
];

export function ExpoRecommender({ userScores, recommendations, totalScore }) {
  const remaining = 25 - totalScore;
  const isValid = totalScore === 25;

  const inputs = scoreFields
    .map(
      ({ key, label, hint }) => `
        <label class="score-control">
          <span>
            <strong>${label}</strong>
            <small>${hint}</small>
          </span>
          <div class="range-row">
            <input type="range" min="1" max="10" step="1" value="${userScores[key]}" data-action="expo-score" data-score-key="${key}" />
            <output>${userScores[key]}점</output>
          </div>
        </label>
      `
    )
    .join("");

  const cards = isValid
    ? recommendations
        .map(
          ({ island, score }, index) => `
            <article class="recommend-card">
              <div class="recommend-card__rank">${index + 1}</div>
              <div class="recommend-card__image" style="--recommend-image: url('${island.image}')"></div>
              <div class="recommend-card__body">
                <span class="expo-badge">추천 점수 ${score.toFixed(1)}</span>
                <h3>${island.name}</h3>
                <p>${island.summary}</p>
                <div class="mini-score">
                  <span>활성 ${island.scores.congestion}</span>
                  <span>활동 ${island.scores.activity}</span>
                  <span>접근 ${island.scores.accessibility}</span>
                  <span>자연 ${island.scores.nature}</span>
                  <span>편의 ${island.scores.convenience}</span>
                </div>
                <a class="button button--primary" href="#/island/${island.id}">자세히 보기</a>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <div class="recommend-empty">
        <h3>총 25점을 맞춰 주세요.</h3>
        <p>${remaining > 0 ? `${remaining}점을 더 배분해야 합니다.` : `${Math.abs(remaining)}점을 줄여야 합니다.`} 각 항목은 1점부터 10점까지 입력할 수 있습니다.</p>
      </div>
    `;

  return `
    <section class="container expo-recommender">
      <div class="recommend-head">
        <div>
          <p class="page-intro__eyebrow">
          <h2>내 점수로 섬 추천받기</h2>
          <p>다섯 항목에 25점을 배분하면, 입력 점수에 구간별 가중치를 적용해 여수세계섬박람회 섬을 추천합니다.</p>
        </div>
        <div class="score-total ${isValid ? "is-valid" : "is-invalid"}">
          <span>사용 점수</span>
          <strong>${totalScore} / 25</strong>
        </div>
      </div>
      <div class="score-builder">
        ${inputs}
      </div>
      <div class="weight-guide">
        <span>1~3점 ×0.8</span>
        <span>4~5점 ×1.0</span>
        <span>6~7점 ×1.2</span>
        <span>8~9점 ×1.5</span>
        <span>10점 ×1.8</span>
      </div>
      <div class="${isValid ? "recommend-grid" : "recommend-grid recommend-grid--single"}">
        ${cards}
      </div>
    </section>
  `;
}
