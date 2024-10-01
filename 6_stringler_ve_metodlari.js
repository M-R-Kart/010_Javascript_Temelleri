// ! STRINGS

const firsName = "Muhammet";
const lastName = "Kart";
const age = "28";
let hobbies ="formula1 sinema spor kitap yazılım";

let veri;

//* 1. String Birleştirme (Concatenation)

veri = firsName+" "+lastName; //! Muhammet Kart " " boşluk koymaya yarar.
veri = "Muhammet";
veri += " Kart"; //! Muhammet Kart 2 satır ilede yazdırılabilir.
veri = 'Benim adım' +firsName+' '+lastName+' ve yaşım '+age+' ve İstanbul\'da yaşıyorum.';
veri = firsName.concat(' ',lastName); //! Muhammet Kart concat methodu ile birleştirir.
veri = veri.toUpperCase(); //! Bütün harfleri büyük yapan toUpperCase metodu
veri = veri.toLowerCase(); //! Bütün harfleri küçük yapan toLowerCase metodu

veri = veri.substring(3,7); //! Muhammet Kart (3. indexten başlayarak 7. indexe kadar) amme sonucu verir.
veri = veri.slice(2,8); //! Muhammet Kart (2. indexten başlayarak 8. indexe kadar) hammet sonucu verir. Alternatif olarak slice metodu da kullanabilirsiniz.

veri = veri.indexOf("t"); //! Muhammet Kart içinde "t" harfi ilk olarak (8) hangi indexte olduğunu verir.

veri = veri.replace('Muhammet','Rafii'); //! Muhammet Kart -> Rafii Kart

veri = veri.length;  //! Muhammet Kart içindeki karakter sayısını verir.

veri = hobbies.split(' ');  //! formula1,sinema,spor,kitap,yazılım olarak ayırılmış hobbies


console.log(veri);
console.log(typeof veri);


//////////////////////////////////////////////////////////////
1. String Oluşturma
//! String’ler ya çift tırnak (" "), tek tırnak (' '), ya da backtick (`) kullanılarak oluşturulabilir.

let str1 = "Merhaba";
let str2 = 'Dünya';
let str3 = `Hoş geldin`;

console.log(str1); 
console.log(str2);
console.log(str3);

//////////////////////////////////////////////////////////////
2. String Birleştirme
//! + operatörü veya concat() metodu kullanarak string’leri birleştirebilirsin.

let str1 = "Merhaba";

let birlesik = str1 + " " + str2; // "Merhaba Dünya"
let birlesik2 = str1.concat(" ", str2); // "Merhaba Dünya"

console.log(birlesik);
console.log(birlesik2);

//////////////////////////////////////////////////////////////
3. String Uzunluğu
//! length özelliği ile bir string’in uzunluğunu alabilirsin.

let str1 = "Merhaba";

let length = str1.length //! 7

console.log(length); 

//////////////////////////////////////////////////////////////
4. Karakterlere Erişim
//! String içinde belirli bir karaktere erişmek için köşeli parantez veya charAt() metodunu kullanabilirsin.

let str1 = "Merhaba";

let firsChar = str1[0]; //! "M"
let secondChar = str1.charAt(1); //! "e"

console.log(firsChar);
console.log(secondChar);

//////////////////////////////////////////////////////////////
5. String Kesme (Substring)
//! slice(), substring(), ve substr() metodları ile string’leri kesebilirsin.

let str1 = "Merhaba";
let str2 = 'Dünya';

let sub1 = str1.slice(0,3); //! "Mer"
let sub2 = str2.substring(1,4); //! "üny"

console.log(sub1);
console.log(sub2);

//////////////////////////////////////////////////////////////
6. String Arama
//! indexOf(), lastIndexOf(), ve includes() metodları ile bir string içinde belirli bir değerin konumunu bulabilirsin.

let str1 = "Merhaba";
let str2 = 'Dünya';
let str3 = `Hoş geldin`;

let index = str1.indexOf("a"); //! 4
let lastIndexOf = str3.lastIndexOf("o"); //! 1
let contains = str2.includes("Dün"); //! true

console.log(index);
console.log(lastIndexOf);
console.log(contains);

//////////////////////////////////////////////////////////////
7. String Değiştirme
//! replace() ve replaceAll() metodları ile string içindeki belirli karakterleri değiştirebilirsin.

let str1 = "Merhaba";
let str2 = 'Dünya';

let newStr = str1.replace("Merhaba","Selam"); //! Selam
let newStr2 = str2.replaceAll("Dünya","Merhaba"); //! Merhaba

console.log(newStr);
console.log(newStr2);

//////////////////////////////////////////////////////////////
8. String Küçültme/Büyültme
//! toLowerCase() ve toUpperCase() metodları ile string’leri küçük ya da büyük harfe dönüştürebilirsin.

let str3 = `HOŞ geldin`;

let lower = str3.toLowerCase(); //! hoş geldin
let upper = str3.toUpperCase(); //! HOŞ GELDIN

console.log(lower);
console.log(upper);

//////////////////////////////////////////////////////////////
9. Boşlukları Kaldırma
//! trim() metodu ile bir string’in başındaki ve sonundaki boşlukları kaldırabilirsin.

let str3 = `     Hoş geldin `;

let kesilme = str3.trim(); //! "Hoş geldin"

console.log(str3);
console.log(kesilme);

//////////////////////////////////////////////////////////////
10. String'i Dizilere Dönüştürme
split() metodu ile bir string’i belirli bir ayırıcı ile parçalara ayırabilirsin.

let csv = "elma,armut,muz";
let fruits = csv.split(","); // ["elma", "armut", "muz"]

//////////////////////////////////////////////////////////////
11. Diziyi String'e Dönüştürme
join() metodu ile bir dizi öğelerini birleştirerek yeni bir string oluşturabilirsin.

let fruitString = fruits.join(" - "); // "elma - armut - muz"

//////////////////////////////////////////////////////////////
12. Template Literals
Backtick ( ) kullanarak çok satırlı string’ler oluşturabilir ve değişkenleri gömme (interpolasyon) yapabilirsin.

let age = 25;
let greeting = `Benim yaşım ${age} yaşında.`;

