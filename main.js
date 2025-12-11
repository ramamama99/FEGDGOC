const input = require('prompt-sync')({ sigint: true})
const nama = input("Siapa Namamu?: ");
const umur = input("Berapa usia mu?: ");
if (umur < 21){
    let kurang = 21-umur;
    console.log(`Halo ${nama},maaf umur kamu kurang ${kurang} tahun lagi`);
}else{
    const uang = input("Berapa uangmu?: ");
  if (uang<500000){
        let uangkurang = 500000 - uang;
        console.log(`Maaf ${nama}, uang kamu hanya ${uang}, datang lagi lain kali`);
    }else{
        console.log(`Selamat Datang ${nama}`);
    }
}