// 검색어와 필터 조건을 조합해서 섬 목록을 반환합니다.
function includesText(value, query) {
  return String(value ?? "").toLowerCase().includes(query);
}

function matchesAccessFilter(islandAccess, selectedAccess) {
  if (selectedAccess === "전체") return true;
  return islandAccess.split("/").map((access) => access.trim()).includes(selectedAccess);
}

export function filterIslands(islands, filters) {
  const query = filters.query.trim().toLowerCase();

  return islands
    .filter((island) => {
      const matchesQuery =
        !query ||
        includesText(island.name, query) ||
        includesText(island.region, query) ||
        includesText(island.type, query) ||
        includesText(island.access, query) ||
        includesText(island.bestSeason, query) ||
        includesText(island.stay, query) ||
        includesText(island.summary, query) ||
        includesText(island.aiDescription, query) ||
        island.keywords.some((keyword) => includesText(keyword, query));

      const matchesRegion = filters.region === "전체" || island.region === filters.region;
      const matchesType = filters.type === "전체" || island.type === filters.type;
      const matchesAccess = matchesAccessFilter(island.access, filters.access);
      const matchesSeason = filters.season === "전체" || island.bestSeason.includes(filters.season);
      const matchesStay = filters.stay === "전체" || island.stay === filters.stay;

      return matchesQuery && matchesRegion && matchesType && matchesAccess && matchesSeason && matchesStay;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));
}

export function getRandomIsland(islands, currentId) {
  const pool = islands.filter((island) => island.id !== currentId);
  return pool[Math.floor(Math.random() * pool.length)] ?? islands[0];
}
