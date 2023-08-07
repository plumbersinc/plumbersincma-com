// (function () {
//   const init = function (el, modal) {
//     let interval;
//     let currentIndex = 0;
//     let images = el.querySelectorAll("img");
//     const showImage = (index) => {
//       let image = images[index];
//       let count = index + 1;
//       modal.querySelector("img").src = image.dataset.src;
//       modal.querySelector("img").alt = image.alt;
//       modal.querySelector("img").style.maxHeight =
//         window.innerHeight * 0.8 + "px";
//       modal.querySelector("figcaption").innerHTML =
//         "<span>" +
//         image.alt +
//         "</span><span>" +
//         count +
//         " of " +
//         images.length +
//         "</span>";
//     };
//     const nextImage = () => {
//       clearInterval(interval);
//       currentIndex++;
//       if (currentIndex > images.length - 1) currentIndex = 0;
//       showImage(currentIndex);
//     };
//     const prevImage = () => {
//       clearInterval(interval);
//       currentIndex--;
//       if (currentIndex < 0) currentIndex = images.length - 1;
//       showImage(currentIndex);
//     };
//     const openModal = (index) => {
//       currentIndex = index;
//       showImage(index);
//       modal.classList.remove("hidden");
//     };
//     const closeModal = () => {
//       modal.classList.add("hidden");
//     };
//     modal.querySelector(".next").addEventListener("click", nextImage);
//     modal.querySelector(".prev").addEventListener("click", prevImage);
//     modal.querySelector(".close").addEventListener("click", closeModal);
//     images.forEach((image, index) => {
//       image.closest("div").addEventListener("click", () => {
//         openModal(index);
//       });
//     });
//   };
//   init(document.getElementById("gallery"), document.getElementById("modal"));
// })();
const lightbox = GLightbox();
