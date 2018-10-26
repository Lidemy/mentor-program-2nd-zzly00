import '../scss/_functions.scss';
import '../scss/style.scss';

let listItem = JSON.parse(localStorage.getItem('items')) || [];

function showItemList(){
    $('.list__item').empty();

    $('.list__item').append(listItem.map((item,index) => {
        const btnDoneClass = item.status === 'todo' ? '' : ' done--pink';
        const contentDoneClass = item.status === 'todo' ? '' : ' content-done';
        const content = item.content;
        return `
            <div class="item" data-seq=${index}>
                <button class="done${btnDoneClass}"></button>
                <div class="content${contentDoneClass}">${content}</div>
                <div class="delete"><i class="fas fa-times"></i></div>
            </div>
        `;
    }));
    $('.list__input__text').val('');
}
showItemList();

// add todo
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
$('.list__input__btnAdd').click(addItem);
$('.list__input__text').keydown(function(e){
    if(e.keyCode === 13){
        addItem();
    }
});

// done or delete
$('.list__item').click((e)=>{
    const seq = e.target.parentElement.dataset.seq;
    if(e.target.className === 'done'){
        listItem[seq].status = 'done';
    }else if(e.target.className === 'done done--pink'){
        listItem[seq].status = 'todo';
    }else if(e.target.parentElement.className === 'delete'){
        listItem.splice(seq, 1);
    }else{
        return;
    }
    setLocalStorage();
})

// 新增localStorage，並刷新頁面
function setLocalStorage(){
    localStorage.setItem('items', JSON.stringify(listItem));
    showItemList();
}