let number=+prompt("nhap 1 số chính phương");

if (num<0){
    console.log("số khong phai la so chinh phương");

}else {
    var Square=Math.sqrt(number);
    if(Square==Math.floor(Square)){
        console.log("số do la so chinh phương ");

    }else{
        console.log("số đo khoong la so chính phương");
    }
}