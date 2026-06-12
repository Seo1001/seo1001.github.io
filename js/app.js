import { accesses, islands, regions, seasons, stays, types } from "./data/islands.js";
import { filterIslands, getRandomIsland } from "./utils/filter.js";
import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";
import { Motivation } from "./components/Motivation.js";
import { PageIntro } from "./components/PageIntro.js";
import { ExpoInfo } from "./components/ExpoInfo.js";
import { ExpoRecommender } from "./components/ExpoRecommender.js?v=20260613-expo-readability";
import { FilterPanel } from "./components/FilterPanel.js";
import { IslandList } from "./components/IslandList.js";
import { IslandDetail } from "./components/IslandDetail.js";

const app = document.querySelector("#app");
let kakaoMapApiKey = "";
let kakaoConfigPromise = null;

// 화면 상태는 한 곳에서 관리해 컴포넌트 렌더링을 예측 가능하게 유지합니다.
const state = {
  filters: {
    query: "",
    region: "전체",
    type: "전체",
    access: "전체",
    season: "전체",
    stay: "전체"
  },
  randomIsland: getRandomIsland(islands),
  sidebarCollapsed: true,
  expoUserScores: {
    congestion: 5,
    activity: 5,
    accessibility: 5,
    nature: 5,
    convenience: 5
  }
};

const searchInputState = {
  isComposing: false
};

