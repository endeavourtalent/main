export const reviewsServiceFactory = () => ({
  loadReviews: async () => {
    return new Promise((resolve, reject) => {
      try {
        const xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", "/data/reviews.json", true);
        xobj.onreadystatechange = () => {
          if (xobj.readyState == 4 && xobj.status == "200") {
            resolve(JSON.parse(xobj.responseText));
          }
        };
        xobj.send(null);
      } catch (err) {
        reject("error reading reviews data from file.");
      }
    });
  },
  renderReviews: (reviews) => {
    const reviewsSection = document.getElementById("reviews");
    reviews.forEach((r, index) =>
      reviewsSection.insertAdjacentHTML("beforeend", getHtmlForReview(r, index))
    );
  },
  cycleReviews: () => {
    let count = 0;
    setInterval(() => {
      const allReviews = document.getElementsByClassName("review-card");
      const reviewIndexToShow = count % allReviews.length;

      for (let i = 0; i < allReviews.length; i++) {
        i === reviewIndexToShow
          ? allReviews[i].classList.remove("hide")
          : allReviews[i].classList.add("hide");
      }
      count++;
    }, 9000);
  },
});

function getKeyFromName(name) {
  return name.replace(/\s/g, "-").toLowerCase();
}

function getHtmlForReview(review, index) {
  const key = getKeyFromName(review.name);
  return `<article id=${key} class="review-card ${index === 0 || " hide"}">
        <img
          src="./assets/${review.imageUrl}"
          alt="${key}-profile-pic"
        />
        <div class="card-content">
          <p>
            ${review.description}
          </p>
          <span>${review.name}, ${review.title}</span>
        </div>
      </article>
        `;
}
