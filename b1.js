let a=+prompt("nhap so a");

let b=+prompt("nhap so b");

if(a%b==0){
    console.log("a chia het cho b");
}else if (b%a==0){
    console.log("b chia het cho a");
}else if (a%b!=0){
    console.log("a không chia het cho b");
}else{
    console.log("b không chia hết cho a" );
}