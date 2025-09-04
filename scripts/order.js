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
 
  localStorage.setItem('selectedRating', num);
    }
function submitRating() {

  const starsContainer = document.getElementById('starsContainer');
  const rating = starsContainer.children.length;
  if (rating > 0) {
    localStorage.setItem('selectedRating', rating);
    window.location.href = 'thank.html';
  } else {
    alert("Please select a rating before submitting.");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var rating = localStorage.getItem('selectedRating');
  if (rating) {
    document.getElementById('selectedRating').textContent = rating;
  }
});



