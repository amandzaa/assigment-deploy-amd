function toggleMenu() {
  const menu = document.querySelector(".main-nav");
  menu.classList.toggle("active");
}

let currentIndex = 0;
const images = [
  { src: "assets/slide1.jpg", alt: "Luna (Female) - Curious and Playful" },
  { src: "assets/slide2.jpg", alt: "Milo (Male) - Affectionate and Gentle" },
  { src: "assets/slide3.jpg", alt: "Whiskers (Male) - Mischievous and Clever" },
  { src: "assets/slide4.jpg", alt: "Bella (Female) - Graceful and Observant" },
  { src: "assets/slide5.jpg", alt: "Oliver (Male) - Playful and Social" },
  { src: "assets/slide6.jpg", alt: "Cleo (Female) - Loyal and Protective" },
  { src: "assets/slide7.jpg", alt: "Simba (Male) - Brave and Adventurous" },
  {
    src: "assets/slide8.jpg",
    alt: "Willow (Female) - Independent and Mysterious",
  },
];

function openModal(index) {
  currentIndex = index;
  updateModal();
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateModal();
}

function updateModal() {
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");

  modalImg.classList.remove("show");
  setTimeout(() => {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
    modalImg.classList.add("show");
  }, 200);
}
