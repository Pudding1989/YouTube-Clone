# 復刻 Youtube 版面

![Vite](https://badges.aleen42.com/src/vitejs.svg)

分別參考 [Youtube行動版網站](https://m.youtube.com/)、[Youtube桌面版網站](https://www.youtube.com/)頁面排版，以頁面寬度 588px 為 Breakpoint 進行切版

| ＲＷＤ Breakpoints |
| :----------------: |
|       320px        |
|       588px        |
|       874px        |
|       1160px       |

## 1.設定開發環境

1. 建議將 Node.js 切換至 v14.16.0，較新版本可能無法執行

   ```code
   nvm install 14.16.0
   ```

   ```code
   nvm use 14.16.0
   ```

## 2.啟動專案

1. 安裝專案原始碼安裝至指定位置，你可以採取下列其中一種方法
      1. 點選右上方綠色『Code』按鈕，選擇『Download ZIP』下載ZIP檔，並解壓縮至指定資料夾中

      2. 開啟『終端機 Terminal.app』  
       輸入指令，移動到指定資料夾位置  

      ```code
      cd 「後端專案資料夾路徑」 (資料夾名稱間的空格要用「 / 」隔開)
      ```

      輸入指令將後端專案 clone至指定資料夾

      ```code
      git clone https://github.com/Pudding1989/YouTube-Clone.git
      ```

2. 安裝專案使用的套件

   ```code
    npm install
    ```

3. 輸入執行指令，啟動專案

```text
  npm run serve
```

- 當終端機顯示下列訊息，表示已成功開啟應用程式伺服器

  ```text
  vite dev server running at:
    - Local:   http://localhost:3000/
    - Network: http://192.168.0.1:3000/
  ```

## 3.開發工具

開發環境

- Node.js v14.16.0

- Vite: 2.9.9

前端框架

- Vue: 3.2.25
  - Vue Router: 4.0.16

前端套件

- Pug: 3.0.2

- Tailwind CSS: 3.1.4

- Sass: 1.53
