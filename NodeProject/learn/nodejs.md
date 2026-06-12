# Giới thiệu về Node.js

## Node.js là gì?

Node.js là một môi trường chạy (runtime environment) dành cho JavaScript, mã nguồn mở (Open Source) và đa nền tảng (Cross-platform). Nó cho phép lập trình viên chạy mã JavaScript bên ngoài trình duyệt web, từ đó có thể xây dựng các ứng dụng phía máy chủ (Server-side) bằng JavaScript.

Ngày nay, Node.js được sử dụng rộng rãi để phát triển:

- Web Server
- REST API
- Ứng dụng thời gian thực (Real-time Applications)
- Công cụ dòng lệnh (CLI Tools)
- Tác vụ tự động hóa (Automation Scripts)
- Microservices
- IoT Applications

---

# Node.js hoạt động như thế nào?

Node.js được xây dựng trên **V8 JavaScript Engine** – bộ máy JavaScript của trình duyệt Google Chrome.

Thông thường JavaScript chỉ chạy bên trong trình duyệt. Tuy nhiên, Node.js mang V8 ra khỏi trình duyệt, cho phép JavaScript chạy trực tiếp trên hệ điều hành.

Một trong những đặc điểm nổi bật nhất của Node.js là:

- Event-Driven (Hướng sự kiện)
- Non-Blocking I/O (Không chặn luồng xử lý)

---

## Mô hình Blocking (Chặn)

Trong nhiều hệ thống truyền thống, khi ứng dụng cần:

- Đọc file
- Truy vấn cơ sở dữ liệu
- Gửi yêu cầu mạng

chương trình sẽ phải dừng lại và chờ kết quả trả về trước khi thực hiện công việc tiếp theo.

Ví dụ:

```javascript
const data = readFile("data.txt"); // Chờ đọc xong
console.log(data);
```

Trong thời gian chờ, CPU gần như không làm gì cả, gây lãng phí tài nguyên.

---

## Mô hình Non-Blocking của Node.js

Node.js xử lý theo cách khác:

1. Gửi yêu cầu đọc dữ liệu.
2. Tiếp tục thực hiện các công việc khác.
3. Khi dữ liệu sẵn sàng, Node.js sẽ gọi callback hoặc Promise để xử lý kết quả.

Ví dụ:

```javascript
readFile("data.txt", (err, data) => {
  console.log(data);
});

console.log("Đang thực hiện công việc khác...");
```

Kết quả:

```text
Đang thực hiện công việc khác...
(Nội dung file xuất hiện sau)
```

Điều này giúp Node.js xử lý hàng nghìn kết nối đồng thời mà không cần tạo hàng nghìn luồng (Thread).

---

# Tại sao Node.js lại nhanh?

## 1. Sử dụng V8 Engine

V8 không thông dịch JavaScript từng dòng mà biên dịch trực tiếp thành mã máy (Machine Code).

Điều này giúp JavaScript chạy nhanh hơn rất nhiều.

---

## 2. Single Thread

Node.js hoạt động chủ yếu trên một luồng chính (Main Thread).

Thay vì tạo một Thread cho mỗi Request như nhiều công nghệ khác, Node.js sử dụng:

- Event Loop
- Callback Queue
- Asynchronous Operations

để xử lý nhiều yêu cầu cùng lúc.

---

## 3. Non-Blocking I/O

Khi có thao tác:

- Đọc file
- Gọi API
- Truy vấn Database

Node.js không đứng chờ mà tiếp tục xử lý các yêu cầu khác.

Nhờ đó hiệu năng được cải thiện đáng kể.

---

# Ưu điểm của Node.js

## 1. Hiệu năng cao

Nhờ V8 Engine và cơ chế bất đồng bộ (Asynchronous).

---

## 2. Dễ học với Frontend Developer

Nếu đã biết JavaScript ở phía Frontend thì có thể sử dụng chính ngôn ngữ đó để viết Backend.

Không cần học thêm:

- Java
- C#
- PHP
- Python

để xây dựng API hoặc Server.

---

## 3. Hệ sinh thái khổng lồ

Node.js sở hữu npm (Node Package Manager) với hàng triệu thư viện.

Ví dụ:

- Express.js
- Socket.IO
- Mongoose
- Axios
- Nodemon

---

## 4. Đa nền tảng

Node.js chạy được trên:

- Windows
- Linux
- macOS

---

## 5. Hỗ trợ JavaScript hiện đại

