// Buka tutup kalender popup
const calendarBtn = document.getElementById('calendarBtn');
const datePickerPopup = document.getElementById('datePickerPopup');
calendarBtn.addEventListener('click', () => {
  datePickerPopup.style.display = datePickerPopup.style.display === 'block' ? 'none' : 'block';
});

// Filter diary berdasarkan tanggal
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', () => {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  
  const posts = document.querySelectorAll('.post');
  
  posts.forEach(post => {
    const dateElement = post.querySelector('.date');
    const postDate = new Date(dateElement.textContent);
    
    if (startDate && endDate) {
      if (postDate >= startDate && postDate <= endDate) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    }
  });
  
  // Tutup pop-up setelah cari
  datePickerPopup.style.display = 'none';
});
