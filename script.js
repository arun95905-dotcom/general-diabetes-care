let currentReview = 0;

const reviews = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".dot");

function showReview(index) {

  if (index >= reviews.length) {
    index = 0;
  }

  if (index < 0) {
    index = reviews.length - 1;
  }

  reviews.forEach(function(review) {
    review.classList.remove("active");
  });

  dots.forEach(function(dot) {
    dot.classList.remove("active");
  });

  reviews[index].classList.add("active");
  dots[index].classList.add("active");

  currentReview = index;
}

function changeReview(direction) {
  showReview(currentReview + direction);
}

/* Automatically change review every 5 seconds */

setInterval(function() {
  changeReview(1);
}, 5000);
