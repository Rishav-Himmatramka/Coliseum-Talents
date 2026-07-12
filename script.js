const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const cards = Array.from(document.querySelectorAll('.expertise-card'));
const expertiseSection = document.querySelector('.expertise-section');

const activateCard = () => {
  if (!expertiseSection || cards.length === 0) return;

  const sectionTop = expertiseSection.offsetTop - 120;
  const sectionHeight = expertiseSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight * 0.3;
  const progress = Math.max(0, Math.min(1, (scrollPos - sectionTop) / Math.max(1, sectionHeight - window.innerHeight)));
  const index = Math.min(cards.length - 1, Math.floor(progress * cards.length));

  cards.forEach((card, cardIndex) => {
    card.classList.toggle('is-active', cardIndex === index);
  });
};

window.addEventListener('scroll', activateCard, { passive: true });
window.addEventListener('resize', activateCard);
activateCard();
