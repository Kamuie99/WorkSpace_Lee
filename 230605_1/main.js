function bgColorChange() {
  var sel = document.getElementById('selectbox');
  var background = document.getElementById('background');
  
  background.style.backgroundColor = sel.value;
}