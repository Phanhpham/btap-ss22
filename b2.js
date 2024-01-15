let AB=+prompt("nhap đô dài cạnh AB");

let AC=+prompt("nhap đô dài cạnh AC");

let BC=+prompt("nhap đô dài cạnh BC");

if ((AB+AC>BC) && (AB+BC>AC) && (AC+BC>AB)){
    console.log("độ dài hợp lệ",AC,AB,BC);
}else{
    console.log("độ dài khôg hợp lệ");
}