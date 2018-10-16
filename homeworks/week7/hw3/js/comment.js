const pageCount = 10;

window.addEventListener('load',getIndex(1))

function getIndex(pageStart){
    let uc_id = document.cookie;
    
    let navHTML = !uc_id 
                ? `<li class="nav-item"><a class="nav-link" href="login.php">登入</a></li>
                    <li class="nav-item"><a class="nav-link" href="register.php">註冊</a></li>`
                : `<li class="nav-item"><a class="nav-link" href="handler/check_logout.php">登出</a></li>`;
    $('.navbar-nav').html('').append(navHTML);

    if(uc_id){
        const request = new XMLHttpRequest;
        request.open('POST', 'handler/get_login_status.php', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlendcoded');
        request.send(uc_id);

        request.onload = () => {
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'error'){
                    getCommentData(getSubLoginHTML(), pageStart);
                    $('.comment__edit').html('').append(getLoginHtml());
                }else{
                    const requestJSON = JSON.parse(request.responseText);
                    const nickname = requestJSON[0].nickname;
                    const avatar = requestJSON[0].avatar;
                    const loginHTML = getSubLoginHTML(nickname, avatar);
                    
                    getCommentData(loginHTML, pageStart);
            
                    $('.comment__edit').html('').append(getLoginHtml(nickname, avatar)); // get comment textarea or login message
                } 
            }
        }
    }else{
        getCommentData(getSubLoginHTML(), pageStart);
        $('.comment__edit').html('').append(getLoginHtml());
    }
}

// get comment data
function getCommentData(loginHTML, pageStart){
    const request = new XMLHttpRequest();
    request.open('POST', 'handler/comment.php', true);

    request.onload = function(){
        $('.comment__list').html('');
        if(request.status>=200 && request.status<400){
            const requestJSON = JSON.parse(request.responseText);
            const start = Number(pageStart);
            const pageEnd = (start-1)*10+pageCount > requestJSON.length ? requestJSON.length : (start-1)*10+pageCount;
            
            for(let i=(start-1)*10; i<pageEnd; i++){
                let comment = getCommentHTML(requestJSON[i], loginHTML);
                $('.comment__list').append(comment);
            }
            $(':submit').click(addComment);

            // page
            const pageHTML = getPageHTML(requestJSON.length, pageStart);
            $('.comment__list').append(pageHTML);
            
            
            $('.page-item').click((e)=>{
                let page;
                const lastPage = Math.ceil(requestJSON.length/10);
                if(($(e.target).text() === '«' && $('.page-item.active').text() == '1') || $(e.target).text() === '»' && $('.page-item.active').text() == lastPage){
                    return;
                }else if($(e.target).text() === '«'){
                    page = Number($('.page-item.active').text()) -1;
                }else if($(e.target).text() === '»'){
                    page = Number($('.page-item.active').text()) +1;
                }else{
                    page = $(e.target).text();
                }

                getIndex(page);
                window.scrollTo(0, 0);
            });

            $('.edit').click(editComment);
            $('.delete').click(deleteComment);
        }
    }
    request.send();
}

// get comment HTML
function getCommentHTML(data, loginHTML){
    const {comment_id, comment_avatar, comment_content, comment_create_time, comment_nickname, comment_self_status, subcomment} = data;
    let subList = getSubComment(subcomment);
    const editAreaHTML = `
                <div class="row">
                    <input type="hidden" name="c_id" value=${comment_id}>
                    <button type="button" class="btn btn-primary btn-sm edit">編輯</button>
                    <button type="button" class="btn btn-primary btn-sm delete">刪除</button>
                </div>
            `;
    let editArea = comment_self_status ? editAreaHTML : '';
    return `
        <div class="row justify-content-center">
            <div class="card bg-light mb-4 col-12 col-lg-8 parent comment" data-num="${comment_id}">
                <div class="card-header row justify-content-between align-items-center comment__user">
                    <div class="row">
                        <div class="avatar"><img src="${comment_avatar}" alt=""></div>
                        <div class="row flex-column user__info">
                            <div class="nickname">${comment_nickname}</div>
                            <div class="time">${comment_create_time}</div>
                        </div>
                    </div>
                    ${editArea}
                </div>
                <div class="card-body">
                    <p class="card-text">${comment_content}</p>
                </div>
                ${loginHTML}
                ${subList}
            </div>
        </div>
    `;
}

