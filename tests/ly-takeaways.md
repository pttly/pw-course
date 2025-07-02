# Push code từ Git lên GitHub (cho folder CHƯA có trên Git)
1. git init 
2. git add . OR git add file1 (thêm các file trong thư mục hiện tại vào staging)
3. git commit -m "Thông điệp commit" (commit version lên repo)
4. git remote add origin https://github.com/username/tên-repo.git
5. git push -u origin main
6. git push --set-upstream origin main (nếu gặp lỗi: fatal: The current branch main has no upstream branch.)

*4: Chỉ làm bước này một lần duy nhất khi kết nối repo Git local với GitHub.*

*5: Lần đầu tiên push*

# Push code từ Git lên GitHub (cho folder CÓ trên Git)
1. git add .
2. git commit -m "Thông điệp commit"
3. git push

Thêm 'git push --set-upstream origin main' trước 'git push'(nếu gặp lỗi: fatal: The current branch main has no upstream branch.)

# Error
### nothing to commit, working tree clean
Tất cả các file trong thư mục làm việc (working directory) đã được commit hết hoặc không có thay đổi gì mới.
==> cần chạy git add / git commit
### fatal: The current branch main has no upstream branch.        
Git đang cố push nhánh main, nhưng nó chưa biết đẩy lên đâu trên GitHub vì bạn chưa cấu hình "upstream" (tức là nhánh từ xa tương ứng).
==> git push --set-upstream origin main

# Icon for markdown
| Icon | Ý nghĩa              | Dùng cho             |
| ---- | -------------------- | -------------------- |
| 💡   | Gợi ý / Mẹo nhỏ      | `💡 **Mẹo:**`        |
| ⚠️   | Cảnh báo             | `⚠️ **Cảnh báo:**`   |
| ❗    | Quan trọng           | `❗ **Lưu ý:**`       |
| ℹ️   | Thông tin            | `ℹ️ **Thông tin:**`  |
| ✅    | Đã hoàn thành / Đúng | `✅ **Hoàn tất:**`    |
| ❌    | Sai hoặc thất bại    | `❌ **Lỗi:**`         |
| 🔒   | Bảo mật / Quyền hạn  | `🔒 **Bảo mật:**`    |
| 📌   | Ghim lại, điểm chính | `📌 **Điểm chính:**` |

## Lesson 4

code chạy từ trên xuống dưới
nếu gặp vòng lặp for > chạy xng vòng lặp for rồi mới chạy tiếp các dòng tiếp theo

for (let i = 0; i < 5; i++>)

hoisting: cơ chế mặc định của js để đưa giá trị của tất cả cấc biến lên đầu tiên
    nên dù khai báo trước dòng function vẫn xài được

var : hoisting
let : không hoisting
vd:

console.log(a)
var a = 1

console.log(b)
let b= 1

/*
if (condition) {
    // run code when condition = true
} else {
    // run code when condition = false
}
*/

/*
if (condition1) {
    // run code when condition1 = true
} else if (condition2) {
    // run code when condition2 = true
} else {
    // run code when all condition = false
}
*/

/*
 switch (bieu thuc) {
    case gia_tri_1:
        // run code
        break;
    
 }
*/

=== so sanh : gia tri + kieu du lieu
== chỉ so sánh giá trị
!= so sánh giá trị


for...in (thường dùng cho object)
- dùng để lặp các thuộc tính trong object 
- dùng để lặp các giá trị index trong array ( not data)

break để thoát ra khỏi vòng lặp for

forEach --> hay dùng cho array

for ... of --> dùng cho array

// continue
- bo qua vòng lap, chạy đến vòng lawpjj tiếp theo khi gặp continue
- neu gap continue thi bo qua doan code phai duoi và chay tơi vòng lap tiếp theo

// break
- khi gap break thi thoát ra khỏi vòng lặp

substring