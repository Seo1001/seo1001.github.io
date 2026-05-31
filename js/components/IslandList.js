import { IslandCard } from "./IslandCard.js";

export function IslandList(islands) {
  if (!islands.length) {
    return `
      <div class="empty-state">
        <h3>조건에 맞는 섬이 없습니다.</h3>
        <p>검색어를 줄이거나 필터를 전체로 바꿔보세요.</p>
      </div>
    `;
  }

  return `
    <div class="card-grid">
      ${islands.map((island) => IslandCard(island)).join("")}
    </div>
  `;
}
