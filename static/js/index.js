let body = document.body;
let hamburger = document.querySelector('[data-hamburger]');
let menu = document.querySelector('[data-menu]');

window.addEventListener('resize', function(event) {
    checkSize();
}, true);

function checkSize() {
    if (hamburger) {
        if (window.innerWidth > 1024 && hamburger.classList.contains('is-active')) {
            hamburger.classList.remove('is-active');
            body.classList.remove('fixed');
            if (menu) {
                menu.classList.remove('open');   
            }
        }
    }
}

if (hamburger) {
    hamburger.addEventListener('click', function () {
        if (hamburger.classList.contains('is-active')) {
            hamburger.classList.remove('is-active');
            body.classList.remove('fixed');
            if (menu) {
                menu.classList.remove('open');
            }
        } else {
            hamburger.classList.add('is-active');
            body.classList.add('fixed');
            if (menu) {
                menu.classList.add('open');
            }
        }
    })
}

function showInfoMessage() {
    Swal.fire({
        title: 'Макет был реализован Дашей)',
        text: "Вариант № 5",
        confirmButtonColor: "#B57AD2",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
  
document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", () => {
        showInfoMessage();
    });
});
  