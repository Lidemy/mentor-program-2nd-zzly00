$('.btn').click(()=>{
    const username = $('input[name="username"]').val();
    const password = $('input[name="password"]').val();
    
    for(let i=0; i<$('.form-control').length; i++){
        if(!$('.form-control')[i].value){
            $('.form-control')[i].className = 'form-control is-invalid';
            $('.invalid-feedback').text('必填');
        }else{
            $('.form-control')[i].className = 'form-control';
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
                    $('.form-control')[0].className = 'form-control is-invalid';
                    $('.invalid-feedback').text('帳號或密碼錯誤，請重新確認');
                }
                if(request.responseText === 'success'){
                    window.location = 'index.php';
                }
            }
        }
    }    
})


// q('.button').addEventListener('click', () => {
//     const username = q('[name=username]').value;
//     const password = q('[name=password]').value;

//     for(let i=0; i<qAll('.input').length; i++){
//         if(!qAll('.input')[i].value){
//             qAll('.input')[i].style.borderBottom = '1px solid #db4437'
//             qAll('.input__alert')[i].innerText = '必填欄位';
//         } 
//     }

    // if(username && password){
    //     const request = new XMLHttpRequest;
    //     request.open('POST', 'handler/check_login.php', true);
    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send('username='+username+'&password='+password);
        
    //     request.onload = () => {
    //         if(request.status>=200 && request.status<400){
    //             if(request.responseText === 'error'){
    //                 qAll('.input')[0].style.borderBottom = '1px solid #db4437'
    //                 qAll('.input__alert')[0].innerText = '帳號或密碼錯誤，請重新確認';
    //             }
    //             if(request.responseText === 'success'){
    //                 window.location = 'index.php';
    //             }
    //         }
    //     }
    // }
// })