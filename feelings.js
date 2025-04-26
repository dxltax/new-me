// DATE PICKER
document.addEventListener("DOMContentLoaded", function () {
  const calendarButton = document.querySelector(".calendar-button");
  const datePickerPopup = document.querySelector(".date-picker-popup");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const saveDateButton = document.getElementById("saveDateButton");
  const calendarText = document.querySelector(".calendar-text");

  if (calendarButton && datePickerPopup && startDateInput && endDateInput && saveDateButton && calendarText) {
    calendarButton.addEventListener("click", () => {
      datePickerPopup.style.display = datePickerPopup.style.display === "block" ? "none" : "block";
    });

    saveDateButton.addEventListener("click", () => {
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;
      if (startDate && endDate) {
        calendarText.textContent = `${formatDate(startDate)} - ${formatDate(endDate)}`;
        datePickerPopup.style.display = "none";
      }
    });
  }

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  }
});

// LOAD MORE POSTS
document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".post");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const postsPerPage = 5;
  let visiblePosts = postsPerPage;

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", showMorePosts);
    showPosts();
  }

  function showPosts() {
    posts.forEach((post, index) => {
      post.style.display = index < visiblePosts ? "block" : "none";
    });

    if (visiblePosts >= posts.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  function showMorePosts() {
    visiblePosts += postsPerPage;
    showPosts();
  }
});

// SEARCH POSTS
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      const posts = document.querySelectorAll(".post");

      posts.forEach(post => {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }
});
