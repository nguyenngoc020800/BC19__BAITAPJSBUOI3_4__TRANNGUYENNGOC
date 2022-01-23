// Bai 1 : tính tiền lương nhân viên
// Nhập vào số ngày làm
// Xuất ra kết quả tiền lương đc nhận 
//DOM vào form có id = calcSalary và viết lệnh khi thực hiện submit form
document.getElementById('calcSalary').onsubmit = function(evt) {
    //ngăn chặn load lại trang khi submit form
    evt.preventDefault();
    //tạo biến đựng value của ô input có id = dayNumber
    const dayNumber = +evt.target.elements.dayNumber.value;
    //thực hiện tinhs toán tiền lương và gán vào biến result
    const result = dayNumber*100000;
    //DOM vào phần tử html xuất ra kết quả 
    const salaryEl = document.getElementById('salaryInfor')
    // thay đổi nội dụng của phần tử HTML chứa kết quả
    salaryEl.innerHTML = `lương nhân viên:${result}`;
}

// Bai 2: tính giá trị trung bình của 5 số thực 
    //nhập vào 5 số thực cần tính giá trị trung bình
    //xuất ra giá trị trung bình của 5 số thực 
    // DOM vào form có id = calcAverage và gán hàm vào sự kiện submit form
    document.getElementById('calcAverage').onsubmit = function(evt){
        // ngăn chăn reload trang khi submit form
        evt.preventDefault();
        //DOM vào các ô input nhập vào các số cần tính giá trị trung bình
        const number1 = +evt.target.elements.number1.value
        const number2 = +evt.target.elements.number2.value
        const number3 = +evt.target.elements.number3.value
        const number4 = +evt.target.elements.number4.value
        const number5 = +evt.target.elements.number5.value
        //tạo biến chứa kết quả và sử dụng công thức tính giá trị trung bình 
        const average = (number1 + number2 +number3 + number4 + number5)/5;
        // DOM vào phần tử HTML chứa kết quả và thay đổi nội dung bằng kết quả tính đc 
        document.getElementById('averageInfor').innerHTML = `giá trị trung bình:${average}`

    }

// Bai 3: bài toán quy đổi tiền từ USD sang VND
    // nhập vào số USD cần đổi
    //xuất ra số tiền VNĐ được đổi ra
    // DOM vào form có id = changeMoney và gán hàm vào sự kiện submit form
    document.getElementById('changeMoney').onsubmit = function(evt){
        // ngăn chăn reload trang khi submit form
        evt.preventDefault();
        //lấy giá trị của ô input có id MoneyNumber
        const moneyNumber = +evt.target.elements.moneyNumber.value;
        //Sử dụng công thức tính ra kết quả và tạo biến chứa kết quả đó
        const result = moneyNumber*23500
        //DOM vào phần tử HTML chứa kết quả và thay đổi nội dung 
        document.getElementById('moneyInfor').innerHTML =`số tiền sau khi đổi: ${result} VNĐ`
    }

// Bai 4: tính chu vi, diện tích hình chữ nhật
    // nhập vào chiều dài và chiều rộng hình chữ nhật
    //xuất ra chu vi và diện tích hình chữ nhật
    // DOM vào form có id = calcHCN và gán hàm vào sự kiện submit form
    document.getElementById('calcHCN').onsubmit = function(evt){
        // ngăn chăn reload trang khi submit form
        evt.preventDefault();
        //lấy giá trị của 2 ô input chứa chiều dài và chiều rộng của HCN
        const chieuRong = +evt.target.elements.chieuRong.value;
        const chieuDai = +evt.target.elements.chieuDai.value;
        //sử dụng công thức tính chu vi và diện tích, tạo biến chứa 2 giá trị này
        const dienTich = chieuRong*chieuDai;
        const chuVi = (chieuDai+chieuRong)*2;
        //DOM vào phần tử HTML xuất ra kết quả và thay đổi nội dung của phần tử này bằng kết quả tính đc 
        document.getElementById('HCNInfor').innerHTML = `chu vi và diện tích HCN là: ${chuVi} và ${dienTich}`
    }


// Bai 5: tính tổng 2 kí số của số được nhập 
    //nhập vào số cần tính tổng 2 kí số 
    //xuất ra màn hình tổng 2 kí số 
    // DOM vào form có id = sumNumber và gán hàm vào sự kiện submit form
    document.getElementById('sumNumber').onsubmit = function(evt){
        //ngăn chặn hạnh động load lại trang khi submit form
        evt.preventDefault();
        // lấy giá trị của ô input chứ số cần tính tổng 2 kí số
        const number = +evt.target.number.value;
        //lấy giá trị kí số đầu tiên
        const numberleft = Math.floor(number/10);
        //lấy giá trị kí số thứ 2
        const numberRight = number%10;
        //tính tổng 2 kí số 
        const sum = numberleft + numberRight;
        //DOM vào phần tử chứa kết quả và thay đổi nội dung chứa kết quả
        document.getElementById('numberInfor').innerHTML = ` tổng 2 kí số: ${sum}`;
    }