function getRoute() {
  const hash = window.location.hash || "#/";
  const detailMatch = hash.match(/^#\/island\/(.+)$/);
  if (hash === "#/find") return { page: "find" };
  if (hash === "#/expo") return { page: "expo" };
  if (hash === "#/random") return { page: "random" };
  return detailMatch ? { page: "detail", id: detailMatch[1] } : { page: "home" };
}

function layout(content, currentPage) {
  return `
    ${Header()}
    <div class="app-layout ${state.sidebarCollapsed ? "is-sidebar-collapsed" : ""}">
      ${Sidebar(state.sidebarCollapsed, currentPage)}
      <div class="app-content">
        ${content}
        ${footer()}
      </div>
    </div>
  `;
}

function renderHome() {
  app.innerHTML = layout(Motivation(islands.length), "home");
  bindGlobalEvents();
}

function renderFind() {
  state.filters.region = state.filters.region || "전체";
  renderSearchPage({
    currentPage: "find",
    intro: PageIntro({
      eyebrow: "Island Search",
      title: "섬 찾기",
      copy: "검색어와 필터를 조합해 국내 인기 섬 50개를 빠르게 비교해보세요."
    }),
    filters: state.filters
  });
}

function renderExpo() {
  state.filters.region = "전체";
  const totalScore = getExpoUserScoreTotal();
  const recommendations = totalScore === 25 ? getExpoRecommendations() : [];
  const expoIslands = filterIslands(
    islands.filter((island) => island.expo2026),
    { query: "", region: "전체", type: "전체", access: "전체", season: "전체", stay: "전체" }
  );

  app.innerHTML = layout(
    `
      ${PageIntro({
        eyebrow: "Yeosu World Island Expo 2026",
        title: "여수세계섬박람회",
        copy: "2026여수세계섬박람회와 연결되는 12개 섬을 한곳에서 살펴보세요."
      })}
      ${ExpoInfo()}
      <main id="results" class="container expo-list-page">
        <section class="results" aria-live="polite">
          <div class="result-head">
            <div>
              <h2>박람회 섬 12선</h2>
              <p class="result-count">총 ${expoIslands.length}개의 여수세계섬박람회 섬을 찾았습니다.</p>
            </div>
          </div>
          ${IslandList(expoIslands)}
        </section>
      </main>
      ${ExpoRecommender({
        userScores: state.expoUserScores,
        recommendations,
        totalScore
      })}
    `,
    "expo"
  );

  bindGlobalEvents();
}

function renderSearchPage({ currentPage, intro, filters, afterResults = "" }) {
  const filtered = filterIslands(islands, filters);

  app.innerHTML = layout(
    `
      ${intro}
      <main id="results" class="container main-grid">
        ${FilterPanel({ islands, regions, types, accesses, seasons, stays, filters })}
        <section class="results" aria-live="polite">
          <div class="result-head">
            <div>
              <h2>검색 결과</h2>
              <p class="result-count">총 ${filtered.length}개의 섬을 찾았습니다.</p>
            </div>
          </div>
          ${IslandList(filtered)}
        </section>
      </main>
      ${afterResults}
    `,
    currentPage
  );

  bindSearchEvents(currentPage);
}

function renderRandom() {
  const randomIsland = state.randomIsland;

  app.innerHTML = layout(
    `
      ${PageIntro({
        eyebrow: "Random Pick",
        title: "랜덤 섬 추천",
        copy: "선택이 어렵다면 K-Some이 국내 섬 하나를 먼저 골라드립니다."
      })}
      <main class="container random-page">
        <section class="panel random-feature">
          <div class="random-feature__image" style="--random-image: url('${randomIsland.image}')"></div>
          <div class="random-feature__body">
            <span class="expo-badge">${randomIsland.region}</span>
            <h2>${randomIsland.name}</h2>
            <p>${randomIsland.summary}</p>
            <div class="random-feature__actions">
              <a class="button button--primary" href="#/island/${randomIsland.id}">상세 보기</a>
              <button class="button button--ghost" type="button" data-action="reroll-random">다시 추천</button>
            </div>
          </div>
        </section>
      </main>
    `,
    "random"
  );

  bindGlobalEvents();
}

function renderDetail(id) {
  const island = islands.find((item) => item.id === id);

  app.innerHTML = layout(IslandDetail(island), "detail");

  bindGlobalEvents();
  initIslandMap(island);
}

function render() {
  const route = getRoute();
  if (route.page === "detail") {
    renderDetail(route.id);
    return;
  }
  if (route.page === "find") {
    renderFind();
    return;
  }
  if (route.page === "expo") {
    renderExpo();
    return;
  }
  if (route.page === "random") {
    renderRandom();
    return;
  }
  renderHome();
}

function footer() {
  return `
    <footer class="site-footer">
      K-Some은 더미 데이터 기반 프로토타입입니다. 실제 배편과 운영 정보는 공식 채널 확인이 필요합니다.
    </footer>
  `;
}

function goHome() {
  state.filters = { query: "", region: "전체", type: "전체", access: "전체", season: "전체", stay: "전체" };

  if (window.location.hash === "#/" || window.location.hash === "") {
    renderHome();
  } else {
    window.location.hash = "#/";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindGlobalEvents() {}

function bindSearchEvents(currentPage) {
  bindGlobalEvents();

  const queryInput = document.querySelector("[data-field='query']");
  const suggestions = document.querySelector("[data-role='suggestions']");

  const renderAfterSearchInput = (value) => {
    state.filters.query = value;
    render();

    const nextInput = document.querySelector("[data-field='query']");
    if (!nextInput) return;

    nextInput.focus();
    nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
  };

  queryInput.addEventListener("compositionstart", () => {
    searchInputState.isComposing = true;
  });

  queryInput.addEventListener("compositionend", (event) => {
    searchInputState.isComposing = false;
    renderAfterSearchInput(event.target.value);
  });

  queryInput.addEventListener("input", (event) => {
    state.filters.query = event.target.value;

    if (searchInputState.isComposing || event.isComposing) return;

    renderAfterSearchInput(event.target.value);
  });

  queryInput.addEventListener("focus", () => {
    if (state.filters.query) suggestions.classList.remove("is-hidden");
  });

  document.querySelector("[data-field='region']").addEventListener("change", (event) => {
    state.filters.region = event.target.value;
    render();
  });

  document.querySelector("[data-field='access']").addEventListener("change", (event) => {
    state.filters.access = event.target.value;
    render();
  });

  document.querySelector("[data-field='season']").addEventListener("change", (event) => {
    state.filters.season = event.target.value;
    render();
  });

  document.querySelector("[data-field='stay']").addEventListener("change", (event) => {
    state.filters.stay = event.target.value;
    render();
  });

  document.querySelectorAll("[data-filter-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.type = button.dataset.filterType;
      render();
    });
  });

  document.querySelectorAll("[data-suggestion]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.query = button.dataset.suggestion;
      render();
    });
  });

  document.querySelector("[data-action='focus-search']").addEventListener("click", () => {
    document.querySelector("[data-field='query']").focus();
  });

  document.querySelector("[data-action='reset-filters']").addEventListener("click", () => {
    state.filters = {
      query: "",
      region: "전체",
      type: "전체",
      access: "전체",
      season: "전체",
      stay: "전체"
    };
    render();
  });
}

function recommendRandomIsland() {
  state.randomIsland = getRandomIsland(islands, state.randomIsland.id);
  window.location.hash = `#/island/${state.randomIsland.id}`;
}

function getPreferenceWeight(score) {
  if (score >= 10) return 1.8;
  if (score >= 8) return 1.5;
  if (score >= 6) return 1.2;
  if (score >= 4) return 1;
  return 0.8;
}

function getExpoUserScoreTotal() {
  return Object.values(state.expoUserScores).reduce((sum, value) => sum + Number(value), 0);
}

