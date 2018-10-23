## CSS 預處理器是什麼？我們可以不用它嗎？
- CSS preprocessor：用程式化方式寫 css，且也較好維護。
- 也可以不用，但原生 CSS 後續的維護相較於 CSS preprocessor 困難，例如：修改主題色，CSS 必須一一找到並修改，但用 preprocessor 可以直接改個變數即可。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
- Cache-Control: max-age=60，代表 response 過期時間為 60 秒，如果使用者在收到 response 後，60 秒內重新整理，則會從 cache 中取資料，而不會發出 request；超過 60 秒後，則發出新的 request。
- Cache-Control: no-store，代表完全不使用 cache。
- Cache-Control: no-cache，發出 request 確認是否有新檔案，若有，則 response 新檔案；若無，則直接從 cache 取。

## Stack 跟 Queue 的差別是什麼？
- stack：先進後出 first in, last out，Event Loop 會先確認 stack 有沒有任務，若有則優先處理 stack，當 stack 中都沒有任務後，則會將 queue 的任務放進 stack 中。
- queue：先進先出 first in, first out

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
- 原本記憶 (沒有查詢，直接寫題目)：
  - !important (奧義) (1:0:0:0:0) > inline style (0:1:0:0:0) > id (0:0:1:0:0) > class、Pseudo-classes (0:0:0:1:0) > tag (0:0:0:0:1)
  - 若加總一樣時，則依順序後者顯示
- 詳細版本 (重新查詢後的補充)：
  - !important > inline style > id > class、Pseudo-classes、Attribute Selector(屬性選擇器) > tag、Pseudo-elements
  - 無法跨越等級，例如：11 個 class (0:11:0) 相比 1 個 id (1:0:0)，結果會顯示 id
  - Pseudo-classes：hover、active、nth-child()...
  - Attribute Selector：[href=""]、[type=""]、[class$=""]...
  - Pseudo-elements：before、after...

參考資料：[偽類別 - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)、[屬性選擇器 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)、[偽元素 - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)