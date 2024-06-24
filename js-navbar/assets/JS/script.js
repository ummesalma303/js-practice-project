// const navBarIcon = document.querySelector('.nav-bar-icon')
// const ul = document.querySelector('ul')

// navBarIcon.addEventListener('click',() =>{
//     navBarIcon.classList.toggle('active')
//     ul.classList.toggle('active')
// })


// document.querySelectorAll('li').forEach(n => n.addEventListener('click',() =>{
//     navBarIcon.classList.remove('active')
//     ul.classList.remove('active')
// }));




const navBarIcon = document.querySelector('.nav-bar-icon');
const ul = document.querySelector('ul');

navBarIcon.addEventListener('click',() =>{
    // navBarIcon.classList.toggle('active')
    ul.classList.toggle('active')

    if (ul.className == 'active') {
    document.getElementById('bar').className = "fa-regular fa-circle-xmark";
    }else{
    document.getElementById('bar').className = "fa-solid fa-bars";
    }
})










// const navBarIcon = document.querySelector('.nav-bar-icon')
// const ul = document.querySelector('ul')
// navBarIcon.addEventListener('click',() =>{
//     ul.classList.toggle('showData')
//     if (ul.className == 'showData') {
//         document.getElementById('bar').className = "fa-regular fa-circle-xmark";
//     }
//     })