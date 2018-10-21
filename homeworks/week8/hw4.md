## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
- Domain Name System 網域名稱系統
- 將域名轉換成 ip 位置，例如：輸入 google.com 就會將域名轉為 172.217.160.110
- Google 的好處：可以搜集數據，例如：每日多少人瀏覽
- 一般大眾的好處：可以不用記得 ip 位置

## 什麼是資料庫的 lock？為什麼我們需要 lock？
- 當交易 (transaction) 還沒完成時，需要先將此狀態鎖起來，不然可能發生抓取舊資料導致問題，例如：A 有 100元，轉帳給 B 20元，轉帳給 C 100元，當執行轉帳給 B 但尚未完成時，就執行轉帳給 C 的程式，此時一樣會抓取 A 原本的 100元，最後導致轉帳 120元(B 20、C 100)
- 搶票時，可能同時收到 request，但票只剩一張，這時會同時執行兩個 request，而導致超賣 (race condition)，因此需要 lock，在更新前將資料鎖起來，讓其他人無法存取

參考資料：[資料庫的交易鎖定 Locks](https://www.qa-knowhow.com/?p=383)

## NoSQL 跟 SQL 的差別在哪裡？
- Not Only SQL 非關聯式資料庫
- 沒有 Schema
- 用 key-value 存入，例如：JSON

參考資料：[閃開！讓專業的來：SQL 與 NoSQL](https://ithelp.ithome.com.tw/articles/10187443)、[SQL 和 NoSQL 的区别](https://www.jianshu.com/p/b32fe4fe45a3)

## 資料庫的 ACID 是什麼？
- Atomicity 原子性：不可部分完成，要麼全部完成，要麼全部不完成。
- Consistency 一致性：資料的一致，例如：A、B 各有 100元，A 轉帳給 B 10元，則 A 變為 90元、B 變為 110元，金額加總在轉帳前後皆是 200元。
- Isolation 隔離性：交易不互相影響，防止同時執行時而導致數據不一致。
- Durability 持久性：交易處理結束後，對數據的修改是永久的。

參考資料：[維基百科 - ACID](https://zh.wikipedia.org/zh-tw/ACID)、[如何理解数据库事务中的一致性的概念？](https://www.zhihu.com/question/31346392)