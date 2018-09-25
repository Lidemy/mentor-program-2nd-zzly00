## 什麼是 DOM？

- Document Object Model
- 把每個 HTML Tag 都看成一個節點(node)
- 讓程式來操縱 HTML、CSS

## 什麼是 Ajax？

- Asynchronous JavaScript and XML
- 透過瀏覽器提供的 API ，可以不換頁跟 Server 溝通
- 非同步

## HTTP method 有哪幾個？有什麼不一樣？

- GET：取得資料
- HEAD：request 與 get 相同，只是 response 沒有 body
- POST：新增資料
- PUT：修改資料，整個資料換新
- PATCH：修改部分指定的資料
- DELETE：刪除資料
- OPTIONS：看 Server 支援哪一些 method

參考資料：[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## `GET` 跟 `POST` 有哪些區別，可以試著舉幾個例子嗎？

- GET
  - 將資料帶在header中，例如：`http://test.com/?id=123`
  - 會自動做 URL encoded
  - 網址有長度限制
  - 不傳敏感資訊，例如：在商品頁面要取得商品圖片、名稱、描述、金額、更多詳細內容...等，`http://test.com/?productId=123`，提供商品id給 Server 取資料，商品id是顯示在網址上也沒影響的資訊
- POST
  - 參數放在在 body 中，例如：`http://test.com`，網址上看不到傳遞的資料
  - 適合放敏感資訊，例如：新增訂單，提供訂單的訂購者資訊、選購商品數量...等給 Server，包含個資，所以要將資訊放在 body 中

參考資料：[淺談 HTTP Method：表單中的 GET 與 POST 有什麼差別？](https://blog.toright.com/posts/1203/%E6%B7%BA%E8%AB%87-http-method%EF%BC%9A%E8%A1%A8%E5%96%AE%E4%B8%AD%E7%9A%84-get-%E8%88%87-post-%E6%9C%89%E4%BB%80%E9%BA%BC%E5%B7%AE%E5%88%A5%EF%BC%9F.html)、[[Http] GET、POST Method](https://dotblogs.com.tw/marcus116/archive/2011/05/29/26428.aspx)

## 什麼是 RESTful API？

- 符合REST設計風格的 WEB API(Application Programming Interface)
- 就是一個介接的橋樑

參考資料：[維基](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2)、[從無到有打造 RESTful API service系列](https://ithelp.ithome.com.tw/articles/10157431)

## JSON 是什麼？

- JavaScript Object Notation
- 格式的一種，依照 JavaScript 物件語法的資料格式

## JSONP 是什麼？

- JSON with Padding
- 利用`<script>`裡面放資料，並透過 function 將資料帶回去

## 要如何存取跨網域的 API？

- JSONP
- CORS(Cross-Origin Resource Sharing)
  - Server 必須在 Response 的 Header 裡面加上 Access-Control-Allow-Origin

參考資料：[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)


