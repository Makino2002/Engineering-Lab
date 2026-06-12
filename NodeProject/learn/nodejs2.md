# Sự khác biệt giữa Node.js và Trình duyệt (Browser)

## Tổng quan

Cả Node.js và trình duyệt đều sử dụng cùng một ngôn ngữ lập trình là **JavaScript**. Tuy nhiên, môi trường hoạt động của chúng hoàn toàn khác nhau.

- **Browser (Trình duyệt)** được thiết kế để xây dựng giao diện người dùng và tương tác với các trang web.
- **Node.js** được thiết kế để xây dựng các ứng dụng phía máy chủ (Backend), công cụ dòng lệnh, tự động hóa và nhiều loại ứng dụng khác.

Mặc dù cùng sử dụng JavaScript, nhưng các API, môi trường thực thi và hệ sinh thái của chúng có nhiều điểm khác biệt quan trọng.

---

# Lợi thế lớn của Node.js đối với Frontend Developer

Trước đây:

| Frontend   | Backend |
| ---------- | ------- |
| JavaScript | Java    |
| JavaScript | PHP     |
| JavaScript | C#      |
| JavaScript | Python  |

Một lập trình viên web thường phải học thêm một ngôn ngữ khác để xây dựng Backend.

Với Node.js:

| Frontend   | Backend    |
| ---------- | ---------- |
| JavaScript | JavaScript |

Bạn chỉ cần thành thạo JavaScript để phát triển cả:

- Client-side (Frontend)
- Server-side (Backend)

Điều này giúp:

- Giảm thời gian học tập
- Tái sử dụng kiến thức
- Chia sẻ code dễ dàng giữa Frontend và Backend

---

# Sự khác biệt về môi trường thực thi

## Browser Environment

Trong trình duyệt, JavaScript được cung cấp nhiều API liên quan đến giao diện web.

Ví dụ:

```javascript
document.getElementById("title");

window.alert("Hello");

localStorage.setItem("name", "John");
```

Các đối tượng quen thuộc:

- `window`
- `document`
- `navigator`
- `localStorage`
- `sessionStorage`
- `history`
- `location`

Đây đều là các API do trình duyệt cung cấp.

---

## Node.js Environment

Trong Node.js, các đối tượng trên không tồn tại.

Ví dụ:

```javascript
console.log(document);
```

Kết quả:

```text
ReferenceError: document is not defined
```

Tương tự:

```javascript
console.log(window);
```

Kết quả:

```text
ReferenceError: window is not defined
```

Lý do là Node.js không có giao diện đồ họa hay trang web để thao tác.

---

# DOM không tồn tại trong Node.js

## DOM là gì?

DOM (Document Object Model) là cấu trúc đại diện cho trang HTML trong trình duyệt.

Ví dụ:

```html
<h1>Hello</h1>
```

JavaScript có thể thay đổi nội dung:

```javascript
document.querySelector("h1").textContent = "Welcome";
```

Điều này chỉ hoạt động trong trình duyệt.

---

## Trong Node.js

Node.js không có:

- HTML
- CSS
- DOM

Do đó không thể sử dụng:

```javascript
document.querySelector();
document.getElementById();
document.createElement();
```

---

# Node.js có những API mà Browser không có

Ngược lại, Node.js cung cấp nhiều API mà trình duyệt không thể truy cập vì lý do bảo mật.

Ví dụ:

## Đọc file

```javascript
const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
```

Trong trình duyệt:

```javascript
fs.readFileSync();
```

sẽ không tồn tại.

---

## Làm việc với hệ điều hành

```javascript
const os = require("os");

console.log(os.platform());
```

---

## Làm việc với đường dẫn

```javascript
const path = require("path");

console.log(path.join("users", "admin"));
```

---

## Tạo Web Server

```javascript
const http = require("http");
```

Browser không thể tự tạo HTTP Server.

---

# So sánh các API phổ biến

| Browser          | Node.js |
| ---------------- | ------- |
| document         | ❌      |
| window           | ❌      |
| localStorage     | ❌      |
| Cookies          | ❌      |
| DOM API          | ❌      |
| File System (fs) | ✅      |
| HTTP Server      | ✅      |
| OS Module        | ✅      |
| Path Module      | ✅      |
| Process Object   | ✅      |

