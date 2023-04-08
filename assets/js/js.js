/* script.js */

// Inisialisasi variabel yang digunakan
var seats = document.getElementsByClassName('seat');

// Event listener untuk tempat duduk yang diklik
for (var i = 0; i < seats.length; i++) {
  seats[i].addEventListener('click', function() {
    // Toggle kelas 'selected' ketika tempat duduk diklik
    this.classList.toggle('selected');
  });
}
