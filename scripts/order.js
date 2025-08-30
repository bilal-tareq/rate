  function showStars(num) {
      const starsContainer = document.getElementById('starsContainer');
      starsContainer.innerHTML = "";
      
      for (let i = 0; i < num; i++) {
        const star = document.createElement("img");
        star.src = "images/icon-star.svg";
        star.className = "star";
        star.style.width = "30px";
        star.style.height = "30px";

        star.alt = "Star";
        starsContainer.appendChild(star);
      }
    }
function submitRating() {

    const starsContainer = document.getElementById('starsContainer');
    const rating = starsContainer.children.length;
      
    if (rating > 0) {
        alert(`You rated us ${rating} star(s)!`);
    } else {
        alert("Please select a rating before submitting.");
    }
}


//Made by EMG_Mahmoud

