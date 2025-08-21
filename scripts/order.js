 function showStars(num) {
    const starsContainer = document.getElementById('starsContainer');
    let stars = "";

    for (let i = 0; i < num; i++) {
     stars += "★ ";
    }

    starsContainer.innerHTML = stars;
}