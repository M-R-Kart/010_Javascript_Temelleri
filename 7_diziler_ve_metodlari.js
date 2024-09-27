//! ARRAYS

let names = ["arda","kerem","aslı","mert"]; //! (4) ['arda', 'kerem', 'aslı', 'mert'] sonucu verir.
let years = [1990,1980,2003,2000,2005]; //! (4) [1990, 1980, 2000, 2005] sonucu verir.
let mix = ["arda","yilmaz",1990,null,undefined,["programlama","futbol"]]; //! (6) ['arda', 'yilmaz', 1990, null, undefined, Array(2), 'programlama', 'futbol'] sonucu ver


console.log(names);
console.log(typeof names);
console.log(names.length);
console.log(years);
console.log(mix);

//* Get Array İtem

console.log(names[0]); //! arda 0. indexteki eleman gelir.

//* Set Array İtem

names[0] = "muhammet"; //! Arda yerine Muhammet yazısı gelir. 0. indexteki elemanı değiştirdik.
console.log(names);
names[4]="mehmet"; //! Mehmet 4. indexteki eleman olarak gelir.[4] içine names.length olarak yazılabilir.
console.log(names);

//* Add Array Item

names.push("eda"); //! Eda ismini diziye ekler. push metodu dizinin sonuna yeni bir eleman ekler.
console.log(names);
names.unshift("furkan"); //! Furkan ismini diziye ekler. unshift metodu dizinin başına yeni bir eleman ekler.
console.log(names);

//* Remove Array Item

years.pop(); //! 2005 Dizinin sonundaki elemanı siler. pop metodu dizinin sonundaki elemanı siler.
console.log(years);
years.shift(); //! 1990 Dizinin başındaki elemanı siler. shift metodu dizinin başındaki elemanı siler.
console.log(years);

//* İndexOf Array Item

let index = names.indexOf("muhammet"); //! Muhammet dizinin içindeki indexini verir. Muhammet bulunduğu için 1 döner.
console.log("index:" + index);

names.reverse(); //! Diziyi ters çevirir. ['Eda', 'Mehmet', 'mert', 'aslı', 'kerem', 'Muhammet', 'Furkan']
console.log(names);

years.sort(); //! Diziyi küçükten büyüğe sıralar. [1980, 2000, 2003] son konsol komutuna göre döner.
console.log(years);

names.sort(); //! Alfabeye göre az harften çok harfeye göre sıralar. ['aslı', 'eda', 'furkan', 'kerem', 'mehmet', 'mert', 'muhammet']
console.log(names);

let veri = names.concat(years); //! isimlerin ve doğum yıllarının birleştiği dizi ['aslı', 'eda', 'furkan', 'kerem', 'mehmet', 'mert', 'muhammet', 1980, 2000, 2003]
console.log(veri);

names.splice(2,0,"ahmet"); //! 1. indexten hemen sonraki elemanı "ahmet" olarak ekler. ['aslı', 'eda', 'ahmet', 'furkan', 'kerem', 'mehmet', 'mert', 'muhammet']
console.log(names);

names.splice(4,1,"selin"); //! 4. indexteki elemanı siler.Yerine "selin" ekler.['aslı', 'eda', 'ahmet', 'furkan', 'selin', 'mehmet', 'mert', 'muhammet']
console.log(names);