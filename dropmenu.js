// ตั้งค่าการทำงานของเมนูดรอปดาวน์
var dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', function(event) {
  event.preventDefault();
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
});
