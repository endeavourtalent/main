import { reviewsServiceFactory } from "./reviews.service.js";
import { setupHandlers } from "./handlers.js";

(async () => {
  // Reviews
  const { loadReviews, renderReviews, cycleReviews } = reviewsServiceFactory();
  const reviews = await loadReviews();
  renderReviews(reviews);
  cycleReviews();

  // Handlers
  setupHandlers();
})();
