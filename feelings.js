// feelings.js

document.addEventListener('DOMContentLoaded', function() {
  const calendarButton = document.getElementById('calendarButton');
  const datePopup = document.getElementById('datePickerPopup');
  const filterButton = document.getElementById('filterBtn');
  const posts = document.querySelectorAll('.post');

  // Toggle tampil/sembunyi popup
  calendarButton.addEventListener('click', function() {
    datePopup.style.display = (datePopup.style.display === 'block') ? 'none' : 'block';
  });

  // Filter diary berdasarkan tanggal
  filterButton.addEventListener('click', function() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    posts.forEach(function(post) {
      const postDateStr = post.getAttribute('data-date'); 
      if (!postDateStr) {
        post.style.display = 'block';
        return;
      }

      const postDate = new Date(postDateStr);

      if (postDate >= startDate && postDate <= endDate) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });

    datePopup.style.display = 'none'; // Tutup popup setelah klik Filter
  });
});
// Kode JS lama kamu

// Fungsi untuk buat post baru
function createPostHTML(entry) {
  return `
    <div class="post">
      <div class="post-header">
        <img src="093F2D22-7941-439C-B029-4D4308C9B1DA.jpeg" alt="Profile" class="post-profile">
        <div class="post-user-info">
          <h3 class="username">Delta</h3>
          <p class="post-date">${entry.date}</p>
        </div>
      </div>
      <div class="post-content">
        <p>${entry.content}</p>
      </div>
    </div>
  `;
}

// JS baru ditambahkan di bawah


