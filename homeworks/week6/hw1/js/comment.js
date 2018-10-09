const url = location.href;
const page = Number(url.split('page=')[1]);
const qAll = (selector) => {return document.querySelectorAll(selector)};
const q = (selector) => {return document.querySelector(selector)};

// 顯示在哪一頁
if(isNaN(page)){
    qAll('.page')[1].style.backgroundColor = '#7b8b6f';
    qAll('.page')[1].style.color = '#fff';
}else{
    qAll('.page')[page].style.backgroundColor = '#7b8b6f';
    qAll('.page')[page].style.color = '#fff';
}

// 判斷上下頁按鈕連結
const pageUrl = {
    last: `<a href=?page=${page-1} class="page last">&#60;</a>`,
    lastDisable: `<a href="javascript:void(0)" class="page last page--disable">&#60;</a>`,
    next: `<a href=?page=${page+1} class="page next">&#62;</a>`,
    nextDisable: `<a href="javascript:void(0)" class="page next page--disable">&#62;</a>`,
    next2: `<a href=?page=2 class="page next">&#62;</a>`
}

if(page === 1){
    q('.last').outerHTML = pageUrl.lastDisable;
    q('.next').outerHTML = pageUrl.next;
}else if(page === qAll('.page').length-2){
    q('.next').outerHTML = pageUrl.nextDisable;
    q('.last').outerHTML = pageUrl.last;
}else if(isNaN(page)){
    q('.last').outerHTML = pageUrl.lastDisable;
    q('.next').outerHTML = pageUrl.next2;
}else{
    q('.last').outerHTML = pageUrl.last;
    q('.next').outerHTML = pageUrl.next;
}

// 編輯
for(let i =0; i<qAll('.edit').length; i++){
    qAll('.edit')[i].addEventListener('click', ()=>{
        const comment = qAll('.edit')[i].parentNode.nextElementSibling.nextElementSibling.innerText;
        const commentDiv = qAll('.edit')[i].parentNode.nextElementSibling.nextElementSibling;
        const c_id = qAll('.edit')[i].parentNode.lastElementChild.value;
        console.log(c_id);
        commentDiv.innerHTML = `
            <textarea name="content_update" class="comment__textarea" placeholder="留言內容">${comment}</textarea>
        `;
        qAll('.edit')[i].outerHTML = `
            <div class="edit done">編輯完成</div>
        `;
        editDone(c_id, commentDiv);
    })
}

// 完成
function editDone(comment_id, comment_div){
    for(let i =0; i<qAll('.done').length; i++){
        qAll('.done')[i].addEventListener('click', ()=>{
            const c_id = comment_id;
            const comment = qAll('[name=content_update]')[i].value;
            const commentDiv = comment_div;

            if(c_id && comment){
                const request = new XMLHttpRequest;
                request.open('POST', 'handler/update_comment.php', true);
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.send('c_id='+c_id+'&content='+comment);

                request.onload = () => {
                    if(request.status>=200 && request.status<400){
                        if(request.responseText === 'success'){
                            window.location = 'index.php';
                        }else{
                            alert('系統錯誤，麻煩請重新確認');
                        }
                    }
                }
            }
        })
    }
}

// 刪除
for(let i =0; i<qAll('.delete').length; i++){
    qAll('.delete')[i].addEventListener('click', ()=>{
        const c_id = qAll('.delete')[i].parentNode.lastElementChild.value;
        alert('請確認是否刪除？');
        if(c_id){
            const request = new XMLHttpRequest;
            request.open('POST', 'handler/update_comment.php', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send('c_id='+c_id);

            request.onload = () => {
                if(request.status>=200 && request.status<400){
                    if(request.responseText === 'success'){
                        window.location = 'index.php';
                    }else{
                        alert('系統錯誤，麻煩請重新確認');
                    }
                }
            }
        }
    })
}