const modal = document.getElementById('modal');
const btn = document.getElementById("btn-modal");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function deleteImage() {
    let imgWrapper = document.querySelector('.form__img-wrapper');
    imgWrapper.style.background = 'rgb(0 0 0 / 60%)';
  }

function uploadImage() {
    let imgWrapper = document.querySelector('.form__img-wrapper');
    imgWrapper.style.background = "url('img/avatar.jpg')";
  }