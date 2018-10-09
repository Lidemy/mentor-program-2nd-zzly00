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
    const username = q('[name=username]').value;
    const password = q('[name=password]').value;

    for(let i=0; i<qAll('.input').length; i++){
        if(!qAll('.input')[i].value){
            qAll('.input')[i].style.borderBottom = '1px solid #db4437'
            qAll('.input__alert')[i].innerText = '必填欄位';
        } 
    }

    if(username && password){
        const request = new XMLHttpRequest;
        request.open('POST', 'handler/check_login.php', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('username='+username+'&password='+password);
        
        request.onload = () => {
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'error'){
                    qAll('.input')[0].style.borderBottom = '1px solid #db4437'
                    qAll('.input__alert')[0].innerText = '帳號或密碼錯誤，請重新確認';
                }
                if(request.responseText === 'success'){
                    window.location = 'index.php';
                }
            }
        }
    }
})