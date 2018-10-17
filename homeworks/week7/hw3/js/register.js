$('.btn').click(()=>{
    const username = $('input[name="username"]').val();
    const password = $('input[name="password"]').val();
    const nickname = $('input[name="nickname"]').val();
    const avatar = ['https://image.flaticon.com/icons/svg/188/188987.svg', 'https://image.flaticon.com/icons/svg/188/188990.svg', 'https://image.flaticon.com/icons/svg/188/188989.svg',
        'https://image.flaticon.com/icons/svg/188/188988.svg', 'https://image.flaticon.com/icons/svg/189/189000.svg', 'https://image.flaticon.com/icons/svg/188/188995.svg'];
    
    for(let i=0; i<$('.form-control').length; i++){
        if(!$('.form-control')[i].value){
            $('.form-control')[i].className = 'form-control is-invalid';
            $('.invalid-feedback').text('必填');
        }else{
            $('.form-control')[i].className = 'form-control';
        }
    }

    if(username && password && nickname){
        let num = Math.floor(Math.random()*6);
        $.ajax({
            type: 'POST',
            url: 'handler/check_register.php',
            data: 'username='+username+'&password='+password+'&nickname='+nickname+'&avatar='+avatar[num],
            success: function(resp){
                if(resp === 'error'){
                    $('.form-control')[0].className = 'form-control is-invalid';
                    $('.invalid-feedback').text('帳號已存在');
                }
                if(resp === 'success'){
                    let second = 6;
                    function timer(){
                        if(second != 1){
                            second --;
                            let cardHTML = `
                                <div class="card-body card--register-success">
                                    <h3>註冊成功，將在${second}秒後自動導頁</h3>
                                    <a href="index.php" >點擊導頁至留言板</a>
                                </div>
                            `;
                            $('.card').html('').append(cardHTML);
                            setTimeout(timer, 1000);
                        }else{
                            window.location = 'index.php';
                        }
                    }
                    setTimeout(timer, 0);
                } 
            }
        });
    }
})