function getExpoRecommendations() {
  const expoIslands = islands.filter((island) => island.expo2026 && island.scores);

  return expoIslands
    .map((island) => {
      const score =
        (11 - island.scores.congestion) * getPreferenceWeight(state.expoUserScores.congestion) +
        island.scores.activity * getPreferenceWeight(state.expoUserScores.activity) +
        island.scores.accessibility * getPreferenceWeight(state.expoUserScores.accessibility) +
        island.scores.nature * getPreferenceWeight(state.expoUserScores.nature) +
        island.scores.convenience * getPreferenceWeight(state.expoUserScores.convenience);

      return { island, score };
    })
    .sort((a, b) => b.score - a.score || a.island.name.localeCompare(b.island.name, "ko"))
    .slice(0, 3);
}

async function loadKakaoMapConfig() {
  if (!kakaoConfigPromise) {
    kakaoConfigPromise = import("./config/kakao.local.js")
      .catch(() => import("./config/kakao.js"))
      .then((config) => {
        kakaoMapApiKey = config.KAKAO_MAP_API_KEY ?? "";
        return kakaoMapApiKey;
      });
  }

  return kakaoConfigPromise;
}

async function loadKakaoMapSdk() {
  const apiKey = await loadKakaoMapConfig();
  if (!apiKey) return false;
  if (window.kakao?.maps) return Promise.resolve(true);

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector("[data-kakao-map-sdk]");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true), { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;
    script.dataset.kakaoMapSdk = "true";
    script.onload = () => resolve(true);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initIslandMap(island) {
  const mapElement = document.querySelector("#island-map");
  if (!mapElement || !island?.location) return;

  if (!(await loadKakaoMapConfig())) {
    mapElement.classList.add("is-placeholder");
    return;
  }

  try {
    await loadKakaoMapSdk();
    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(island.location.lat, island.location.lng);
      const map = new window.kakao.maps.Map(mapElement, { center, level: 8 });
      const marker = new window.kakao.maps.Marker({ position: center });
      marker.setMap(map);
    });
  } catch {
    mapElement.innerHTML = `
      <div class="map-placeholder">
        <strong>지도를 불러오지 못했습니다.</strong>
        <span>카카오맵 API 키와 도메인 설정을 확인해 주세요.</span>
      </div>
    `;
  }
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  if (actionTarget.dataset.action === "go-home") {
    event.preventDefault();
    goHome();
  }

  if (actionTarget.dataset.action === "toggle-sidebar") {
    event.preventDefault();
    state.sidebarCollapsed = !state.sidebarCollapsed;
    render();
  }

  if (actionTarget.dataset.action === "reroll-random") {
    event.preventDefault();
    state.randomIsland = getRandomIsland(islands, state.randomIsland.id);
    renderRandom();
  }

  if (actionTarget.dataset.action === "expo-score-step") {
    event.preventDefault();
    const key = actionTarget.dataset.scoreKey;
    const step = Number(actionTarget.dataset.scoreStep) || 0;
    const currentValue = state.expoUserScores[key] ?? 1;
    state.expoUserScores[key] = Math.min(10, Math.max(1, currentValue + step));
    renderExpo();
  }

});

document.addEventListener("input", (event) => {
  const inputTarget = event.target.closest("[data-action='expo-score']");
  if (!inputTarget) return;

  const key = inputTarget.dataset.scoreKey;
  const rawValue = Number(inputTarget.value);
  if (inputTarget.type === "number" && !rawValue) return;

  const value = Math.min(10, Math.max(1, rawValue || 1));
  state.expoUserScores[key] = value;

  if (inputTarget.type === "number") {
    const relatedRange = document.querySelector(`input[type="range"][data-score-key="${key}"]`);
    const scoreTotal = document.querySelector(".score-total");
    if (relatedRange) relatedRange.value = value;
    if (scoreTotal) {
      const totalScore = getExpoUserScoreTotal();
      scoreTotal.classList.toggle("is-valid", totalScore === 25);
      scoreTotal.classList.toggle("is-invalid", totalScore !== 25);
      scoreTotal.querySelector("strong").textContent = `${totalScore} / 25`;
    }
    return;
  }

  inputTarget.value = value;
  renderExpo();
});

document.addEventListener("change", (event) => {
  const inputTarget = event.target.closest("[data-action='expo-score']");
  if (!inputTarget || inputTarget.type !== "number") return;

  const key = inputTarget.dataset.scoreKey;
  const value = Math.min(10, Math.max(1, Number(inputTarget.value) || 1));
  state.expoUserScores[key] = value;
  inputTarget.value = value;
  renderExpo();
});

document.addEventListener("keydown", (event) => {
  const inputTarget = event.target.closest("[data-action='expo-score']");
  if (!inputTarget || inputTarget.type !== "number" || event.key !== "Enter") return;

  inputTarget.blur();
});

window.addEventListener("hashchange", render);
render();
