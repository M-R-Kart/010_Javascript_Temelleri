//! Oparatörler

let veri;
const a=20;
const b=10;
const c=5;
let d=3;

//* 1. Aritmetik Oparatörler (+ -, +=, -=, *=, /=, %=)
veri = a+b;
veri = a-b;
veri = a*b;
veri = a/b;
//veri = a++; //! const a=20; sabit olarak değer verildiği için hata alınır.
veri = d++;
veri = ++d;
veri = d--;
veri = --d;
veri = a%b //* a'nın bölümünden kalan değer

//* 2. Atama Oparatörleri (+=, -=, *=, /=, %=)

veri = a;
veri +=a; //* veri = veri + a;
veri -= a; //* veri = veri - a;
veri *=a; //* veri = veri * a;
veri /=a; //* veri = veri / a;
veri %=a; //* veri = veri % a;

//* 3. Karşılaştırma Oparatörleri (==,!=, ===,!==, >, <, >=, <=)

veri = a==b; // false
veri = b==c; // false
veri = 5==="5"; // false //! (tür aynı olmadığı için "5" tırnak içinde olması)
veri =a!=b; // true //! (a, b ye eşit değil)
veri = a!==b; // true //! (a, b ye eşittir ve türleri aynıdır.)
veri = a>b; // true //! (a, b den büyük)
veri = b<c; // false //! (b, c den büyük)
veir = 5 >= 5; // true //! (5, 5 eşit)
veri = b <= c; // false //! (b, c den küçük eşit değil)

//* 4. Mantıksal Oparatörler (and, or, not) (&&, ||,!)

veri = (a>b) && (a>c); // true //! (a, b den büyük ve a, c den büyük)
veir = (b>a) || (a>c); // true //! (b, a den büyük değil ama (veya) a, c den büyük)
veri = !(a>b); // false //! (a, b den büyük ama (! not) tersini almış olur)
veri = !(b>a); // true //! (b, a den büyük değil (! not) tersini almış olur)



console.log(veri);
console.log(typeof veri);