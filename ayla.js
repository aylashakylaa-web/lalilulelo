document.addEventListener("DOMContentLoaded", function () {
  const giftContainer = document.getElementById("gift-container");
  const card = document.querySelector(".card");
  const music = document.getElementById("musik");

 
  giftContainer.addEventListener("click", function () {
   
    music.play().catch((error) => {
      console.log("Autoplay dicegah browser, user harus interaksi dulu.");
    });

    giftContainer.classList.add("active");


    card.classList.remove("hidden-content");
  });
});