Node.js thường cập nhật rất nhanh các chuẩn ECMAScript mới.

Lập trình viên có thể sử dụng:

- let
- const
- Arrow Function
- Async/Await
- Optional Chaining
- ES Modules

mà không cần chờ trình duyệt hỗ trợ.

---

# Ví dụ ứng dụng Node.js đầu tiên

Ví dụ phổ biến nhất là tạo một Web Server đơn giản.

```javascript
const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---

# Phân tích từng phần của chương trình

## Import module HTTP

```javascript
const { createServer } = require("node:http");
```

Node.js cung cấp sẵn module `http` để xây dựng Web Server.

Dòng lệnh trên lấy hàm `createServer()` từ module `http`.

---

## Khai báo địa chỉ và cổng

```javascript
const hostname = "127.0.0.1";
const port = 3000;
```

- `hostname`: địa chỉ máy chủ.
- `port`: cổng mà server sẽ lắng nghe.

Server sẽ chạy tại:

```text
http://127.0.0.1:3000
```

---

## Tạo Server

```javascript
const server = createServer((req, res) => {});
```

Mỗi khi có người dùng gửi Request đến server, hàm callback sẽ được gọi.

Callback nhận hai đối tượng:

### req (Request)

Chứa thông tin yêu cầu từ client:

```javascript
console.log(req.url);
console.log(req.method);
```

Ví dụ:

```text
/
GET
```

---

### res (Response)

Dùng để trả dữ liệu về cho client.

Ví dụ:

```javascript
res.end("Hello World");
```

---

## Thiết lập mã trạng thái HTTP

```javascript
res.statusCode = 200;
```

Mã trạng thái 200 có nghĩa là:

```text
Yêu cầu thành công
```

Một số mã phổ biến:

| Mã  | Ý nghĩa               |
| --- | --------------------- |
| 200 | OK                    |
| 201 | Created               |
| 400 | Bad Request           |
| 404 | Not Found             |
| 500 | Internal Server Error |

---

## Thiết lập Header

```javascript
res.setHeader("Content-Type", "text/plain");
```

Header giúp trình duyệt hiểu kiểu dữ liệu nhận được.

Ở đây:

```text
Content-Type: text/plain
```

nghĩa là dữ liệu trả về là văn bản thuần túy.

Một số Content-Type phổ biến:

```text
text/html
application/json
image/png
```

---

## Trả dữ liệu về Client

```javascript
res.end("Hello World");
```

Hàm `end()`:

- Gửi dữ liệu về trình duyệt.
- Kết thúc Response.

Người dùng sẽ nhìn thấy:

```text
Hello World
```

---

## Khởi động Server

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

`listen()` bắt đầu cho phép server nhận Request.

Khi server khởi động thành công sẽ in ra:

```text
Server running at http://127.0.0.1:3000/
```

---

# Chạy chương trình

## Bước 1: Tạo file

Tạo file:

```text
server.js
```

---

## Bước 2: Dán mã nguồn

Sao chép đoạn mã ví dụ vào file.

---

## Bước 3: Mở Terminal

Di chuyển đến thư mục chứa file:

```bash
cd project-folder
```

---

## Bước 4: Chạy Node.js

```bash
node server.js
```

---

## Bước 5: Mở trình duyệt

Truy cập:

```text
http://127.0.0.1:3000
```

Kết quả:

```text
Hello World
```

---

# Các ứng dụng phổ biến của Node.js

Node.js thường được sử dụng để xây dựng:

- REST API
- GraphQL API
- Chat Application
- Realtime Application
- Streaming Service
- Microservices
- CLI Tool
- Automation Script
- IoT System

---

# Tổng kết

Node.js là môi trường chạy JavaScript phía máy chủ được xây dựng trên V8 Engine của Google Chrome. Nhờ cơ chế Event Loop và Non-Blocking I/O, Node.js có thể xử lý số lượng lớn kết nối đồng thời với hiệu năng cao.

### Những điểm cần nhớ

- Node.js cho phép chạy JavaScript ngoài trình duyệt.
- Sử dụng V8 Engine để tăng hiệu năng.
- Hoạt động theo mô hình Event-Driven.
- Hỗ trợ Non-Blocking I/O.
- Xử lý hàng nghìn kết nối đồng thời.
- Dùng chung JavaScript cho cả Frontend và Backend.
- Có hệ sinh thái npm rất lớn.
- Thích hợp để xây dựng API, Web Server và ứng dụng thời gian thực.
