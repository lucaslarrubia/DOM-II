// Your code goes here

const h2Header = document.querySelectorAll('h2');
for (let i = 0; i < h2Header.length; i++) {
    h2Header[i].addEventListener('mouseover', () => {
    h2Header[i].style.color = 'gray'; 
    })
    h2Header[i].addEventListener('mouseout', () => {
        h2Header[i].style.color = '';
    })
}

const image = document.querySelectorAll('img');
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', () => {
    image[i].style.opacity = '0.5';
    })
    image[i].addEventListener('mouseover', () => {
        image[i].style.border = '3px solid pink';
    })
    image[i].addEventListener('mouseout', () => {
        image[i].style.border = '';
    })
}

const button = document.querySelectorAll('.btn');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('drag', () => {
        image[i].style.opacity = '0.5';
    })
}

const h1Header = document.querySelector('h1');
h1Header.addEventListener('dblclick', function(e) {
    h1Header.classList.toggle('large');
})

const navItems = document.querySelectorAll('a');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', () => {
        navItems[i].style.color = 'pink';
    })
    navItems[i].addEventListener('mouseout', () => {
        navItems[i].style.color = '';
    })
    navItems[i].addEventListener('mouseover', () => {
        navItems[i].classList.toggle('large');
})

}