//! ARRAYS

//* Get Array İtem

//* Set Array İtem

//* Add Array Item

//* Remove Array Item

//* İndexOf Array Item

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
1. Dizilerin Tanımı
JavaScript te dizi, birden fazla değeri saklayabilen bir veri yapısıdır. Diziler, köşeli parantezler ([]) ile tanımlanır.
    Örnek:
    let years = [1990,1980,2003,2000,2005]; //! (4) [1990, 1980, 2003, 2000, 2005] 
    let names = ["arda","kerem","aslı","mert"]; //! (4) ['arda', 'kerem', 'aslı', 'mert'] 
    let renkler = ["kırmızı","mavi","yeşil"]; //! (3) ['kırmızı', 'mavi', 'yeşil']

    console.log(years);
    console.log(names);
    console.log(renkler);
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
2. Dizi Elemanlarına Erişim
Dizi elemanlarına erişmek için dizinin indeksini kullanırız. Diziler 0 dan başlar.
    Örnek:
    let names = ["arda","kerem","aslı","mert"];
    let renkler = ["kırmızı","mavi","yeşil"]; 

    console.log(names[0]); //! arda
    console.log(renkler[0]); //! kırmızı

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
3. Dizi Uzunluğu
Bir dizinin uzunluğunu öğrenmek için length özelliğini kullanabilirsiniz.
    Örnek:
    let names = ["arda","kerem","aslı","mert"];
    let renkler = ["kırmızı","mavi","yeşil"];

    console.log(names.length); //! 4
    console.log(renkler.length); //! 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
4. Dizi Metodları
Dizilerle çalışırken sıkça kullanılan bazı metodlar şunlardır:

    a. push()
    Dizinin sonuna yeni bir eleman ekler.
        Örnek:
        let renkler = ["kırmızı","mavi","yeşil"];
        renkler.push("sarı"); 
      
        console.log(renkler); //! (4) ['kırmızı', 'mavi', 'yeşil', 'sari']
    
        let names = ["arda", "kerem", "aslı", "mert"];
        names.push("eda"); //! (5) ['arda', 'kerem', 'aslı', 'mert', 'eda']
    
        console.log(names);
        ////////////////////////////////////////////////////////////////////
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
        ////////////////////////////////////////////////////////////////////
    c. shift()
    Dizinin başındaki elemanı kaldırır ve döner.
        Örnek:
        let renkler = ["kırmızı", "mavi", "yeşil"];
        let ilkRenk = renkler.shift();
    
        console.log(ilkRenk); //! kırmızı
        console.log(renkler); //! (2) ['mavi', 'yeşil']
    
        let names = ["arda", "kerem", "aslı", "mert"];
        let firstNames = names.shift();
        
        console.log(firstNames); //! arda
        console.log(names); //! (3) ['kerem', 'aslı', 'mert']
        ////////////////////////////////////////////////////////////////////
    d. unshift()
    Dizinin başına yeni bir eleman ekler.
        Örnek:
        let renkler = ["kırmızı", "mavi", "yeşil"];
        renkler.unshift("lacivert");
        
        console.log(renkler); //! (4) ['laciver', 'kırmızı', 'mavi', 'yeşil']
        
        let names = ["arda", "kerem", "aslı", "mert"];
        names.unshift("abdullah");
        
        console.log(names); //! (5) ['abdullah', 'arda', 'kerem', 'aslı', 'mert']
        ////////////////////////////////////////////////////////////////////
    e. splice()
    Belirli bir indeksten başlayarak eleman ekler veya kaldırır.
        Örnek:
        renkler.splice(1, 1, 'turuncu'); // 1. indeksten 1 eleman kaldır ve 'turuncu' ekle
        console.log(renkler); // ['siyah', 'turuncu', 'yeşil']

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
5. Dizi Döngüsü
Dizilerle genellikle döngüler kullanarak çalışırız. forEach() metodu bu iş için kullanışlıdır.
    Örnek:
    let renkler = ["kırmızı", "mavi", "yeşil"];
    renkler.forEach(function (renk) {
    console.log(renk); //! kırmızı
                         //! mavi
                         //! yeşil
    });

    let names = ["arda", "kerem", "aslı"];
    names.forEach(function (name) {
    console.log(name); //! arda
                         //! kerem
                         //! aslı
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
6. Uygulama
Şimdi, yukarıdaki bilgileri kullanarak basit bir uygulama yapalım

let meyveler = ['elma', 'muz', 'çilek'];

//! Yeni meyve ekle
meyveler.push("armut");
console.log(meyveler);

//! Başındaki meyveyi kaldır
meyveler.shift();
console.log(meyveler);

//! Her meyveyi yazdır
meyveler.forEach(function (meyve) {
    console.log(meyve);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Diğer Örnek Metodlar:
    names[0] = "muhammet"; //! Arda yerine Muhammet yazısı gelir. 0. indexteki elemanı değiştirdik.
    names[4]="mehmet"; //! Mehmet 4. indexteki eleman olarak gelir.[4] içine names.length olarak yazılabilir.
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
