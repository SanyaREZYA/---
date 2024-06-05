"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const professionName = document.querySelector('.profession-name p');
    const professionImages = document.querySelectorAll('.profession-image-content img');
    const professionDescriptions = [
        "Software Engineer",
        "Game Developer",
        "Front-end Developer"
    ];

    let currentIndex = 0;

    function changeProfession(index) {
        professionName.textContent = professionDescriptions[index];
        for (let i = 0; i < professionImages.length; i++) {
            if (index === 2) {
                switch (i) {
                    case 0:
                        professionImages[i].setAttribute('onclick', 'window.location.href="laba1.html"');
                        break;
                    case 1:
                        professionImages[i].setAttribute('onclick', 'window.location.href="laba2.html"');
                        break;
                    case 2:
                        professionImages[i].setAttribute('onclick', 'window.location.href="laba3.html"');
                        break;
                    default:
                        break;
                }
            } else {
                professionImages[i].removeAttribute('onclick');
            }
            professionImages[i].src = `images/image_${index}_${i + 1}.jpg`;
        }
    }
    

    function nextProfession() {
        currentIndex = (currentIndex + 1) % professionDescriptions.length;
        changeProfession(currentIndex);
    }

    function prevProfession() {
        currentIndex = (currentIndex - 1 + professionDescriptions.length) % professionDescriptions.length;
        changeProfession(currentIndex);
    }

    const leftButton = document.querySelector('.button-left-arrow__bg');
    const rightButton = document.querySelector('.button-right-arrow__bg');

    leftButton.addEventListener('click', prevProfession);
    rightButton.addEventListener('click', nextProfession);
});

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const burgerIcon = document.querySelector('.burger-icon');
  
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
  }

function goHome()
{
    window.location.href = "index.html#portfolio"
}
