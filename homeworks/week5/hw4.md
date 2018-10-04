## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

- VARCHAR：存取不固定長度的資料，最大長度0~65535，必須定義長度，例如：VARCHAR(50)
- TEXT：存取不固定長度的非Unicode資料，最大長度2^31-1

參考資料：[varchar和text说不清的那些事
](http://wubx.net/varchar-vs-text/)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

- 讓瀏覽器存資料，使 Server 可以儲存或讀取
- setcookie("變數名稱","變數值","存活時間","路徑","網域")
  - 變數名稱：自行決定
  - 變數值：賦予變數的值
  - 存活時間：：在使用者端存在多久，不過使用者也可以自行刪除
  - 路徑：選填
  - 網域：選填
- 設置在 Header 中，且只有在同 domain 範圍下才能取得

參考資料：[PHP Cookies 使用說明 setcookie](http://www.wibibi.com/info.php?tid=134)、[cookie从哪来到哪去](https://juejin.im/post/584e1f5361ff4b006cd15698)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

- cookie 可能被盜用，導致資料外洩
- 密碼是明碼
- 加入會員時，沒有會員規章及同意條款等等
- 無法修改會員資料，且沒有log紀錄

參考資料：[HttpOnly - HTTP Headers 的資安議題 (3)](https://devco.re/blog/2014/06/11/setcookie-httponly-security-issues-of-http-headers-3/)