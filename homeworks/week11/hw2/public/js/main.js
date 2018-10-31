const q = n => document.querySelector(n)

q('.shortener__btn').addEventListener('click', (e)=>{
    const url = q('.shortener__url').value 
    if(url){
        q('.shortener__btn').setAttribute('disabled', 'disabled');
        (async function(){
            try{
                const headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                const data = 'url='+url;
                const init = {
                    method: 'POST',
                    headers: headers,
                    body: data
                };
                
                const request = new Request('/v1/shortener', init);
                let res = await fetch(request);   
                if(res.ok){
                    q('.newurl__url').textContent = await res.text();
                    q('.shortener__url').value = '';
                    q('.shortener__btn').removeAttribute('disabled')
                }else{
                    q('.newurl__url').textContent = '系統維護，請稍後再試';
                    q('.shortener__btn').removeAttribute('disabled')
                } 
            }catch(e){
                console.log(e);
                q('.newurl__url').textContent = '系統維護，請稍後再試';
                q('.shortener__btn').removeAttribute('disabled');
            }
        }())
    }
})

q('.newurl').addEventListener('click',(e) => {
    window.location = 'http://' + e.target.innerText;
})