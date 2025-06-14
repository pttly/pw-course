# GIT:
## What?
- Use to manage version of source code
- Git is one of Version Control System (VCS)
## Git flow
- init > add > commit > push
- nếu có global thì thêm step 'config' trước 'add'
- config bao gồm câu lệnh:
- >> Config username: git config --global user.name “Phong”
- >> Config email: git config --global user.email “dominhphong306@gmail.com”
- >> Config branch default: git config --global init.defaultBranch main
## Three states
1. Working directory: chứa các file mới nhất, đang làm việc
2. Staging area: vùng ready to commit
3. Repository: các commit (phiên bản)
## Commandlines
**git init <thư mục gốc>**: 
- bắt đầu đẩy folder lên để git quản lý  
- chỉ git init 1 lần khi mới tạo folder, sau đó chỉ thêm, sửa xóa file

**git add <tên file>** 
- đẩy từng file từ working directory vào staging 
- git add . : đẩy tất cả file

**git commit -m “feat: add test 1”**
- đẩy file/phiên bản mới lên repo
- trong "" là message ghi chú tên commit

**git status**: xem trạng thái các file

**git log** : xem lịch sử commit

**git push** : đưa phiên bản mới lên gitHub
- Sau khi git commit > tạo ra phiên bản trên máy tính cá nhân > cần git push để đẩy lên gitHub

## Key takeaways
- Khởi tạo
- Cấu hình
- Thêm file vào vùng staging
- commit  

## Git convention 
![hình](https://th.bing.com/th/id/OIP.zjvAn2mk3sdI8o-VS58AaQHaDH?r=0&rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3)
- quy tắc commit: làm việc cùng nhau gọn gàng hơn
- Ví dụ
- >> “chore: remove unused file”
- >> “feat: add code for exercises 2”

# GITHUB:
## Git vs GitHub:
- Git : software, công cụ commandline, dùng ở máy local, đưa fiel vào git repository
- GitHub : web, có UI, upload git repository

# TIP:
## Mở VS code từ folder:
- Chuột phải > New terminal at folder > Type ‘code .’ > Enter



