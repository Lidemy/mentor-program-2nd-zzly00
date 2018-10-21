const url = location.href;
const page = Number(url.split('page=')[1]) || 1;
const qAll = (selector) => {return document.querySelectorAll(selector)};
const q = (selector) => {return document.querySelector(selector)};

// 顯示在哪一頁
qAll('.page')[page].style.backgroundColor = '#7b8b6f';
qAll('.page')[page].style.color = '#fff';

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