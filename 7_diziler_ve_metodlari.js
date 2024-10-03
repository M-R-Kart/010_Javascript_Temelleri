//! ARRAYS

//* Get Array İtem

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
1. Dizilerin Tanımı
JavaScript te dizi, birden fazla değeri saklayabilen bir veri yapısıdır. Diziler, köşeli parantezler ([]) ile tanımlanır.
    Örnek:
    let years = [1990,1980,2003,2000,2005]; //! (4) [1990, 1980, 2003, 2000, 2005] 
    let names = ["arda","kerem","aslı","mert"]; //! (4) ['arda', 'kerem', 'aslı', 'mert'] 
    let renkler = ["kırmızı","mavi","yeşil"]; //! (3) ['kırmızı', 'mavi', 'yeşil']

    console.log(years);
    console.log(names);
    console.log(renkler);
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////
2. Dizi Elemanlarına Erişim
Dizi elemanlarına erişmek için dizinin indeksini kullanırız. Diziler 0 dan başlar.
    Örnek:
    let names = ["arda","kerem","aslı","mert"];
    let renkler = ["kırmızı","mavi","yeşil"]; 

    console.log(names[0]); //! arda
    console.log(renkler[0]); //! kırmızı

//////////////////////////////////////////////////////////////////////////////////////////////////////////
3. Dizi Uzunluğu
Bir dizinin uzunluğunu öğrenmek için length özelliğini kullanabilirsiniz.
    Örnek:
    let names = ["arda","kerem","aslı","mert"];
    let renkler = ["kırmızı","mavi","yeşil"];

    console.log(names.length); //! 4
    console.log(renkler.length); //! 3

//////////////////////////////////////////////////////////////////////////////////////////////////////////
4. Dizi Metodları
Dizilerle çalışırken sıkça kullanılan bazı metodlar şunlardır:

    a. push()
  Dizinin sonuna yeni bir eleman ekler.
    Örnek:
    let renkler = ["kırmızı","mavi","yeşil"];
    renkler.push("sarı"); 
  
    console.log(renkler); //! (4) ['kırmızı', 'mavi', 'yeşil', 'sari']

  b. pop()
  Dizinin sonundaki elemanı kaldırır ve döner.
    Örnek:
    let renkler = ["kırmızı","mavi","yeşil"];
    let sonRenk = renkler.pop();

    console.log(sonRenk); //! yeşil
    console.log(renkler); //! (2) ['kırmızı', 'mavi']

    let years = [1990,1980,2003,2000,2005];
    years.pop();

    console.log(years); //! (4) [1990, 1980, 2003, 2000]

  c. shift()
  Dizinin başındaki elemanı kaldırır ve döner.

javascript
Kodu kopyala
let ilkRenk = renkler.shift();
console.log(ilkRenk); // 'kırmızı'
console.log(renkler); // ['mavi', 'yeşil']
d. unshift()
Dizinin başına yeni bir eleman ekler.

javascript
Kodu kopyala
renkler.unshift('siyah');
console.log(renkler); // ['siyah', 'mavi', 'yeşil']
e. splice()
Belirli bir indeksten başlayarak eleman ekler veya kaldırır.

javascript
Kodu kopyala
renkler.splice(1, 1, 'turuncu'); // 1. indeksten 1 eleman kaldır ve 'turuncu' ekle
console.log(renkler); // ['siyah', 'turuncu', 'yeşil']
5. Dizi Döngüsü
Dizilerle genellikle döngüler kullanarak çalışırız. forEach() metodu bu iş için kullanışlıdır.

Örnek:
javascript
Kodu kopyala
renkler.forEach(function(renk) {
    console.log(renk);
});
// 'siyah'
// 'turuncu'
// 'yeşil'
6. Uygulama
Şimdi, yukarıdaki bilgileri kullanarak basit bir uygulama yapalım.

Visual Studio Code’da yeni bir JavaScript dosyası oluştur (örneğin, app.js).
Aşağıdaki kodu kopyala ve yapıştır:
javascript
Kodu kopyala
let meyveler = ['elma', 'muz', 'çilek'];

// Yeni meyve ekle
meyveler.push('portakal');
console.log(meyveler);

// Başındaki meyveyi kaldır
meyveler.shift();
console.log(meyveler);

// Her meyveyi yazdır
meyveler.forEach(function(meyve) {
    console.log(meyve);
});
Terminalden node app.js komutunu kullanarak kodunu çalıştır.
Sonuç
Bu temel bilgilerle JavaScript dizileri ve bazı metodları hakkında bir başlangıç yaptık. Herhangi bir sorunuz olursa veya başka bir konu hakkında daha fazla bilgi isterseniz sormaktan çekinmeyin!
