q('.logout').addEventListener('click', () => {
    const cookie = document.cookie;
    if(cookie){
        const request = new XMLHttpRequest;
        request.open('POST', 'handler/check_logout.php', true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(cookie);

        request.onload = () => {
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'success'){
                    window.location = 'logout.php';
                }
            }
        }
    }else{
        window.location = 'logout.php';
    }
})