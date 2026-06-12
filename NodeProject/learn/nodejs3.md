# Giới thiệu về npm Package Manager

## npm là gì?

**npm (Node Package Manager)** là trình quản lý package mặc định của Node.js.

Nó giúp lập trình viên:

- Cài đặt thư viện (Library)
- Quản lý dependencies
- Cập nhật package
- Quản lý phiên bản
- Chạy các tác vụ tự động (Scripts)

npm được xem là một trong những hệ sinh thái mã nguồn mở lớn nhất thế giới.

Theo thống kê, npm Registry hiện chứa hàng triệu package, giúp lập trình viên có thể tìm thấy giải pháp cho hầu hết mọi vấn đề mà không cần viết lại từ đầu.

---

# Tại sao cần npm?

Trong thực tế, chúng ta không tự viết mọi thứ.

Ví dụ:

- Tạo Web Server → Express.js
- Kết nối MongoDB → Mongoose
- Mã hóa mật khẩu → bcrypt
- Xử lý JWT → jsonwebtoken
- Test ứng dụng → Jest

Thay vì tự xây dựng các chức năng này, chúng ta cài đặt chúng thông qua npm.

Ví dụ:

```bash
npm install express
```

npm sẽ tự động:

1. Tải package từ npm Registry.
2. Lưu package vào thư mục `node_modules`.
3. Ghi thông tin package vào `package.json`.

---

# npm Registry là gì?

npm Registry là kho lưu trữ chứa tất cả các package npm.

Có thể hiểu đơn giản:

```text
GitHub = Nơi lưu Source Code

npm Registry = Nơi lưu Package Node.js
```

Khi chạy:

```bash
npm install express
```

npm sẽ:

```text
Máy tính của bạn
        ↓
npm Registry
        ↓
Tải package express
        ↓
node_modules
```

---

# Package là gì?

Package là một đơn vị mã nguồn có thể tái sử dụng.

Ví dụ:

```text
express
mongoose
axios
bcrypt
dotenv
```

Mỗi package thường chứa:

- Source code
- Tài liệu hướng dẫn
- Phiên bản (Version)
- Dependencies riêng

---

# Dependency là gì?

Dependency là các thư viện mà dự án cần để hoạt động.

Ví dụ:

```javascript
const express = require("express");
```

Dự án phụ thuộc vào package `express`.

Nếu package đó không tồn tại:

```text
Error: Cannot find module 'express'
```

---

# package.json là gì?

`package.json` là file quan trọng nhất của một dự án Node.js.

Ví dụ:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

Nó chứa:

- Tên dự án
- Phiên bản dự án
- Scripts
- Dependencies
- Thông tin tác giả

---

# Cài đặt tất cả Dependencies

Nếu dự án đã có file:

```text
package.json
```

chỉ cần chạy:

```bash
npm install
```

npm sẽ:

1. Đọc package.json
2. Tải tất cả dependencies
3. Tạo thư mục node_modules

Ví dụ:

```bash
npm install
```

---

# Cài đặt một Package

Cú pháp:

```bash
npm install <package-name>
```

Ví dụ:

```bash
npm install express
```

Hoặc:

```bash
npm install mongoose
```

Sau khi cài:

