const qAll = (selector) => {return document.querySelectorAll(selector)};
const q = (selector) => {return document.querySelector(selector)};

// input 特效及必填判斷
for(let i=0; i<qAll('.input').length; i++){
    qAll('.input')[i].addEventListener('focusout', () => {
        if(!qAll('.input')[i].value){
            qAll('.input')[i].classList.remove('input--value');
        }else{
            qAll('.input')[i].classList.add('input--value');
            qAll('.input')[i].style.borderBottom = '1px solid #ccc';
            qAll('.input__alert')[i].innerText = '';
        }
    })
}

q('.button').addEventListener('click', () => {
    for(let i=0; i<qAll('.input').length; i++){
        if(!qAll('.input')[i].value){
            qAll('.input')[i].style.borderBottom = '1px solid #db4437'
            qAll('.input__alert')[i].innerText = '必填欄位';
        } 
    }
})