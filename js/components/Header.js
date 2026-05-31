export function Header() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <button class="menu-toggle" type="button" aria-label="사이드바 열기/닫기" data-action="toggle-sidebar">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button class="brand" type="button" aria-label="K-Some 홈" data-action="go-home">
          <span class="brand__mark">
            <img src="./assets/logo.jpg" alt="" />
          </span>
          <span>
            <span class="brand__name">K-Some</span>
            <span class="brand__tagline">국내 섬 여행 AI 가이드</span>
          </span>
        </button>
      </div>
    </header>
  `;
}
