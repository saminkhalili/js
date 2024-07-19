//lesson 1+2+3
// // console.log('from js 3');
const getMessage = () =>"<h3>it is working1</h3>";
document.body.innerHTML = getMessage();
/*multiple 
comment*/
let message0 = "samin";
console.log(message0);
let message1 = "khalili";console.log(message1);

//متغیر ها و ثابت ها در جاوا اسکریپت lesson 4
let lenght = 10;
let witth = 10;
let area = lenght * witth;
console.log(area);
area = 200;
console.log(area);
let firstName='samin'; //cammel case writing
let lastName='khalili';
console.log(firstName +'  '+ lastName);
const pi =3.14; // when u use const u can not change the value of pi 
let lenght1 = 10;
let witth1 = 10 * pi;
let area2 = pi*lenght1*witth1;
/*
primitive Date Types
1.number
2.string
3.boolean
4.undefined
5.Null
6.symbol  >>>> no exmple below
*/
let a =20;
console.log(typeof a);
aa= 'a';
console.log(typeof aa);//the type of a can change middle of proggram!
let b =false;
console.log(typeof b);
let c ="asd";
console.log(typeof c);
let d ;
console.log(typeof d);
let e =null;
console.log(typeof e);

//کار با اعداد و عملگر های محاسباتی lesson 5
let f =0b10100;
console.log( f);
let g =0o24;
console.log( g);
let h =0x14;
console.log( h);
let j =2e6;
console.log( j);
let k =8.333E5;
console.log( k);
let l =2.3e-4;
console.log( l);
let answer = 0 ;
answer= a+a;
answer += 100;//answer = answer + 100 
console.log(answer);
console.log(answer *= 2);
console.log(answer /= 2);
// console.log(answer %= 2);//baghimande
console.log(answer ** 2);//tavan
console.log(answer ++);
console.log(answer --);
console.log(++ answer);
console.log(-- answer);
let aaa=2 , bbb=4;
console.log(aaa++ * bbb++); // after this line aaa=3 and bbb=5
console.log(++aaa * ++bbb);
// console.log(++aaa * bbb++);
// console.log(aaa++ * ++bbb);
//Function object method property
let bibi=Math.PI;
console.log(bibi);
let sam=200;
let mas=200;
let answ= add(sam,mas);
console.log(answ);
function add(a,b){
    return a+b;
}
//methods^ isinteger+isfinite+isNan
console.log(Number.isInteger(20));//result is boolean
console.log(2/0);//infinit
console.log(-2/0);
console.log(2e444);
console.log(2*'hello');//not a number = NaN
console.log(Number.isFinite(1/0));//boolean result
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(42));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(44));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(4-'HTML'));
//wrapper object+utility methods
let qw = 3330000;
console.log(qw.toExponential());//the result is a string in google inspect not a number!
let qe=23.1231231312;
console.log(qe.toFixed(3));
let qr=11.22;
console.log(qr.toFixed(4));
let we=123.124;
console.log();
let wr=23.45567
console.log(wr.toPrecision(3));
let wt=2345567
console.log(wt.toPrecision(3));
let qq=23.4556
console.log(qq.toPrecision(6));
console.log(3332.toExponential()); // reason of error is that after number we have . and js think that toexp.... is number ! witch is not . in below we see how to fix it .
console.log(3332..toExponential()); 
console.log(3332 .toExponential()); 
console.log(3332.0.toExponential());
console.log((3332).toExponential());

//کار با رشته ها در جاوا اسکریپت lesson 6











