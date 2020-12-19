header.onmouseover = function(event) {
  let target = event.target;
  target.style.background = 'white';
};

header.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
};