const sinh_vien = {
    name: 'Nguyen Van A',
    student_class: '12A1',
    score: 18,
}

let a = prompt("Vui long nhap so luong sinh vien: ");
let arr = [];
for (let i = 0; i < a; i++) {
    let name = prompt("Nhap ten sinh vien: ");
    let student_class = prompt("Nhap lop: ");
    let score = prompt("Nhap diem: ");
    arr.push({ name, student_class, score });
}

function diem_trung_binh(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].score);
    }
    return total / arr.length;
}

function lay_ten_sinh_vien(arr) {
    let ten_sinh_vien = [];
    for (let i = 0; i < arr.length; i++) {
        ten_sinh_vien.push(arr[i].name);
    }
    ten_sinh_vien.sort();
    return ten_sinh_vien;
}

function xep_loai_sinh_vien(arr) {
    let xep_loai = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score >= 8) {
            xep_loai.push({ name: arr[i].name, xep_loai: 'Gioi' });
        }else if (arr[i].score >= 6.5) {
            xep_loai.push({ name: arr[i].name, xep_loai: 'Kha' });
        }else if (arr[i].score >= 5) {
            xep_loai.push({ name: arr[i].name, xep_loai: 'Trung binh' });
        }else{
            xep_loai.push({ name: arr[i].name, xep_loai: 'Yeu' });
        }
    }
    return xep_loai;
}

function nhom_theo_lop(arr) {
    let nhom_lop = [];
    let lop_ton_tai = [];

    for (let i = 0; i < arr.length; i++) {
        if (!lop_ton_tai.includes(arr[i].student_class)) {
            lop_ton_tai.push(arr[i].student_class);
            nhom_lop.push({
                student_class: arr[i].student_class,
                sinh_vien: []
            });
        }
        let vi_tri = lop_ton_tai.indexOf(arr[i].student_class);
        nhom_lop[vi_tri].sinh_vien.push(arr[i]);
    }

    return nhom_lop;
}

function lay_n_sinh_vien_cao_nhat(arr) {
    let n = prompt("Vui long nhap so luong sinh vien muon lay: ");
    if (n > arr.length) {
        return "So luong sinh vien muon lay lon hon so luong sinh vien hien co";
    }
    arr.sort((a, b) => b.score - a.score);
    return arr.slice(0, n);
}

console.log("Danh sach sinh vien:", arr);

console.log("Diem trung binh:", diem_trung_binh(arr));

console.log("Ten sinh vien:", lay_ten_sinh_vien(arr));

console.log("Xep loai sinh vien:", xep_loai_sinh_vien(arr));

console.log("Nhom theo lop:", nhom_theo_lop(arr));

console.log("So luong sinh vien diem cao nhat theo n la:", lay_n_sinh_vien_cao_nhat(arr));