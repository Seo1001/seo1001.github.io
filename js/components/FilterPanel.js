import { SearchBar } from "./SearchBar.js";

export function FilterPanel({ islands, regions, types, accesses, seasons, stays, filters }) {
  const createOptions = (items, selectedValue) =>
    items.map((item) => `<option value="${item}" ${selectedValue === item ? "selected" : ""}>${item}</option>`).join("");

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
          ${createOptions(regions, filters.region)}
        </select>
      </div>
      <div class="filter-group">
        <label>여행 스타일</label>
        <div class="chip-list" role="group" aria-label="여행 스타일">
          ${typeChips}
        </div>
      </div>
      <div class="filter-group">
        <label for="access-filter">이동 수단</label>
        <select id="access-filter" class="select" data-field="access">
          ${createOptions(accesses, filters.access)}
        </select>
      </div>
      <div class="filter-group">
        <label for="season-filter">추천 시기</label>
        <select id="season-filter" class="select" data-field="season">
          ${createOptions(seasons, filters.season)}
        </select>
      </div>
      <div class="filter-group">
        <label for="stay-filter">체류 일정</label>
        <select id="stay-filter" class="select" data-field="stay">
          ${createOptions(stays, filters.stay)}
        </select>
      </div>
      <div class="filter-group">
        <button class="button button--ghost" type="button" data-action="reset-filters">필터 초기화</button>
      </div>
    </aside>
  `;
}
