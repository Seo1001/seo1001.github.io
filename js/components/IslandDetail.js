export function IslandDetail(island) {
  if (!island) {
    return `
      <main class="container detail-page">
        <div class="empty-state">
          <h3>섬 정보를 찾을 수 없습니다.</h3>
          <p>목록으로 돌아가 다른 섬을 선택해 주세요.</p>
          <a class="button button--primary" href="#/">목록으로 이동</a>
        </div>
      </main>
    `;
  }

  const tags = island.keywords.map((keyword) => `<span class="tag">${keyword}</span>`).join("");
  const kakaoMapLink = island.location
    ? `https://map.kakao.com/link/map/${encodeURIComponent(island.name)},${island.location.lat},${island.location.lng}`
    : `https://map.kakao.com/?q=${encodeURIComponent(island.name)}`;
  const expoBadge = island.expo2026 ? `<span class="expo-badge">2026 여수세계섬박람회 연계 섬</span>` : "";
  const scoreLabels = {
    congestion: "활성도",
    activity: "액티비티",
    accessibility: "접근성",
    nature: "자연경관",
    convenience: "편의성"
  };
  const scorePanel = island.scores
    ? `
      <div class="score-panel">
        ${Object.entries(scoreLabels)
          .map(
            ([key, label]) => `
              <div class="score-item">
                <span>${label}</span>
                <strong>${island.scores[key]}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `
    : "";

  return `
    <main class="container detail-page">
      <a class="button button--ghost" href="#/">목록으로 돌아가기</a>
      <section class="detail-hero" style="margin-top: 18px;">
        <div class="detail-hero__visual" style="--detail-image: url('${island.image}')"></div>
        <div class="detail-hero__body">
          <h1>${island.name}</h1>
          ${expoBadge}
          <p>${island.summary}</p>
          <div class="tag-cloud">${tags}</div>
        </div>
      </section>
      <section class="detail-grid">
        <article class="panel detail-section">
          <h2>상세 AI 설명</h2>
          <p class="ai-copy">${island.aiDescription}</p>
          <div class="map-section">
            <div
              id="island-map"
              class="kakao-map"
              data-lat="${island.location?.lat ?? ""}"
              data-lng="${island.location?.lng ?? ""}"
              data-name="${island.name}"
            >
              <div class="map-placeholder">
                <strong>지도 준비 중</strong>
                <span>카카오맵 API 키를 설정하면 이곳에 ${island.name} 위치가 표시됩니다.</span>
              </div>
            </div>
            <a class="button button--ghost" href="${kakaoMapLink}" target="_blank" rel="noreferrer">
              카카오맵에서 열기
            </a>
          </div>
        </article>
        <aside class="panel detail-section">
          <h2>섬 정보</h2>
          <div class="info-table">
            <div class="info-row"><b>지역</b><span>${island.region}</span></div>
            <div class="info-row"><b>스타일</b><span>${island.type}</span></div>
            <div class="info-row"><b>이동</b><span>${island.access}</span></div>
            <div class="info-row"><b>체류</b><span>${island.stay}</span></div>
            <div class="info-row"><b>추천 시기</b><span>${island.bestSeason}</span></div>
          </div>
          ${scorePanel}
        </aside>
      </section>
    </main>
  `;
}
