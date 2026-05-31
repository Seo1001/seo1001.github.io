export function Sidebar(isCollapsed = false, currentPage = "home") {
  const active = (page) => (currentPage === page ? "is-active" : "");

  return `
    <aside class="app-sidebar ${isCollapsed ? "is-collapsed" : ""}" aria-label="주요 메뉴">
      <nav class="sidebar-nav">
        <a class="sidebar-link ${active("find")}" href="#/find">
          <span class="sidebar-link__icon">⌕</span>
          <span class="sidebar-link__text">섬 찾기</span>
        </a>
        <a class="sidebar-link ${active("random")}" href="#/random">
          <span class="sidebar-link__icon">↻</span>
          <span class="sidebar-link__text">랜덤 추천</span>
        </a>
        <a class="sidebar-link sidebar-link--expo ${active("expo")}" href="#/expo">
          <span class="sidebar-link__icon">★</span>
          <span class="sidebar-link__text">여수섬박람회</span>
        </a>
      </nav>
    </aside>
  `;
}
