// 검색어와 필터 조건을 조합해 섬 목록을 반환합니다.
export function filterIslands(islands, filters) {
  const query = filters.query.trim().toLowerCase();

  return islands.filter((island) => {
    const matchesQuery =
      !query ||
      island.name.toLowerCase().includes(query) ||
      island.region.toLowerCase().includes(query) ||
      island.keywords.some((keyword) => keyword.toLowerCase().includes(query));

    const matchesRegion = filters.region === "전체" || island.region === filters.region;
    const matchesType = filters.type === "전체" || island.type === filters.type;
    const matchesFerry =
      filters.ferry === "전체" ||
      (filters.ferry === "여객선" && island.ferry) ||
      (filters.ferry === "차량/항공" && !island.ferry);

    return matchesQuery && matchesRegion && matchesType && matchesFerry;
  }).sort((a, b) => a.name.localeCompare(b.name, "ko"));
}

export function getRandomIsland(islands, currentId) {
  const pool = islands.filter((island) => island.id !== currentId);
  return pool[Math.floor(Math.random() * pool.length)] ?? islands[0];
}
