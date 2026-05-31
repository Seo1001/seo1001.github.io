export function IslandCard(island) {
  const tags = island.keywords
    .slice(0, 3)
    .map((keyword) => `<span class="tag">${keyword}</span>`)
    .join("");
  const expoBadge = island.expo2026 ? `<span class="expo-badge">2026 여수섬박람회</span>` : "";

  return `
    <article class="island-card">
      <div class="island-card__visual" style="--card-image: url('${island.image}')">
        <span class="island-card__badge">${island.region}</span>
      </div>
      <div class="island-card__body">
        <div class="island-card__title">
          <h3>${island.name}</h3>
          ${expoBadge}
        </div>
        <p class="island-card__desc">${island.summary}</p>
        <ul class="meta-list">
          <li><b>스타일</b> ${island.type}</li>
          <li><b>추천 시기</b> ${island.bestSeason}</li>
          <li><b>이동</b> ${island.access}</li>
        </ul>
        <div class="tag-cloud">${tags}</div>
        <a class="button button--primary" href="#/island/${island.id}">AI 설명 보기</a>
      </div>
    </article>
  `;
}
