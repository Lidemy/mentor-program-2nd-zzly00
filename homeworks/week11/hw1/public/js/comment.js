const pageCount = 10;

window.addEventListener('load',getIndex(1))

function getIndex(pageStart){
    $.ajax({
        type: 'GET',
        url: '/v1/loginstatus',
        success: function(resp) {
            if(!resp){
                getCommentData(getSubLoginHTML(), pageStart);
                $('.comment__edit').html('').append(getLoginHtml());
                $('.navbar-nav')
                    .html('')
                    .append(`<li class="nav-item"><a class="nav-link" href="/login">登入</a></li>
                        <li class="nav-item"><a class="nav-link" href="/register">註冊</a></li>`);  
            }else{
                
                const nickname = resp.nickname;
                const avatar = resp.avatar;
                const loginHTML = getSubLoginHTML(nickname, avatar);
                
                getCommentData(loginHTML, pageStart);
        
                $('.comment__edit').html('').append(getLoginHtml(nickname, avatar));
                $('.navbar-nav')
                    .html('')
                    .append(`<li class="nav-item"><a class="nav-link" href="/logout">登出</a></li>`);
            }
        },
    });
}

// get comment data
function getCommentData(loginHTML, pageStart){
    console.log('comment.js 1')
    $.ajax({
        type: 'GET',
        url: '/v1/comments',
        success: function(resp) {
            const start = Number(pageStart);
            const pageEnd = (start-1)*10+pageCount > resp.length ? resp.length : (start-1)*10+pageCount;
            $('.comment__list').html('');
            for(let i=(start-1)*10; i<pageEnd; i++){
                let comment = getCommentHTML(resp[i], loginHTML);
                $('.comment__list').append(comment);
            }
            $(':submit').click(addComment);

            // page
            const pageHTML = getPageHTML(resp.length, pageStart);
            $('.comment__page').html('').append(pageHTML);
            
            
            $('.page-item').click((e)=>{
                let page;
                const lastPage = Math.ceil(resp.length/10);
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
        },
    });
}

// get comment HTML
function getCommentHTML(data, loginHTML){
    const {cId, avatar, content, createTime, nickname, authorStatus, subcomment} = data;
    let subList = getSubComment(subcomment);
    const editAreaHTML = `
                <div class="row">
                    <input type="hidden" name="c_id" value=${cId}>
                    <button type="button" class="btn btn-primary btn-sm edit">編輯</button>
                    <button type="button" class="btn btn-primary btn-sm delete">刪除</button>
                </div>
            `;
    let editArea = authorStatus ? editAreaHTML : '';
    return `
        <div class="row justify-content-center">
            <div class="card bg-light mb-4 col-12 col-lg-8 parent comment" data-num="${cId}">
                <div class="card-header row justify-content-between align-items-center comment__user">
                    <div class="row">
                        <div class="avatar"><img src="${avatar}" alt=""></div>
                        <div class="row flex-column user__info">
                            <div class="nickname">${nickname}</div>
                            <div class="time">${createTime}</div>
                        </div>
                    </div>
                    ${editArea}
                </div>
                <div class="card-body">
                    <p class="card-text">${content}</p>
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
            const {sCId, sAvatar, sContent, sCreateTime, sNickname, sAuthorStatus, sCommentSub} = subcomment[i];
            let subcommentColor = sCommentSub ? 'border-primary' : 'border-secondary';
            const editAreaHTML = `
                <div class="row">
                    <input type="hidden" name="c_id" value=${sCId}>
                    <button type="button" class="btn btn-primary btn-sm edit">編輯</button>
                    <button type="button" class="btn btn-primary btn-sm delete">刪除</button>
                </div>
            `;
            let editArea = sAuthorStatus ? editAreaHTML : '';
            subList += `
                <div class="row justify-content-around">
                    <div class="card ${subcommentColor} mb-3 col-11 col-lg-11 comment">
                        <div class="card-header row justify-content-between align-items-center comment__user">
                            <div class="row">
                                <div class="avatar"><img src="${sAvatar}" alt=""></div>
                                <div class="row flex-column user__info">
                                    <div class="nickname">${sNickname}</div>
                                    <div class="time">${sCreateTime}</div>
                                </div>
                            </div>
                            ${editArea}
                        </div>
                        <div class="card-body">
                            <p class="card-text">${sContent}</p>
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
                <fieldset class="mb-3 col-11 comment__textarea border-secondary">
                    <div class="card-header row align-items-center comment__user">
                        <div class="avatar"><img src="${avatar}" alt=""></div>
                        <div class="row flex-column user__info">
                            <div class="nickname">${nickname}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control textarea" rows="3" style="margin-top: 10px; margin-bottom: 0px; height: 100px;"></textarea>
                    </div>
                    <div class="row justify-content-end submit-btn"><button type="submit" class="btn btn-primary">送出</button></div>
                </fieldset>
            </form>
        `;
    }else{
        return `
            <div class="row justify-content-center">
                <div class="card bg-dark mb-4 col-11 login"><a href="/login">登入</a></div>
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
                    <div class="row justify-content-end submit-btn"><button type="submit" class="btn btn-primary">送出</button></div>
                </fieldset>
            </form>
        `;
    }else{
        return `
            <div class="row justify-content-center">
                <div class="card bg-dark mb-4 col-12 col-lg-8 login"><a href="/login">登入</a></div>
            </div>
        `;
    }
}

// add comment
function addComment(e){
    e.preventDefault();
    const parent_id = $(e.target).parents('.parent').data('num');
    const comment = $(e.target).parent().prev().children().val();
    const pageStart = $('.page-item.active').text() ? $('.page-item.active').text() : 1;
    
    if(parent_id>=0 && comment){
        $.ajax({
            type: 'POST',
            url: '/v1/comments',
            data: 'parentId='+parent_id+'&content='+comment,
            success: function(resp) {
                console.log(resp)
                if(resp === 'success'){
                    getIndex(pageStart);
                }else{
                    alert('系統錯誤，麻煩請重新確認');
                }
            },
        });
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
        const pageStart = $('.page-item.active').text() || 1;

        if(c_id && comment){
            $.ajax({
                type: 'PUT',
                url: '/v1/comments',
                data: 'cId='+c_id+'&content='+comment,
                success: function(resp){
                    if(resp === 'success'){
                        getIndex(pageStart);
                    }else{
                        alert('系統錯誤，麻煩請重新確認');
                    }
                }
            });
        }
    })
}

// 刪除
function deleteComment(e){
    let confirmCheck = confirm('請確認是否刪除？');
    
    if(confirmCheck){
        const c_id = $(e.target).prev().prev().val();

        $.ajax({
            type: 'DELETE',
            url: '/v1/comments',
            data: 'cId='+c_id,
            success: function(resp){
                if(resp === 'success'){
                    const pageStart = $('.page-item.active').text() || 1;
                    getIndex(pageStart);
                }else{
                    alert('系統錯誤，麻煩請重新確認');
                }
            }
        });
    }
}