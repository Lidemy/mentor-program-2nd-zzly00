const qAll = (selector) => {return document.querySelectorAll(selector)};
const q = (selector) => {return document.querySelector(selector)};

// input 特效及必填判斷
for(let i=0; i<qAll('.input').length; i++){
    qAll('.input')[i].addEventListener('focusout', () => {
        console.log(qAll('.input')[i].value);
        if(!qAll('.input')[i].value){
            qAll('.input')[i].classList.remove('input--value');
        }else{
            qAll('.input')[i].classList.add('input--value');
            qAll('.input')[i].style.borderBottom = '1px solid #ccc';
            qAll('.input__alert')[i].innerText = '';
        }
    })
}

// 送出表單
q('.button').addEventListener('click', () => {
    console.log(q('.container--md'));
    const username = q('[name=username]').value;
    const password = q('[name=password]').value;
    const nickname = q('[name=nickname]').value;
    const avatar = ['https://image.flaticon.com/icons/svg/188/188987.svg', 'https://image.flaticon.com/icons/svg/188/188990.svg', 'https://image.flaticon.com/icons/svg/188/188989.svg',
        'https://image.flaticon.com/icons/svg/188/188988.svg', 'https://image.flaticon.com/icons/svg/189/189000.svg', 'https://image.flaticon.com/icons/svg/188/188995.svg'];

    for(let i=0; i<qAll('.input').length; i++){
        if(!qAll('.input')[i].value){
            qAll('.input')[i].style.borderBottom = '1px solid #db4437'
            qAll('.input__alert')[i].innerText = '必填欄位';
        } 
    }

    if(username && password && nickname){
        const request = new XMLHttpRequest;
        request.open('POST', 'check_register.php', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('username='+username+'&password='+password+'&nickname='+nickname+'&avatar='+avatar[Math.floor(Math.random()*6)]);

        request.onload = () => {
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'error'){
                    qAll('.input')[0].style.borderBottom = '1px solid #db4437'
                    qAll('.input__alert')[0].innerText = '帳號已存在';
                }
                if(request.responseText === 'success'){
                    document.querySelector('.container--md').innerHTML = `
                        <div class="content">
                            註冊成功
                            <div class="link"><a href="index.php" >點擊導頁至留言板</a></div>
                        </div>
                    `;
                } 
            }
        }
    }
})