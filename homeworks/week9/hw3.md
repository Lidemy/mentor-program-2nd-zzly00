## Event Loop
``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

### Ans
印出結果：13524
程式由上往下讀，依序如下：

開始
- Call Stack
  - console.log(1) -> 執行

下一輪
- Call Stack
  - setTimeout(() => {console.log(2)}, 0) -> 放到 Web Apis

下一輪
- Call Stack
  - console.log(3) -> 執行
- Web Apis
  - setTimeout(() => {console.log(2)}, 0)

下一輪
- Call Stack
  - setTimeout(() => {console.log(4)}, 0) -> 放到 Web Apis，0 秒後放到 Callback Queue
- Callback Queue
  - setTimeout(() => {console.log(2)}, 0)

下一輪
- Call Stack
  - console.log(5) -> 執行
- Callback Queue
  - setTimeout(() => {console.log(4)}, 0)
  - setTimeout(() => {console.log(2)}, 0) 先進先出

下一輪
- Call Stack
  - setTimeout(() => {console.log(2)}, 0) -> 取 function 內容
- Callback Queue
  - setTimeout(() => {console.log(4)}, 0)

下一輪
- Call Stack
  - console.log(2) -> 執行
  - setTimeout() 先進後出
- Callback Queue
  - setTimeout(() => {console.log(4)}, 0)

下一輪
- Call Stack
  setTimeout(() => {console.log(4)}, 0) -> 取 function 內容

下一輪
- Call Stack
  - console.log(4) -> 執行
  - setTimeout() 先進後出

結束