// Ambil elemen input type date
const dateInput = document.getElementById('dateFilter');

dateInput.addEventListener('change', function () {
  const selectedDate = this.value; // tanggal yang dipilih

  const diaryEntries = document.querySelectorAll('.diary-entry'); // semua diary

  diaryEntries.forEach(entry => {
    const entryDate = entry.getAttribute('data-date'); // ambil tanggal diary

    if (selectedDate === '' || entryDate === selectedDate) {
      entry.style.display = 'block'; // tampilkan jika sesuai
    } else {
      entry.style.display = 'none'; // sembunyikan jika beda
    }
  });
});
