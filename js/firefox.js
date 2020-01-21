console.log('thisssss');

let title = document.querySelector('h1');
title.addEventListener('click', () => alert ('Stop  fu**king clicking me !!!!'));
// title.addEventListener('dblclick', () => alert ("what's up"));

let myimg =  document.querySelector('img');
myimg.addEventListener('click', () => {
    imgsrc = myimg.getAttribute('src')
    if(imgsrc === 'images/firefox-icon.png'){
        myimg.setAttribute('src','images/firefox2.png');
    }else{
        myimg.setAttribute('src','images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');
myButton.addEventListener('click', ()=> {
    let name = prompt('Whats your name : ')
    if (name === null || name === ''){
        return;
    }
        title.textContent = name ;
        localStorage.setItem('username',name);
});

if(localStorage.getItem('username')){
   let name = localStorage.getItem('username');
   title.textContent = name;
}