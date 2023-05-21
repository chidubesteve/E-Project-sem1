const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");


like.addEventListener("click", function () {
    like.style.color = "blue";
    dislike.style.color = "black";
})

dislike.addEventListener("click", function () {
    dislike.style.color = "red";
    like.style.color = "black";
})

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({placement: "top"});   
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  });