---

# Kiểm soát môi trường chạy

## Browser

Khi phát triển website, bạn không biết người dùng sẽ sử dụng:

- Chrome
- Firefox
- Edge
- Safari

Mỗi trình duyệt có thể hỗ trợ JavaScript khác nhau.

Do đó lập trình viên thường phải:

- Kiểm tra khả năng tương thích
- Viết code hỗ trợ nhiều trình duyệt
- Sử dụng Babel

---

## Node.js

Trong Node.js, bạn kiểm soát hoàn toàn phiên bản đang chạy.

Ví dụ:

```bash
node -v
```

Kết quả:

```text
v22.0.0
```

Nếu server sử dụng Node.js 22 thì mọi người chạy ứng dụng đều dùng cùng phiên bản đó.

Điều này giúp việc phát triển đơn giản hơn rất nhiều.

---

# Hỗ trợ JavaScript hiện đại

## Browser

Không phải trình duyệt nào cũng hỗ trợ các tính năng JavaScript mới ngay lập tức.

Ví dụ:

```javascript
obj?.name;
```

hoặc

```javascript
array.at(-1);
```

có thể không hoạt động trên các trình duyệt cũ.

Vì vậy nhiều dự án web sử dụng Babel để chuyển mã nguồn hiện đại thành JavaScript cũ hơn.

---

## Node.js

Node.js cập nhật rất nhanh các chuẩn ECMAScript.

Bạn có thể sử dụng:

```javascript
const user = {
  profile: {
    name: "John",
  },
};

console.log(user?.profile?.name);
```

mà không cần Babel nếu phiên bản Node.js đã hỗ trợ.

---

# Hệ thống Module

Một khác biệt quan trọng khác là cách quản lý module.

---

## CommonJS (CJS)

Đây là hệ thống module truyền thống của Node.js.

Import:

```javascript
const fs = require("fs");
```

Export:

```javascript
module.exports = myFunction;
```

---

## ES Modules (ESM)

Đây là chuẩn module chính thức của JavaScript.

Import:

```javascript
import fs from "fs";
```

Export:

```javascript
export default myFunction;
```

---

# Browser và ES Modules

Trong trình duyệt hiện đại:

```javascript
import { add } from "./math.js";
```

được hỗ trợ trực tiếp.

Tuy nhiên:

```javascript
require("fs");
```

không hoạt động.

---

# Node.js hỗ trợ cả hai hệ thống

Từ Node.js v12 trở lên, Node.js hỗ trợ:

### CommonJS

```javascript
const express = require("express");
```

### ES Modules

```javascript
import express from "express";
```

Điều này giúp Node.js linh hoạt hơn trong việc sử dụng thư viện và mã nguồn.

---

# So sánh nhanh

| Đặc điểm                       | Browser | Node.js |
| ------------------------------ | ------- | ------- |
| Chạy JavaScript                | ✅      | ✅      |
| Có DOM                         | ✅      | ❌      |
| Có window                      | ✅      | ❌      |
| Có document                    | ✅      | ❌      |
| Có localStorage                | ✅      | ❌      |
| Có File System                 | ❌      | ✅      |
| Có HTTP Server                 | ❌      | ✅      |
| Hỗ trợ CommonJS                | ❌      | ✅      |
| Hỗ trợ ES Modules              | ✅      | ✅      |
| Kiểm soát phiên bản môi trường | ❌      | ✅      |

---

# Kết luận

Mặc dù Browser và Node.js đều sử dụng JavaScript, nhưng chúng phục vụ các mục đích hoàn toàn khác nhau.

**Browser** tập trung vào giao diện người dùng và các API web như DOM, Cookies và Local Storage.

**Node.js** tập trung vào phát triển phía máy chủ, cung cấp các API mạnh mẽ như File System, HTTP, OS và Process.

Việc hiểu rõ sự khác biệt giữa hai môi trường này là bước đầu tiên để trở thành một Fullstack JavaScript Developer, nơi bạn có thể sử dụng cùng một ngôn ngữ để xây dựng cả Frontend và Backend.
