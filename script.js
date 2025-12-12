// SCROLL tombol "Pelajari"
document.getElementById('learnBtn').addEventListener('click', () => {
  document.querySelector('#motif').scrollIntoView({behavior:'smooth'});
});

// TAMPIL/Sembunyikan sumber
const sourcesBtn = document.getElementById('sourcesBtn');
const sourcesEl = document.getElementById('sources');

sourcesBtn.addEventListener('click', () => {
  if (!sourcesEl.classList.contains('hidden')) {
    sourcesEl.classList.add('hidden');
    sourcesBtn.textContent = 'Tampilkan Sumber';
    return;
  }

  sourcesEl.classList.remove('hidden');
  sourcesBtn.textContent = 'Sembunyikan Sumber';

  sourcesEl.innerHTML = `
    <ul>
      <li>Batik Jawa Timur — Detik</li>
      <li>Motif Banyuwangi — Liputan6</li>
      <li>Reog Ponorogo — Wikipedia</li>
    </ul>
  `;
});

// SLIDER FOTO BATIK
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

// Auto slide batik
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 4000);


