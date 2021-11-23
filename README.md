# User Checker

實作簡易登入介面流程，功能持續新增中。

網站建構使用 Node.js + Express + Express-handlebars + Boostrap + Font-awesome

## 頁面呈現

<p float="left"><img src="https://github.com/z88243310/user-checker/blob/main/public/img/login-page.png" width="49%">
<img src="https://github.com/z88243310/user-checker/blob/main/public/img/loading.png" width="49%">
<img src="https://github.com/z88243310/user-checker/blob/main/public/img/login-gif.gif" width="98.5%"></p>

## 功能描述

- 帳號密碼檢查
- 登入前導頁面

## 環境建置需求

- [Node.js](https://nodejs.org/en/)
- Terminal | CMD | [Git Bash](https://gitforwindows.org/)
<!-- - MongoDB 管理工具 ( [Robo 3T](https://robomongo.org/) ) -->

## 安裝與執行步驟

1.打開終端機 cd 到指定路徑 ( 以 windows 桌面 為例 )

```text
cd C:\Users\'使用者名稱'\Desktop
```

2.下載 user-checker 專案到本地電腦上

```text
git clone https://github.com/z88243310/user-checker.git
```

3.進入 user-checker 路徑

```text
cd user-checker
```

4.在 user-checker 路徑中，依照 package-lock.json 安裝 Express、Express-handlebars 與其他必要套件

```text
npm install
```

<!-- 5.製造種子資料 ( `須先確定 MongoDB 已啟動` )

```text
npm run seed
``` -->

5.執行專案 ( 伺服器啟動後會顯示 `App is running on http://localhost:3000` )

```text
npm run start
```

6.開啟瀏覽器輸入網址 <http://localhost:3000>

## 開發工具版本

- Node.js 14.16.0
- Express 4.17.1
- Express-handlebars 5.3.4
- Boostrap 4.4.1 ( 搭配 popper 1.16.0 + jquery 3.4.1 )
- Font-awesome 5.13.0
- Robo 3T 1.4
<!-- - Mongoose 6.0.13 -->

更新時間 : 2021.11.23
