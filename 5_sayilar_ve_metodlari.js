//! NUNBERS

let veri;

veri = Number("5");
veri = parseInt("6");
veri = parseFloat("5.6"); //! ondalık sayılarda kullanılır.
veri = parseInt("5c"); //! sadece 5 olarak ekrana yansıtır c yi görmez.
veri = parseInt("c5"); //! NaN sonucu bu bir sayı değildir.
veri = isNaN("c5"); //! true çünkü c5 bir sayı değil.kontrol sağlamış oluruz.
veri = isNaN("5"); //! false çünkü 5 bir sayıdır.dönüştürülebilir.

var sayi = 15.456321878;
veri = sayi.toPrecision(5); //! 15.456 soldan 5 basamak alırız.
veri = sayi.toFixed(6); //! 15.45632 virgülden sonra 6 basamak alırız.

veri = Math.PI; //! 3.14159 
veri = Math.round(3.5); //! 4 çünkü yuvarlama
veri = Math.round(3.2); //! 3 çünkü yuvarlama aşağıya yakındır.
veri = Math.ceil(3.1); //! 4 çünkü yuvarlamayı sadece yukarıya yapar.
veri = Math.floor(8.7); //! 8 çünkü yuvarlamayı sadece aşağıya yapar.
veri = Math.pow(3,2); //! 9 çünkü üs alma
veri = Math.sqrt(81); //! 9 çünkü karekök alma
veri = Math.abs(-50); //! 50 çünkü mutlak değer alma
veri = Math.min(5,10,3,8,2); //! 2 çünkü en küçük sayı
veri = Math.max(5,10,3,8,2); //! 10 çünkü en büyük sayı
veri = Math.random(); //! 0 ile 1 arasında rastgele bir sayı üretir.
veri = Math.random()*10; //! 0 ile 10 arasında rastgele bir sayı üretir.
veri = Math.floor(Math.random()*10); //! 0 ile 9 arasında rastgele bir TAM SAYI üretir.
veri = Math.floor(Math.random()*10+1); //! 1 ile 10 arasında rastgele bir TAM SAYI üretir. 0 çıkmaz.


console.log(veri);
console.log(typeof veri);
