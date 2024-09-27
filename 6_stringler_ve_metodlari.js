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
//veri = veri.toUpperCase(); //! Bütün harfleri büyük yapan toUpperCase metodu
//veri = veri.toLowerCase(); //! Bütün harfleri küçük yapan toLowerCase metodu

//veri = veri.substring(3,7); //! Muhammet Kart (3. indexten başlayarak 7. indexe kadar) amme sonucu verir.
//veri = veri.slice(2,8); //! Muhammet Kart (2. indexten başlayarak 8. indexe kadar) hammet sonucu verir. Alternatif olarak slice metodu da kullanabilirsiniz.

//veri = veri.indexOf("t"); //! Muhammet Kart içinde "t" harfi ilk olarak (8) hangi indexte olduğunu verir.

//veri = veri.replace('Muhammet','Rafii'); //! Muhammet Kart -> Rafii Kart

//veri = veri.length;  //! Muhammet Kart içindeki karakter sayısını verir.

veri = hobbies.split(' ');  //! formula1,sinema,spor,kitap,yazılım olarak ayırılmış hobbies


console.log(veri);
console.log(typeof veri);

