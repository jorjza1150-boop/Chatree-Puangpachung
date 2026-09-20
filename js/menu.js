 
 
 // โหลด Menu.js
 fetch("manu.html")
 .then(res => res.text())
 .then(data => {
     document.getElementById("menu-container").innerHTML = data;

     // ✅ re-bind toggle หลังจากเมนูถูก inject
     const sidebarToggle = document.body.querySelector('#sidebarToggle');
     if (sidebarToggle) {
         sidebarToggle.addEventListener('click', event => {
             event.preventDefault();
             document.body.classList.toggle('sb-sidenav-toggled');
         });
     }
 });

  // โหลด Menu.js
 fetch("footers.html")
 .then(res => res.text())
 .then(data => {
     document.getElementById("footers").innerHTML = data;

     // ✅ re-bind toggle หลังจากเมนูถูก inject
     const sidebarToggle = document.body.querySelector('#sidebarToggle');
     if (sidebarToggle) {
         sidebarToggle.addEventListener('click', event => {
             event.preventDefault();
             document.body.classList.toggle('sb-sidenav-toggled');
         });
     }
 });
