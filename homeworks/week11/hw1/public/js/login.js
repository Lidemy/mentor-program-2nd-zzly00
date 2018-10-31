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
        $.ajax({
            type: 'POST',
            url: '/v1/login',
            data: 'username='+username+'&password='+password,
            success: function(resp){
                if(resp === 'error'){
                    $('.form-control')[0].className = 'form-control is-invalid';
                    $('.invalid-feedback').text('帳號或密碼錯誤，請重新確認');
                }
                if(resp === 'success'){
                    window.location = '/';
                }
            }
        });
    }    
})