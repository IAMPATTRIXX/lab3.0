document.querySelector('#output').style.visibility = 'hidden';

let inputweight = document.querySelector('#lbsInput');
inputweight.addEventListener('input', () => {
    let lbs = event.target.value;
    console.log(lbs);

    if(lbs === '' || lbs < 0){
     document.querySelector('#output').style.visibility = 'hidden';
    }else{
    document.querySelector('#output').style.visibility = 'visible';
    document.querySelector('#gramsOutput').textContent = lbs*453.592;
    document.querySelector('#kgOutput').textContent = lbs*0.453;
    document.querySelector('#ozOutput').textContent = lbs*16;
    }
       
   
}); 

