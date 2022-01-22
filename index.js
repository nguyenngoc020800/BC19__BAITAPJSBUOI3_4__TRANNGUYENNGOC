// Bai 1 : tính tiền lương nhân viên
// sơ đồ 0 khối :
// block 1: nhập vào
// - số ngày làm
// block 2: các bước thực hiện:
// b1: tạo biến cho lương 1 ngày là luong1ngay và gán giá trị là 100000
// b2: tạo biến cho số ngày làm và tổng lương là soNgayLam và tongLuong
// b3: gán giá trị cho soNgayLam
// b4:: sử dụng công thức tính lương:
// tongLuong = soNgayLam*luong1ngay
// b5: in kết quả tongLuong ra console
// block 3: xuất ra :
// -lương nhân viên
const luong1ngay = 100000;
let soNgayLam = 10;
let tongLuong ;
tongLuong = soNgayLam*luong1ngay;
console.log("luong cua nhan vien trong thang lam viec 10 ngay la:",tongLuong);

// Bai 2: tính giá trị trung bình của 5 số thực 

// sơ đồ 3 khối :
// block 1: nhập vào
// - 5 số thực muốn tính giá trị trung bình
// block 2: các bước thực hiện:
// b1: tạo biến cho 5 số thực : a,b,c,d,e,f
// b2: gán giá trị cho a,b,c,d,e,f
// b3: tạo biến cho giá trị trong bình là trungBinh
// b4:: sử dụng công thức tính giá trị trung bình:
// trungBinh = (a+b+c+d+e)/5
// b5: in kết quả trungBinh ra console
// block 3: xuất ra :
// -giá trị trung bình của 5 số thực

let a,b,c,d,e;
a = 10
b = 10
c = 10
d = 10 
e = 10
let trungBinh;
trungBinh = (a+b+c+d+e)/5;
console.log("gia tri trung binh la :",trungBinh)
// Bai 3: bài toán quy đổi tiền từ USD sang VND

// sơ đồ 3 khối :
// block 1: nhập vào:
// - số USD cần đổi ra VNĐ
// block 2: các bước thực hiện:
// b1: tạo biến cho số USD cần đổi là nUSD
// b2: tạo biến cho giá USD hiện nay là curUSD và gán giá trị là 23.500
// b3:gán giá trị cho nUSD
// b4::tạo biến cho số tiền VND được quy đổi ra là totalVND
// b5: sử dụng công thức : totalVND = nUSD*curUSD
// b5: in kết quả totalVND ra console
// block 3: xuất ra :
// - giá trị VND 
const curUSD = 23500;
let nUSD ;
nUSD = 3;
let totalVND;
totalVND = nUSD*curUSD;
console.log("người dùng nhập vào 3 USD =>",totalVND,"VND" );

// Bai 4: tính chu vi, diện tích hình chữ nhật

// sơ đồ 3 khối :
// block 1: nhập vào:
// - chiều dài
// - chiều rộng
// block 2: các bước thực hiện:
// b1: tạo biến cho chiều dài và chiều rộng của hình chữ nhật là cDai và cRong
// b2: tạo biến cho chu vi và diện tích của hình chữ nhật là cVi và dTich;
// b3: gán giá trị cho cDai và cRong
// b4: sử dụng công thưc tính chu vi : cVi = (cDai + cRong)*2;
// b5: sử dụng công thức tính diện tích : dTich = cDai*cRong
// b6: in kết quả cVi và dTich ra console
// block 3: xuất ra :
// - giá trị chu vi 
// -giá trị diện tích 
const cDai = 5;
const cRong = 3;
let cVi,dTich;
cVi = (cDai + cRong)*2;
dTich = cDai*cRong;
console.log("chu vi và diện tích là",cVi,"và",dTich)

// Bai 5: tính tổng 2 kí số của số được nhập 

// sơ đồ 3 khối :
// block 1: nhập vào:
// - số tự nhiên có 2 chữ số
// block 2: các bước thực hiện:
// b1: tạo biến cho số được nhập vào là n
// b2: tạo biến cho kí số hàng chục và kí số hàng đơn vì là chuc và donvi;
// b3: gán giá trị cho n
// b4: sử dụng công thưc tìm lấy số hàng chục : chuc = n/10;
// b5: sử dụng công thức tìm số hàng đơn vị : donvi = n%10
// b6: tạo biến cho tổng 2 kí số là sum
// b7: sử dụng công thức tính tổng 2 kí số : sum = Math.floor(chuc) + d;
// b8: xuất ra màn hình sum
// block 3: xuất ra :
// - giá trị tổng 2 kí số n

let n;
let chuc,donvi;
n = 56;
chuc = n/10;
donvi = n%10;
let sum;
sum = Math.floor(chuc) + donvi;
console.log("tổng 2 kí số là:",sum)