function kiemtrasonguyento() {
    // b1: nhập vào n (promt)
    // b2:
    //     for (let i=2, i<=(n-1), i++){
    //
    //     if(n%i==0){
    //         alert("n khong phai sont);
    //         break;
    //     }
    // }
    // b3: kết luân ....
    let n = parseInt(prompt("Moi ban nhap vao so n"));
    //kiem tra no >1
    // mac dinh n la so nguyen to
    let check = true;
    // for (let i = 2; i <= (n-1); i++) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0){
            // alert("n khong phai so nguyen to");
            check= false;
            break;
        }
    }
    check? alert(n+ " la so nguyen to"): alert(n+ " khong la so nguyen to");
    // if (check==true){
    //     alert(n+ " la so nguyen to");
    // }
    // else {
    //     alert(n+ " khong la so nguyen to");
    // }

}

function checkSTN(n) {
    let check = true;
    // for (let i = 2; i <= (n-1); i++) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0){
            // alert("n khong phai so nguyen to");
            check= false;
            break;
        }
    }
    return check;
}

//so nguyen to: 97, 17
//so khong nguyen to: 27, 4, 2

function demo1(){
    const N=2;
    for (let i = 1; i <=5; i++) {
        let a =N*i;
        // n=n*i;
        document.writeln(a);
    }
}

function demo245() {
    for (let i = 1; i <=10 ; i++) {
        if (i%2==0) document.writeln(i);
    }
}
function demo3() {
    let x =1;
    let i = 0;
    while (x>0){
        x++;
        if (checkSTN(x)){
            document.writeln(x);
            i++;
        }
        if (i==10){
            break;
        }
    }
    
}
