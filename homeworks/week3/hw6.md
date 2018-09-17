## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

- `<img />` 圖片
  -`src=""`：圖片路徑
  -`alt=""`：圖片敘述，當圖片無法顯示時，就會顯示敘述；另外也提供給閱讀軟體(視障)或搜尋引擎使用
  -`title=""`：額外資訊，游標在圖上時，會顯示
- `<table>` 表格
  -包含`<tr>`、`<td>`、`<th>`
  - `<tr>`：表格列(table row)
  - `<td>`：表格資料(table data)
  - `<th>`：表格標題(table heading)，`scope="row"`行標題、`scope="col"`欄標題
  - 範例：
  ```html
  <table>
    <tr>
        <th></th>
        <th scope="col">Apple Pie</th>
        <th scope="col">Cheesecake</th>
    </tr>
    <tr>
        <th scope="row">Price:</th>
        <td>$120</td>
        <td>$100</td>
    </tr>
  </table>
  ```
  <table>
    <tr>
        <th></th>
        <th scope="col">Apple Pie</th>
        <th scope="col">Cheesecake</th>
    </tr>
    <tr>
        <th scope="row">Price:</th>
        <td>$120</td>
        <td>$100</td>
    </tr>
  </table>
- `<input />` 輸入
  - `type="text"`：文字輸入、`type="password"`：密碼輸入、`type="textarea"`：文字區塊、`type="radio"`：單選、`type="checkbox"`：多選
  - `name=""`：欄位名稱，讓伺服器知道值所對應的欄位，全部皆可搭配使用
  - `maxlength=""`：限制輸入字元數，text、password搭配使用
  - `value=""`：選擇的值，radio、checkbox搭配使用
  - `checked="checked"`：預設選擇，radio、checkbox搭配使用

## 請問什麼是盒模型（box modal）

- 包含border, padding, margin
  - border：盒子的四邊
  - padding：盒子四邊到內部元素的間距
  - margin：盒子四邊到外部元素的間距

  ![box modal](http://www.w3school.com.cn/i/ct_boxmodel.gif)
  圖片來源：http://www.w3school.com.cn/css/css_boxmodel.asp

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

- inline 行內元素
  - 預設為`display : inline`的標籤：`<a>`、`<span>`、`<input>`、`<img>`...
  - 高寬度為內容之大小，與相鄰元素同一行
  - 無法控制**上下padding**、**上下margin**、**width**、**height**
- block 區塊元素
  - 預設為`display : block`的標籤：`<h1>`、`<h2>`、`<div>`、`<p>`、`<form>`、`<table>`、`<ul>`、`<li>`...
  - 整行空間佔滿，因此會換行
- inline-block 同行排列，但擁有區塊的特性
  - 排列方式依照行內元素，同一行
  - 具有區塊元素特性，可以控制**上下padding**、**上下margin**、**width**、**height**

參考資料：[CSS : display屬性-區塊和行內元素差異](https://ithelp.ithome.com.tw/articles/10190772)、[block，inline和inline-block的概念与区别](https://www.jianshu.com/p/3b938f4a897c)

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- static 正常流向
  - 每個區塊元素都由上至下排列
  - 瀏覽器處理HTML的預設方式
- relative 相對定位
  - 相對於原本正常流向的位置移動
  - 偏移屬性：`top`或`bottom`、`left`或`right`
- absolute 絕對定位
  - 區塊從正常流向中抽離，不影響頁面上的其他元素
  - 偏移屬性：`top`或`bottom`、`left`或`right`
  - 上層若沒有「可以被定位」的元素，那麼就是相對於該網頁所有內容（`<body>`）最左上角的絕對位置
  - 隨著scroll bar滾動
- fixed 固定
  - 區塊從正常流向中抽離，不影響頁面上的其他元素
  - 絕對定位，不隨著scroll bar滾動

參考資料：HTML&CSS網站設計建置優化之道、[學習 CSS 版面配置 - 關於 position 屬性
](http://zh-tw.learnlayout.com/position.html)