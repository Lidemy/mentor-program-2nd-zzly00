## 為什麼我們需要 React？可以不用嗎？
- 當專案大時，程式維護上較困難，且直接操作 DOM，可能會有些效能上的問題，所以才需要 React。
- 可以不用 React，用 vanilla js、html、css 也可以寫得出來。

## React 的思考模式跟以前的思考模式有什麼不一樣？
- 把介面看成一個一個的 component，介面由 component 組成。
- 只要 state 改動，就會 re-render，但是是修改 Virtual DOM，再由 React 底層修改真實 DOM。

## state 跟 props 的差別在哪裡？
- state：component 自己的狀態，可以用 `setState` 修改
- props：繼承來的東西，不能修改

## 請列出 React 的 lifecycle 以及其代表的意義
- Mounting 放到 DOM 上，掛載階段
  - Constructor 建構子
  - getDerivedStateFromProps 從建構子中取得 props 及 state
  - render 繪製
  - component­Did­Mount 已經載入
- Updating 更新階段，分為三種 New props、set­State()、forceUpdate() 強制更新
  - getDerivedStateFromProps 從建構子中取得 props 及 state
  - shouldComponentUpdate 是否需要更新 Component，**forceUpdate() 沒有此階段**
  - render 繪製
  - getSnapshotBeforeUpdate 取得 DOM 更新前的資料，例如：滾動位置
  - componentDidUpdate 已經更新
- Unmounting 從 DOM 上拿下來，結束掛載階段
  - componentWillUnmount 即將被拿下來時

參考資料：[lifecycle diagram - React](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

