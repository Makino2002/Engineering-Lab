# IV — Encapsulation (Đóng gói)

## Mục tiêu

- Hiểu khái niệm đóng gói trong lập trình hướng đối tượng.
- Nhận biết các cách thực hiện đóng gói và lợi ích của nó.
- Biết áp dụng đóng gói khi thiết kế lớp và API (không cần ví dụ mã).

## Khái niệm chính

Đóng gói (encapsulation) là nguyên tắc gom dữ liệu (thuộc tính) và hành vi (phương thức) liên quan vào cùng một thực thể (lớp), đồng thời ẩn chi tiết triển khai ra khỏi bên ngoài. Mục tiêu là kiểm soát truy cập và bảo vệ tính toàn vẹn của trạng thái nội bộ.

## Nguyên tắc và kỹ thuật

- Ẩn dữ liệu (information hiding): chỉ xuất lộ những thành phần cần thiết qua giao diện công khai.
- Kiểm soát truy cập: phân chia quyền truy cập thành công khai, bảo vệ, và riêng tư để ngăn truy cập trái phép.
- Sử dụng phương thức truy cập (getter/setter) hoặc API rõ ràng để quản lý thay đổi trạng thái.

## Lợi ích

- Bảo vệ trạng thái: tránh thay đổi trực tiếp làm hỏng invariants (điều kiện đúng của đối tượng).
- Giảm phụ thuộc giữa các thành phần: thay đổi nội bộ không ảnh hưởng tới mã bên ngoài nếu giao diện giữ nguyên.
- Tăng tính dễ bảo trì: sửa lỗi hoặc tối ưu bên trong lớp mà không phá vỡ hợp đồng với người dùng.

## Ứng dụng trong thiết kế phần mềm (mô tả)

- Trong một lớp `Account`, chỉ cung cấp phương thức nạp/rút có kiểm tra điều kiện, thay vì cho phép thay đổi trực tiếp số dư từ bên ngoài.
- Trong thư viện, giữ cấu trúc dữ liệu nội bộ private, chỉ xuất các hàm hoặc phương thức an toàn để thao tác, giúp tránh việc người dùng phụ thuộc vào chi tiết triển khai.

## Lưu ý khi dùng

- Không đặt tất cả thành viên là private một cách máy móc; cần cân nhắc mức độ cần thiết của API công khai.
- Định nghĩa invariants rõ ràng và đảm bảo mọi phương thức công khai giữ invariants đó.
- Tránh lạm dụng getter/setter phẳng lẫn nhau; nếu setter làm lộ chi tiết nội bộ, cân nhắc phương thức có tên rõ ràng và có ý nghĩa hành vi.

## Bài tập tự ôn

- Mô tả một lớp trong hệ thống bạn đang làm (hoặc tưởng tượng) và liệt kê invariants cần bảo vệ; xác định API công khai cần thiết.
- Phân tích một thành phần hiện có và đề xuất cách đóng gói tốt hơn để giảm rủi ro thay đổi trạng thái trái phép.

---