```json
{
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

sẽ được thêm vào `package.json`.

---

# Thư mục node_modules

Sau khi cài package:

```bash
npm install express
```

npm tạo:

```text
project/
│
├── node_modules/
├── package.json
└── package-lock.json
```

`node_modules` chứa:

- express
- dependencies của express
- dependencies của dependencies

Thư mục này thường rất lớn.

Vì vậy không nên đưa lên GitHub.

Trong `.gitignore`:

```gitignore
node_modules/
```

---

# Các Flag Thường Dùng Khi Cài Package

## --save-dev

Cài package phục vụ cho quá trình phát triển.

```bash
npm install jest --save-dev
```

Hoặc:

```bash
npm install jest -D
```

Kết quả:

```json
{
  "devDependencies": {
    "jest": "^30.0.0"
  }
}
```

---

## --no-save

Cài package nhưng không ghi vào package.json.

```bash
npm install express --no-save
```

---

## --save-optional

Thêm package vào optionalDependencies.

```bash
npm install some-package --save-optional
```

---

## Các cách viết tắt

| Dài             | Ngắn |
| --------------- | ---- |
| --save          | -S   |
| --save-dev      | -D   |
| --save-optional | -O   |

---

# dependencies và devDependencies

## dependencies

Các package cần thiết khi ứng dụng chạy thực tế.

Ví dụ:

```json
{
  "dependencies": {
    "express": "^5.0.0",
    "mongoose": "^8.0.0"
  }
}
```

Bao gồm:

- Express
- Mongoose
- Axios
- bcrypt

---

## devDependencies

Các package hỗ trợ phát triển.

Ví dụ:

```json
{
  "devDependencies": {
    "jest": "^30.0.0",
    "nodemon": "^3.0.0"
  }
}
```

Bao gồm:

- Jest
- ESLint
- Nodemon
- Prettier

---

## So sánh

| dependencies    | devDependencies         |
| --------------- | ----------------------- |
| Chạy Production | Chỉ dùng khi phát triển |
| Express         | Jest                    |
| Mongoose        | ESLint                  |
| Axios           | Prettier                |
| bcrypt          | Nodemon                 |

---

# Cập nhật Package

## Cập nhật toàn bộ

```bash
npm update
```

npm sẽ tìm phiên bản mới phù hợp với điều kiện version trong package.json.

---

## Cập nhật một Package

```bash
npm update express
```

---

# Quản lý phiên bản (Versioning)

npm sử dụng chuẩn:

**Semantic Versioning (SemVer)**

Cấu trúc:

```text
MAJOR.MINOR.PATCH
```

Ví dụ:

```text
2.5.8
```

Trong đó:

```text
2 = MAJOR
5 = MINOR
8 = PATCH
```

---

## PATCH

```text
1.0.0 → 1.0.1
```

Sửa lỗi nhỏ.

---

## MINOR

```text
1.0.0 → 1.1.0
```

Thêm tính năng mới nhưng vẫn tương thích.

---

## MAJOR

```text
1.0.0 → 2.0.0
```

Có thay đổi lớn và có thể phá vỡ code cũ.

---

# Cài đặt phiên bản cụ thể

Ví dụ:

```bash
npm install express@4.18.2
```

Kết quả:

```json
{
  "dependencies": {
    "express": "4.18.2"
  }
}
```

---

# package-lock.json là gì?

Sau khi cài package:

```bash
npm install express
```

npm tạo file:

```text
package-lock.json
```

Nhiệm vụ:

- Khóa phiên bản package.
- Đảm bảo mọi thành viên trong nhóm sử dụng cùng phiên bản.

Ví dụ:

```text
Bạn: express 5.0.0
Đồng đội: express 5.0.0
Server: express 5.0.0
```

Giúp tránh lỗi do khác phiên bản.

---

# npm Scripts

Ngoài quản lý package, npm còn giúp chạy các lệnh tự động.

Trong package.json:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

Chạy:

```bash
npm run start
```

npm sẽ thực thi:

```bash
node server.js
```

---

# Ví dụ npm Scripts

```json
{
  "scripts": {
    "dev": "node server.js",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

---

## Chạy Development Server

```bash
npm run dev
```

---

## Chạy Test

```bash
npm run test
```

---

## Chạy ESLint

```bash
npm run lint
```

---

# Tại sao npm Scripts quan trọng?

Không cần nhớ những lệnh dài:

Thay vì:

```bash
webpack --watch --progress --colors --config webpack.config.js
```

chỉ cần:

```bash
npm run watch
```

Điều này giúp:

- Dễ nhớ
- Đồng nhất trong nhóm
- Tự động hóa quy trình làm việc

---

# Các lệnh npm quan trọng cần nhớ

| Lệnh                  | Chức năng                |
| --------------------- | ------------------------ |
| npm init              | Tạo package.json         |
| npm install           | Cài toàn bộ dependencies |
| npm install express   | Cài package              |
| npm install -D jest   | Cài devDependency        |
| npm update            | Cập nhật package         |
| npm uninstall express | Gỡ package               |
| npm run dev           | Chạy script              |
| npm list              | Xem package đã cài       |
| npm -v                | Xem phiên bản npm        |

---

# Tổng kết

npm là trình quản lý package chính thức của Node.js, giúp lập trình viên cài đặt, cập nhật và quản lý các thư viện một cách dễ dàng.

Những điều cần nhớ:

- npm là Package Manager của Node.js.
- Package được tải từ npm Registry.
- package.json quản lý thông tin dự án.
- node_modules chứa các package đã cài đặt.
- dependencies dùng cho Production.
- devDependencies dùng cho Development.
- npm sử dụng Semantic Versioning (SemVer).
- npm Scripts giúp tự động hóa các tác vụ thường xuyên.
- npm là công cụ bắt buộc phải thành thạo khi làm việc với Node.js.
