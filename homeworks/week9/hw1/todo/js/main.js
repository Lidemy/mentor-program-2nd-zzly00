let listItem = JSON.parse(localStorage.getItem('items')) || [];

function showItemList(){
    $('.list__item').html('');
    for(let i=0; i<listItem.length; i++){    
        const btnDoneClass = listItem[i].status === 'todo' ? '' : ' done--pink';
        const contentDoneClass = listItem[i].status === 'todo' ? '' : ' content-done';
        const content = listItem[i].content;
        let item = getItemHtml(i, btnDoneClass, contentDoneClass, content);
        $('.list__item').append(item);
    }
    $('.list__input__text').val('');
    getDeleteHeight();

    $('.item').click(changeStatus);
}
showItemList();

function changeStatus(e){
    const seq = e.currentTarget.dataset.seq;
    if(e.target.className === 'done'){
        listItem[seq].status = 'done';
    }else if(e.target.className === 'done done--pink'){
        listItem[seq].status = 'todo';
    }else if(e.target.className === 'delete'){
        listItem.splice(seq, 1);
    }else{
        return;
    }
    setLocalStorage();
}

$('.list__input__btnAdd').click(addItem);
$('.list__input__text').keydown(function(e){
    if(e.keyCode === 13){
        addItem();
    }
});

// 取得itemHtml
function getItemHtml(i, btnDoneClass, contentDoneClass, content){
    return `
        <div class="item" data-seq=${i}>
            <button class="done${btnDoneClass}"></button>
            <div class="content${contentDoneClass}">${content}</div>
            <button class="delete">Delete</button>
        </div>
    `;
}

// 新增項目
function addItem(){
    const item = $.trim($('.list__input__text').val());
    if(item){
        const data = {
            status: 'todo',
            content: item
        }
        listItem.splice(0, 0, data);
        setLocalStorage();
    } 
}

// 新增localStorage，並刷新頁面
function setLocalStorage(){
    localStorage.setItem('items', JSON.stringify(listItem));
    showItemList();
}

// 新增 delete 按鈕高度
function getDeleteHeight(){
    $('.delete').each(function(){
        $(this).height($(this).parent().height());
    })
}