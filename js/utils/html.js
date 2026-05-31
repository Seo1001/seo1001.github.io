// 사용자 입력이 HTML 속성이나 텍스트로 들어갈 때 깨지지 않도록 이스케이프합니다.
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
