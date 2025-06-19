# GIT
## UNDO THINGS
**CHANGE COMMIT MESSAGE:**

**git commit --amend**
- cmd dùng để thay đổi commit message
⚠️ dành cho commit message gần nhất
- git commit --amend > tiếp tục nhấn i : vào màn hình insert 
- di chuyển bằng các phím mũi tên, chỉnh sửa thông tin cần
- gõ Esc : thoát khỏi màn hình Insert
- tiếp tục gõ ':wq' : write and quit, lưu thay đổi và thoát khỏi màn hình insert

(**git log** : xem lịch sử commit, nhấn 'q' để thoát khỏi màn hình git log)

**git commit --amend -m "message"** : shortcut way, chỉnh sửa commit message không cần vào màn hình Insert

**MOVE FILES FROM STAGING TO WORKING DIR:**

- **git restore --staged tests\lesson-3**
  - dùng để đưa các thay đổi từ vùng staging về lại worrking dir

**MOVE FILES FROM REPOSITORY TO WORKING DIR:**

**git reset HEAD~1** (undo 1 commit)
- dùng để đưa các thay đổi từ vùng repository về lại worrking dir
- thay đổi HEAD~1 tùy vào số lượng commit mình muốn quay về. Vd: 2 commit là HEAD~2
- bản chất của undo commit là xóa và quay về phiên bản cũ mong muốn. Sau khi undo commit, nếu tiếp tục git add OR git commit thì GIT sẽ thực hiện so sánh để add/commit lại đối với các thay đổi khác nhau giữa các vùng
  - Vd: 
    - Working dir : file2, file3, file4
    - Repository : file2, file3, file4
      - git reset HEAD~2
        - Working dir : file2, file3, file4
        - Repository :  file2
      - git add file3 file4
        - Working dir : file2, file3, file4
        - Staging : file3, file4
        - Repository :  file2
      - git commit -m "Chore: readd file3 file4"
        - Working dir : file2, file3, file4
        - Repository :  file2
      - nếu dùng HEAD~3 : lỗi, hiện có 3 phiên bản thì tối đa HEAD~2

- cần đếm chính xác sô lượng commit muốn quay về. không có lệnh undo all,...

## BRANCHING MODEL:
Nếu cả team dùng chung 1 nhánh, xảy ra tình huống dev A đẩy code chỉnh sửa phần của mình lên nhánh main mà vẫn chứa lỗi của dev B, hoặc bị xung đột code lẫn nhau. Nên cần dùng branching

(30:53 - 44:00) [Giảng bài phần branching](https://www.youtube.com/watch?v=hbRbwgC-Uy0&t=1s)

#### COMMAND LINES
1. Create new branch:
    - **git branch <branch_name>**
    - new branch takes over all files/status of main branch
2. Check out to new branch:
    - **git checkout <branch_name>**

Combine 1,2:
    
- **git checkout -b <branch_name>**
- create and navigate to new branch in one cmd

## .gitignore file
- add this tag for files no need GIT to manage
- step:
    - open file .gitignore (or create it if not found)
    - ignore files: input name of files to be ignored
        - ex: key-takeaways-l3.md
        - ⚠️ the files should have same folder level with .gitignore file
    - ignore folder: input filename and '/', ex: lesson-1/
    - result: the ignored files, folders turned grey and not track when git add, git commit

## DETECT CHANGE DISPLAYED ON VS CODE:
### Status of files:
- tracked/untracked/ignored:
    - A : git add
    - M : modify/change data
    - U : untracked, changed but not yet commited
    - label in grey : ignored files

## CHECK OUT TO SPECIFIC REVERSION:
After **git log** we have:

commit 151b5d52743e8564dd42e0ae79c149f9f9849afe (HEAD -> main)
Author: PW - Ly <thaoly.phan197@gmail.com>
Date:   Tue Jun 17 21:56:25 2025 +0700

    chore: update ex5 ex8 lesson-2 undo

👉 *151b5d52743e8564dd42e0ae79c149f9f9849afe* is revision

💡 To return history of that revision and check what we were having there, use below cmd:
- git checkout <revision>
    - ex: git checkout 151b5d52743e8564dd42e0ae79c149f9f9849afe
> khi bạn dùng git checkout để chuyển đến một revision cũ (commit cụ thể), bạn sẽ rơi vào trạng thái gọi là "detached HEAD", nghĩa là bạn không còn ở bất kỳ nhánh nào – chỉ đang xem một commit cụ thể.

💡 To return main branch after git checkout revision:
- git checkout main
- git branch : to check what branch we currently in