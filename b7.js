let a=+prompt("nhap so a");

let b=+prompt("nhap so b");

let c=+prompt("nhap so c");

let delta=b**2-4*a*c;

if(a!=0){
    if(delta < 0){
        console.log("phương trình vô nghiệm");
    }else if(delta === 0){
        let x = -b / (2*a);
        console.log("phương trình có nghiẹm kép là :" , x);
    }else if(delta > 0){
        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);
        console.log("phương trình có 2 nghiẹm pb là : x1=",x1,"x2=",x2 ); 
    }

}else{
    console.log("phương trình không hợp lệ. vui lòng nhập lại số");
}