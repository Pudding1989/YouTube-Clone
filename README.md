# 復刻 Youtube 版面

- HTML、CSS 採 OOCSS(Object-oriented programming)原則命名
- JavaScript 採小駝峰命名

| ＲＷＤ |
| :----- |
| 320px  |
| 588px  |
| 874px  |
| 1160px |

## 1.設定開發環境

1. 建議將 Node.js 切換至 v14.16.0，較新版本可能無法執行

   ```code
   nvm install 14.16.0
   ```

   ```code
   nvm use 14.16.0
   ```

2. 安裝 Vue CLI

   ```code
   npm install -g vue-cli
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
  App running at:
    - Local:   http://localhost:8080/
    - Network: http://192.168.0.1:8080/
  ```

## 3.開發工具

開發環境

- Node.js v14.16.0

前端框架

- Vue: 2.6.11
  - Vue CLI: 4.5.15
  - Vue Router: 3.2.0

前端套件

- Tailwind CSS: 2.2.17

- Sass
  - Node Sass: 4.12.0
  - Sass Loader: 8.0.2
