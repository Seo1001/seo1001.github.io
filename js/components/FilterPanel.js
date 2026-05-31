import { SearchBar } from "./SearchBar.js";

export function FilterPanel({ islands, regions, types, filters }) {
  const regionOptions = regions
    .map((region) => `<option value="${region}" ${filters.region === region ? "selected" : ""}>${region}</option>`)
    .join("");

  const typeChips = types
    .map(
      (type) => `
        <button class="chip ${filters.type === type ? "is-active" : ""}" type="button" data-filter-type="${type}">
          ${type}
        </button>
      `
    )
    .join("");

  return `
    <aside class="panel filter-panel">
      <h2>필터 검색</h2>
      ${SearchBar(islands, filters.query)}
      <div class="filter-group">
        <label for="region-filter">지역</label>
        <select id="region-filter" class="select" data-field="region">
          ${regionOptions}
        </select>
      </div>
      <div class="filter-group">
        <label>여행 스타일</label>
        <div class="chip-list" role="group" aria-label="여행 스타일">
          ${typeChips}
        </div>
      </div>
      <div class="filter-group">
        <label for="ferry-filter">이동 방식</label>
        <select id="ferry-filter" class="select" data-field="ferry">
          <option value="전체" ${filters.ferry === "전체" ? "selected" : ""}>전체</option>
          <option value="여객선" ${filters.ferry === "여객선" ? "selected" : ""}>여객선 필요</option>
          <option value="차량/항공" ${filters.ferry === "차량/항공" ? "selected" : ""}>차량/항공 접근</option>
        </select>
      </div>
      <div class="filter-group">
        <button class="button button--ghost" type="button" data-action="reset-filters">필터 초기화</button>
      </div>
    </aside>
  `;
}
