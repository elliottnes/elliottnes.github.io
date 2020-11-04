/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

/* Open */
function openNav1() {
  document.getElementById("myNav1").style.height = "100%";
}

/* Close */
function closeNav1() {
  document.getElementById("myNav1").style.height = "0%";
}


/* Open the sidenav */
function openNav3() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav3() {
  document.getElementById("mySidenav").style.width = "0";
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ":" + m + " PST";
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
