document.addEventListener('DOMContentLoaded', function() {
  const calendarButton = document.getElementById('calendarButton');
  const datePopup = document.getElementById('datePickerPopup');
  const filterButton = document.getElementById('filterBtn');
  const posts = document.querySelectorAll('.post');

  // Toggle tampil/sembunyi popup date picker
  calendarButton.addEventListener('click', function() {
    datePopup.style.display = (datePopup.style.display === 'block') ? 'none' : 'block';
  });

  // Filter diary berdasarkan tanggal
  filterButton.addEventListener('click', function() {
    const startInput = document.getElementById('startDate').value;
    const endInput = document.getElementById('endDate').value;

    if (!startInput || !endInput) {
      alert('Please select both start and end dates.');
      return;
    }

    const startDate = new Date(startInput);
    const endDate = new Date(endInput);

    posts.forEach(function(post) {
      const postDateStr = post.getAttribute('data-date');
      if (!postDateStr) {
        post.style.display = 'block'; // Jika tidak ada tanggal, tampilkan
        return;
      }

      const postDate = new Date(postDateStr);

      if (postDate >= startDate && postDate <= endDate) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });

    datePopup.style.display = 'none'; // Tutup popup setelah filter
  });

  // Share button ke Instastory (basic)
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const post = button.closest('.post');
      html2canvas(post).then(canvas => {
        const image = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = image;
        link.download = 'my-diary.png';
        link.click();

        alert('Diary saved! Silakan upload ke Instastory.');
      });
    });
  });
});
