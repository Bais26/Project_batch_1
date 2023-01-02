// no 1
let databuah = [
    {namabuah:"Nanas",warna:"kuning",biji:"tidak ada",harga:9000},
    {namabuah:"jeruk",warna:"orange",biji:"ada",harga:8000},
    {namabuah:"pisang",warna:"kuning",biji:"tidak ada",harga:5000},
    {namabuah:"semangka",warna:"merah & hijau",biji:"ada",harga:10000},
]
let bijibuah = databuah.filter(buah => buah.biji === "ada");
console.log

// no 2
var arr1 = ['aku','sayang','aku','sama','kamu']
arr1.splice(1,2,'sayang')
console.log(arr1.join(' '));

// no 3
var katapertama="saya";
var katakedua="senang";
var kataketiga="belajar";
var katakeemapat="java script";
var res=katapertama.concat[katakedua, kataketiga, katakeempat];
console.log(katapertama,katakedua,kataketiga,katakeempat);

//no4
const word = 'javascript';
const second = 'is';
const third = 'awesome';
const OutputGabunganVariable=(`${word} ${second}`)