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