// get subcomment HTML
function getSubComment(subcomment){
    let subList = '';
    if(subcomment.length){
        for(let i=0; i<subcomment.length; i++){
            const {subcomment_id, subcomment_avatar, subcomment_content, subcomment_create_time, subcomment_nickname, subcomment_self_status} = subcomment[i];
            let subcommentColor = subcomment_self_status ? 'border-primary' : 'bg-primary';
            const editAreaHTML = `
                <div class="row">
                    <input type="hidden" name="c_id" value=${subcomment_id}>
                    <button type="button" class="btn btn-primary btn-sm edit">編輯</button>
                    <button type="button" class="btn btn-primary btn-sm delete">刪除</button>
                </div>
            `;
            let editArea = subcomment_self_status ? editAreaHTML : '';
            subList += `
                <div class="row justify-content-around">
                    <div class="card ${subcommentColor} mb-3 col-11 col-lg-11 comment">
                        <div class="card-header row justify-content-between align-items-center comment__user">
                            <div class="row">
                                <div class="avatar"><img src="${subcomment_avatar}" alt=""></div>
                                <div class="row flex-column user__info">
                                    <div class="nickname">${subcomment_nickname}</div>
                                    <div class="time">${subcomment_create_time}</div>
                                </div>
                            </div>
                            ${editArea}
                        </div>
                        <div class="card-body">
                            <p class="card-text">${subcomment_content}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        return subList;
    }else{
        return '';
    }
}

// get Subcomment login HTML
function getSubLoginHTML(nickname='', avatar=''){
    if(nickname && avatar){
        return `
            <form class="row justify-content-around">
                <fieldset class="mb-3 col-11 comment__textarea border-primary">
                    <div class="card-header row align-items-center comment__user">
                        <div class="avatar"><img src="${avatar}" alt=""></div>
                        <div class="row flex-column user__info">
                            <div class="nickname">${nickname}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control textarea" rows="3" style="margin-top: 10px; margin-bottom: 0px; height: 100px;"></textarea>
                    </div>
                    <div class="row justify-content-end submit-btn"><button type="submit" class="btn btn-primary">Submit</button></div>
                </fieldset>
            </form>
        `;
    }else{
        return `
            <div class="row justify-content-center">
                <div class="card bg-dark mb-4 col-11 login"><a href="login.php">登入</a></div>
            </div>
        `; 
    }
}

// get Comment login HTML
function getLoginHtml(nickname='', avatar=''){
    if(nickname && avatar){
        return `
            <form class="row justify-content-center">
                <fieldset class="mb-5 col-12 col-lg-8 comment__textarea">
                    <div class="card-header row align-items-center comment__user">
                        <div class="avatar"><img src="${avatar}" alt=""></div>
                        <div class="row flex-column user__info">
                            <div class="nickname">${nickname}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control textarea" rows="3" style="margin-top: 10px; margin-bottom: 0px; height: 207px;"></textarea>
                    </div>
                    <div class="row justify-content-end submit-btn"><button type="submit" class="btn btn-primary">Submit</button></div>
                </fieldset>
            </form>
        `;
    }else{
        return `
            <div class="row justify-content-center">
                <div class="card bg-dark mb-4 col-12 col-lg-8 login"><a href="login.php">登入</a></div>
            </div>
        `;
    }
}

// add comment
function addComment(e){
    e.preventDefault();
    const parent_id = $(e.target).parents('.parent').data('num');
    const comment = $(e.target).parent().prev().children().val();
    const pageStart = $('.page-item.active').text();
    
    if(parent_id>=0 && comment){
        const request = new XMLHttpRequest;
        request.open('POST', 'handler/create_comment.php', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send('parent_id='+parent_id+'&content='+comment);

        request.onload = () => {       
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'success'){
                    getIndex(pageStart);
                }else{
                    alert('系統錯誤，麻煩請重新確認');
                }
            }
        }
    }
}

// get page HTML
function getPageHTML(commentCount, pageNum){
    const pageTotal = Math.ceil(commentCount/10);
    const currentPage = Number(pageNum) - 1;
    let preBtn = currentPage ? '' : ' disabled';
    let nextBtn = currentPage+1 === pageTotal ? ' disabled' : ' ';

    let preHTML = `
        <div class="row justify-content-center">
            <div class="bs-component">
                <ul class="pagination">
                    <li class="page-item${preBtn}"><a class="page-link">&laquo;</a></li>
    `;
    const nextHTML = `
                    <li class="page-item${nextBtn}"><a class="page-link">&raquo;</a></li>
                </ul>
            </div>
        </div>
    `;

    if(pageTotal >1){
        for(let i=0; i<pageTotal; i++){
            if(i == currentPage){
                preHTML += `<li class="page-item active"><a class="page-link">${i+1}</a></li>
                `;
            }else{
                preHTML += `<li class="page-item"><a class="page-link">${i+1}</a></li>
                `;
            }
        }
        return preHTML+nextHTML;
    }else{
        return '';
    }
}


// 編輯
function editComment(e){
    const comment = $(e.target).closest('.comment').children('.card-body').children().text();
    const commentDiv = $(e.target).closest('.comment').children('.card-body');
    const c_id = $(e.target).prev().val();

    const textArea = `
        <div class="form-group">
            <textarea class="form-control textarea" rows="3" style="margin-top: 10px; margin-bottom: 0px; height: 100px;">${comment}</textarea>
        </div>
    `;
    commentDiv.empty().append(textArea);

    $(e.target).prop('outerHTML', '<button type="button" class="btn btn-info btn-sm edit done">編輯完成</button>')

    editDone(c_id);
}

// 完成
function editDone(comment_id){
    $('.done').click((e)=>{
        const c_id = comment_id;
        const comment = $(e.target).closest('.comment').children('.card-body').find('.textarea').val();
        const pageStart = $('.page-item.active').text();

        if(c_id && comment){
            const request = new XMLHttpRequest;
            request.open('POST', 'handler/update_comment.php', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send('c_id='+c_id+'&content='+comment);

            request.onload = () => {
                if(request.status>=200 && request.status<400){
                    if(request.responseText === 'success'){
                        getIndex(pageStart);
                    }else{
                        alert('系統錯誤，麻煩請重新確認');
                    }
                }
            }
        }
    })
}

// 刪除
function deleteComment(e){
    let confirmCheck = confirm('請確認是否刪除？');
    
    if(confirmCheck){
        const c_id = $(e.target).prev().prev().val();

        const request = new XMLHttpRequest;
        request.open('POST', 'handler/update_comment.php', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send('c_id='+c_id);

        request.onload = () => {
            if(request.status>=200 && request.status<400){
                if(request.responseText === 'success'){
                    const pageStart = $('.page-item.active').text();
                    getIndex(pageStart);
                }else{
                    alert('系統錯誤，麻煩請重新確認');
                }
            }
        }
    }
}