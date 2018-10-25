## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
- gulp：工作流程自動化及強化，寫一個腳本將東西全部完成，scss compile 成 css、es6 compile 成 es5、壓縮 js 及 css...等。可以不用，只是比較麻煩，要自己一直下指令 compile。
- webpack：可以讓 js 做模組化開發，將 js bundle。如果不用，就無法模組化，當專案大時，不好維護。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
- 每次新增、修改、刪除，DOM 都重新產生，可能會有效能問題，因為連沒有更動的地方都重新產生。

## CSS Sprites 與 Data URI 的優缺點是什麼？
- CSS Sprites：將整個網頁會用到的圖片組合成一張大圖片，再用 css `background-position` 擺放到正確的位置。
  - 優點：節省伺服器的工作量，相對地降低成本。
  - 缺點：設計師需花比較多時間處理圖片。
- Data URI：一種檔案格式，將資料經過 base64 編碼轉為文字儲存。
  - 優點：可以將圖檔用文字的方式直接寫在 html 或 css 中，節省抓取圖檔的請求。
  - 缺點：瀏覽器會針對圖檔做快取，但如果轉成文字寫在 html 或 css 中，則無法針對檔案內的圖片文字做快取；更新圖檔時，必須重新編碼。

參考資料：[CSS Sprites - Wibibi](http://www.wibibi.com/info.php?tid=373)、[從 CSS sprite 進化到 SVG sprite - MUKI space*](http://muki.tw/tech/css-to-svg-sprite/)、[使用 DATA URI 將圖片以 Base64 編碼並內崁至網頁中，加速載入速度 - GTW](https://blog.gtwang.org/web-development/minimizing-http-request-using-data-uri/)