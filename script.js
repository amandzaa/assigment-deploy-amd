let currentIndex = 0;
const images = [
  { src: "assets/slide1.jpg", alt: "slide 1" },
  { src: "assets/slide2.jpg", alt: "slide 2" },
  { src: "assets/slide3.jpg", alt: "slide 3" },
  { src: "assets/slide4.jpg", alt: "slide 4" },
  { src: "assets/slide5.jpg", alt: "slide 5" },
  { src: "assets/slide6.jpg", alt: "slide 6" },
  { src: "assets/slide7.jpg", alt: "slide 7" },
  { src: "assets/slide8.jpg", alt: "slide 8" },
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

function toggleMenu() {
  const menu = document.querySelector(".main-nav");
  menu.classList.toggle("active");
}

let slideIdx = 1;
showSlide(slideIdx);
setInterval(() => {
  showSlide(++slideIdx);
}, 3000);

function currentSlide(n) {
  showSlide((slideIdx = n));
}
function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let captions = [
    "Caption for image1",
    "Caption for image2",
    "Caption for image3",
    "Caption for image4",
  ];
  if (n > slides.length) {
    slideIdx = 1;
  }
  if (n < 1) {
    slideIdx = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIdx - 1].style.display = "block";
  dots[slideIdx - 1].className += " active";
  document.getElementById("captionText").textContent = captions[slideIdx - 1];
}
