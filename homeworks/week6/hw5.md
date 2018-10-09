## 請說明 SQL Injection 的攻擊原理以及防範方法

- 讓輸入的資料變成程式的一部分，透過輸入 SQL 語法取得資料，例如：在輸入帳號時，填入 `' or 1=1 --`，原本的語法為 `SELECT * FROM users WHERE username='$username' AND password='$password'`，會變成 `SELECT * FROM users WHERE username='' or 1=1 --' AND password=''`
- 方法一：`mysqli_real_escape_string()`，可以轉譯特殊字符
- 方法二：prepare statement
  ```javascript
  $stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?;");
  $stmt->bind_param("ss", $username, $password);
  $stmt->execute();
  $result = $stmt->get_result();

  if($result->num_rows > 0){
      $row = $result->fetch_assoc();
      // code...
  }
  ```

參考資料：[PHP Manual mysqli_real_escape_string](http://php.net/manual/en/mysqli.real-escape-string.php)

## 請說明 XSS 的攻擊原理以及防範方法

- Cross-Site Scripting
- 讓輸入的資料變成程式的一部分，透過 HTML 標籤輸入 `<script>`，就可以執行 JavaScript，例如：在輸入框，填入 `<script> function(){ code... } </script>`
- 方法：escape(跳脫)，將資料真實呈現，而不是變成 HTML 語法，`echo htmlspecialchars($str, ENT_QUOTES, 'utf-8')`

參考資料：[PHP Manual htmlspecialchars](http://php.net/manual/en/function.htmlspecialchars.php)

## 請說明 CSRF 的攻擊原理以及防範方法

- Cross Site Request Forgery，又稱 one-click attack
- 透過一些方式騙取使用者的瀏覽器中，並以使用者名義發出 request
- 方法一：檢查 request header 中的 referer，如果是不合法的 domain 過來的就 reject
  - 注意一：有些瀏覽器可能不帶 referer
  - 注意二：有些使用者可能關閉帶 referer 的功能
  - 注意三：判定合法 domain 的程式有沒有 bug
- 方法二：加上圖形驗證碼、簡訊驗證碼等等
- 方法三：加上 CSRF token，在 `form` 中，加一個 `hidden` 的 `csrftoken`，值由 server 隨機產生並存在 session 中。之後如果 submit 就筆對是否與存的一樣
  - 注意：支持 cross origin 的 request，還是有可能會讓攻擊者在他的頁面中發起 request，取得 csrftoken
- 方法四：Double Submit Cookie， server 隨機 csrftoken，同時在 client side 設定 csrftoken 的 cookie
- 方法五：加上 SameSite

參考資料：[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

## 請舉出三種不同的雜湊函數

- MD5
- SHA-1
- SHA-256
- bcrypt

參考資料：[PHP Manual hash](http://php.net/manual/en/function.hash.php)

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別

- cookie：儲存在 client 端，瀏覽器處理，有效期
- session：儲存在 server 端(db或記憶體中)，Chrome DevTools 中看不到

## `include`、`require`、`include_once`、`require_once` 的差別

- include：不檢查是否已 include 過，導致重複引入檔案；引不到時出現警告（E_WARNING），程式不會停止
- require：不檢查是否已 require 過，導致重複引入檔案；引不到時出現錯誤（E_COMPILE_ERROR），且程式會停止
- include_once：先檢查，所以不會重複引入檔案；引不到時出現警告，程式不會停止
- require_once：先檢查，所以不會重複引入檔案；引不到時出現錯誤，且程式會停止