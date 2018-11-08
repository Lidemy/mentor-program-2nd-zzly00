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
  - setTimeout(() => {console.log(2)}, 0) -> 執行 setTimeout，將 cb 放到 Web Apis

下一輪
- Call Stack
  - console.log(3) -> 執行
- Web Apis
  - () => {console.log(2)}

下一輪
- Call Stack
  - setTimeout(() => {console.log(4)}, 0) -> 執行 setTimeout，將 cb 放到 Web Apis，0 秒後放到 Callback Queue
- Callback Queue
  - () => {console.log(2)}

下一輪
- Call Stack
  - console.log(5) -> 執行
- Callback Queue
  - () => {console.log(4)}
  - () => {console.log(2)} 先進先出

下一輪
- Call Stack
  - () => {console.log(2)} -> 取 function 內容
- Callback Queue
  - () => {console.log(4)}

下一輪
- Call Stack
  - console.log(2) -> 執行
  - () => {} 先進後出
- Callback Queue
  - () => {console.log(4)}

下一輪
- Call Stack
  - () => {} -> 執行
- Callback Queue
  - () => {console.log(4)}

下一輪
- Call Stack
  () => {console.log(4)} -> 取 function 內容

下一輪
- Call Stack
  - console.log(4) -> 執行
  - () => {} 先進後出

下一輪
- Call Stack
  - () => {} -> 執行

結束