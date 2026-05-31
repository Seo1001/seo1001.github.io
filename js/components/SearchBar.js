import { escapeHtml } from "../utils/html.js";

export function SearchBar(islands, query) {
  const normalizedQuery = query.trim().toLowerCase();
  const suggestions = islands
    .filter((island) => {
      if (!normalizedQuery) return true;
      return (
        island.name.toLowerCase().includes(normalizedQuery) ||
        island.region.toLowerCase().includes(normalizedQuery) ||
        island.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery))
      );
    })
    .slice(0, 5)
    .map(
      (island) => `
        <button class="suggestion" type="button" data-suggestion="${escapeHtml(island.name)}">
          ${escapeHtml(island.name)}
          <span>${escapeHtml(island.region)} · ${escapeHtml(island.type)} · ${escapeHtml(island.keywords.slice(0, 2).join(", "))}</span>
        </button>
      `
    )
    .join("");

  return `
    <div class="search-box">
      <label class="search-label" for="island-search">섬 이름 또는 키워드</label>
      <div class="search-row">
        <input
          id="island-search"
          class="field"
          type="search"
          value="${escapeHtml(query)}"
          placeholder="예: 제주도, 트레킹, 갯벌"
          autocomplete="off"
          data-field="query"
        />
        <button class="button button--primary button--icon" type="button" data-action="focus-search" aria-label="검색">⌕</button>
      </div>
      <div class="suggestions ${query ? "" : "is-hidden"}" data-role="suggestions">
        ${suggestions}
      </div>
    </div>
  `;
}
