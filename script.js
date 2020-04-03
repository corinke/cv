
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
};
closeBtn.onclick = function(){
  modal.style.display = "none"
};
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
};

let modalBtnA = document.getElementById("modal-btnA")
let modalA = document.querySelector(".modalA")
let closeBtnA = document.querySelector(".close-btnA")
modalBtnA.onclick = function(){
  modalA.style.display = "block"
};
closeBtnA.onclick = function(){
  modalA.style.display = "none"
};
window.onclick = function(e){
  if(e.target == modalA){
    modalA.style.display = "none"
  }
};
