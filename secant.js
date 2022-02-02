function fx(x){
    return x**2-7; 
}

let i = 0;
let error = 0.000001;
let x0 = 2;
let x1 = 3;
let x2 = x1-fx(x1)*((x1-x0)/(fx(x1)-fx(x0)));

let es = (x2-x1)/x2;

while(Math.abs(es)>= error){
    x2 = x1-fx(x1)*((x1-x0)/(fx(x1)-fx(x0)));
    es = (x2-x1)/x2;
    x0 = x1;
    x1 = x2;

    if(i==0){
        console.log('ITeration= 0');
        console.log('x 2 =',x2.toFixed(6));     
        console.log('====================');
        i=i+2;
    }
    else{
        console.log('ITeration=',--i);
        i=i+2;
        console.log('x',i,' =',x1.toFixed(6));
        console.log('error',Math.abs(es).toFixed(6));
        console.log('====================');
    }
}
console.log('root=',x2.toFixed(6));

