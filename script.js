// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("menu-item");
//   if (window.location.href.includes("/pages") && cityName == 'kitchen') {
//     window.location.href = '/';
//     tabcontent[0].style.display = "block";
//     tabcontent[1].style.display = "none";
//     tabcontent[2].style.display = "none";
//     // document.querySelector('#tab a[href="#kitchen"]').classList.add('active') 
//   }
//   if (window.location.href.includes("/pages") && cityName == 'bar') {
//     tabcontent[0].style.display = "none";
//     tabcontent[1].style.display = "block";
//     tabcontent[2].style.display = "none";
//     // document.querySelector('#tab a[href="#bar"]').classList.add('active')
//     window.location.href = '/#bar';
//   }
//   if (window.location.href.includes("/pages") && cityName == 'hookah') {
//     window.location.href = '/';
//     tabcontent[0].style.display = "none";
//     tabcontent[1].style.display = "none";
//     tabcontent[2].style.display = "block";
//     // document.querySelector('#tab a[href="#hookah"]').classList.add('active')
//   }
//   console.log(cityName);
//   // if ()
//   // window.location.href = '/';
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tab-elem");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// function ready() {
//   let tabcontent = document.getElementsByClassName("menu-item");
//   if (window.location.href.includes("/pages") && cityName == 'kitchen') {
//     window.location.href = '/';
//     tabcontent[0].style.display = "block";
//     tabcontent[1].style.display = "none";
//     tabcontent[2].style.display = "none";
//     // document.querySelector('#tab a[href="#kitchen"]').classList.add('active') 
//   }
//   if (window.location.href.includes("/pages") && cityName == 'bar') {
//     tabcontent[0].style.display = "none";
//     tabcontent[1].style.display = "block";
//     tabcontent[2].style.display = "none";
//     // document.querySelector('#tab a[href="#bar"]').classList.add('active')
//     window.location.href = '/#bar';
//   }
//   if (window.location.href.includes("/pages") && cityName == 'hookah') {
//     window.location.href = '/';
//     tabcontent[0].style.display = "none";
//     tabcontent[1].style.display = "none";
//     tabcontent[2].style.display = "block";
//     // document.querySelector('#tab a[href="#hookah"]').classList.add('active')
//   }
// }

// document.addEventListener("DOMContentLoaded", ready);