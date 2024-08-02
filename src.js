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
console.log(3332..toExponential()); // reason of error is that after number we have . and js think that toexp.... is number ! witch is not . in below we see how to fix it .
console.log(3332..toExponential()); 
console.log(3332 .toExponential()); 
console.log(3332.0.toExponential());
console.log((3332).toExponential());

//کار با رشته ها در جاوا اسکریپت lesson 6
//strings defination/ characters escaping/ templates literal
 let tr='hello';
 console.log(tr);
 let tz="hello";
 console.log(tz);
 let str="it's a car ";
 console.log(str);
 let str1='my name is "samin"';
 console.log(str1);
 let str2='my name is \"samin\" and that\'s my car ';
 console.log(str2);
 let line="this is\n about making\n new lines";//enter
 console.log(line);
 let thisnumber=10;
 let thisstring=`im gona show you the value of this number here ${thisnumber}`; //how to pass a variable only if u use backtick > `
 console.log(thisstring);
 console.log(thisstring.length);//space included
 console.log(thisstring.toUpperCase());//change all letter to caps
 console.log(thisstring.charAt(1));//m
 console.log(thisstring[1]);//m
 console.log(thisstring.indexOf('s'));
 console.log(thisstring.indexOf('show'));//first character index >s
 //caps also matter here
 console.log(thisstring.indexOf('s',5));//search for first s after index 5
 console.log(thisstring.lastIndexOf('s',5));//search for first s from end of index 5
 console.log(thisstring.lastIndexOf('nist',5));//search a latter that does not exist bring us -1
 console.log(thisstring.includes('samin'));//searching for a whole word 
let str5="samin khalili";
console.log(str5.startsWith('samin'));//boolean result
console.log(str5.endsWith('samin'));//boolean result
console.log(str5.substring(3));//select from a index till end of text
console.log(str5.substring(3,10));//select from 3 index till 10.end with 9
let tt="samin",rr="khalili";
console.log(tt.repeat(2));
console.log(tt.substring(1,2).repeat(2));
console.log(tt.concat('666'));
console.log(tt + rr + 'this is my full name');
console.log('samin'.repeat(5));
console.log('samin'.concat('6'));
console.log('samin'.charAt(2));
console.log('saminkhalili'.length);

//تبدیل انواع داده ها به یکدیگر lesson 7
//conversion between strings & Numbers
console.log('3'*5);
console.log('hi'*5);//NaN
console.log('10.3'*1);
console.log('0xff'*1);
console.log('322aa'*1);//NaN
console.log('         '*5);// 0
console.log('3'+ 5); //35
let df='100';
let dd=Number(df);
console.log(Number('100')); 
console.log(Number('hello')); //NaN 
console.log(Number('2e6'));   //2000000
//numbers to strings
console.log(String(10)); 
console.log(String(22.11)); 
console.log(String(2e6)); 
console.log(String(NaN)); 
console.log(String(100..toString(2))); // mabna 2
//parseInt + parseFloat Function
console.log(parseInt('12313samin')); 
console.log(parseInt('         ')); 
console.log(parseInt('-123.42313'));
console.log(parseInt('100011110',2));
console.log(parseInt('abc123',10));
//if u use mabna with float the result is 0
console.log(parseFloat('abc123',10)); // 0
console.log(parseFloat('22.55.66')); // 22.55
console.log(parseFloat('0908.5')); 
console.log(parseFloat('3.125e7'));
//undefined + null + boolean conversion
console.log(parseInt(undefined));
console.log(Number(undefined));
console.log((3 * undefined));
console.log(undefined +3);
console.log(undefined+'3');
console.log(Number(null));
console.log(parseInt(null));
console.log(null+ 10);
console.log(null+ '10');
console.log(true + 10);
console.log(false + 10);
console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean('0'));//true
console.log(Boolean('AAA'));//true
console.log(Boolean(22.5));//true
//عملگرهای منطقی + مقایسه ای و تقدم عملگرا ها lesson 8
let op;
op=true;
//NOT
op=!true;//false
op=!0;    //true
op=!'hihihi';   //false
op=!null;   //true
//AND
op= true && false;  //false
op= false && false; //false
op= 'hello' && true;   //true                      
op= true && 'hello'; //hello                        
op= true && true && true&& true&& false&& true;//false
//OR
op=true||false;
op=false||false;
op=false||true;
op=false||'hi';//hi
op='hi'||true;//hi
op=true||false|| 'hi' || true;//true
console.log(op);
let aaaa= 10 , bb =40 , cc ='10' ,ddd='hello' , answerr;
answerr=aaaa=bb;//f
answerr=aaaa=cc;//t
answerr=aaaa=ddd;//f
answerr=bb=20;//f
answerr=10=10;//t
answerr=" "==0;//t
answerr=" "=="0";//f
answerr=false=="0";//t
answerr="1"==true;//t
answerr="2"==true;//f
answerr="true"==true;//f
answerr=null==undefined;//t
answer=" "===0;//f
answer=" "==="0";//f
answer=false==="0";//f
answer="1"===1;//f
answer="1"==="1";//t
answer=null===undefined;//f
answerr=NaN===NaN;//f
answerr=Number.isNaN(NaN);//t
answerr=10 != '10';//f
answer=10 !=='10';//t
answerr=8 > 4;//t
answerr=8 < 4;//f
answerr=8 >= 4;//t
answerr=8 >= 4;//t
answerr=-1 <= 1;//t
answerr=-1 <= -1;//t
answerr=8 <= '8';//t
answerr ='apples' < 'bananas';//true
answerr ='apples' < 'Bananas';//false
//minimal Evaluation
let education = 3;
let age = 27;
let city = 'tehran';
let condition1 = education>= 4;
let condition2 =age <= 30;
let condition3 = city==='tehran';
answer = condition1 && condition2 && condition3;
console.log(answer);
console.log(true||false||false||'H');
console.log('Hello'|| false);
console.log(true && true && 0 && false && true );
//operator precedence
let answer1= 2 + 3 * 4;
console.log(answer1);
let answer2=true || true && false;
console.log(answer2);
//آشنایی با ساختار های شرطی lesson 9
let grade = 15;
if(grade>10){
    console.log(grade);
}
if(grade>=10){
    console.log('good job');
    if(grade==20){

        console.log('EZ');
    }
}
if(grade<10){
    console.log('not good');
}  

if(grade>= 0 && grade <=20){
    console.log('good');
}else{
    console.log('not good');
}
//same code here
(grade>= 0 && grade <=20) ? console.log('good') : console.log('not good');
let m1=-30,m2;
m2= m1>= 0 ? m1:-m2;
console.log(m2);

if (grade >= 15) {
    console.log('عالي');
} else if (grade >= 10) {
    console.log('خوب');
} else if (grade >= 5) {
    console.log('ضعیف');
} else {
    console.log('خیلی ضعیف');
}
//switch example
let i = 10;
switch(i) {
    case 10:
        console.log("A");
        break;
    case 20:
        console.log("B");
        break;
    case 30:
        console.log("C");
        break;
    default:
        console.log("D");
}
grade=11;
switch(true){
    case(grade >= 0 && grade <5) :
    console.log('not good');
    break;
    case(grade >= 5 && grade <10) :
    console.log('good');
    break;
    case(grade >= 10 && grade <15) :
    console.log('very good');
    break;
    case(grade >= 15 && grade <20) :
    console.log('gg good');
    break;
    default:
        console.log('nop!');
}
//آرایه ها در جاوا اسکریپت lesson 10







 
















