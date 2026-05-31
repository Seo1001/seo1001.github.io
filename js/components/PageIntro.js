export function PageIntro({ eyebrow, title, copy }) {
  return `
    <section class="page-intro">
      <div class="container">
        <p class="page-intro__eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${copy}</p>
      </div>
    </section>
  `;
}
