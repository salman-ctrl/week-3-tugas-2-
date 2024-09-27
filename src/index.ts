// STUDI KASUS 1

let namaPahlawan:string="Arion";
let umur:number=30;

function bertarung(nama:string,umur:number ):void{
    if(umur>=30){
        console.log(`${nama} masih sanggup bertarung`);
    }else{
        console.log(`${nama}Sudah tidak sanggup`);
    }
}

bertarung(namaPahlawan,umur);


// STUDI KASUS 2
let emas:number=5000;
let persediaanMakanan:number=120;
let prajurit:number=200;


// STUDI KASUS 3

function tambahEmas(emasAwal:number,hasilPetualang:number):number{
    return emasAwal + hasilPetualang;
}
let hasilEmas = tambahEmas(emas,1500);
let pengalaman:number=0;

pengalaman += 75;
console.log(`Jumlah emas sekarang yaitu ${hasilEmas} dan pengalaman arion bertambah menjadi ${pengalaman} XP`);

// STUDI KASUS 4

const damageLuka:number=5;
function kurangiKesehatan(kesehatanAwal:number,jumlahLuka:number):number{
    return kesehatanAwal-(damageLuka*jumlahLuka);
}
const kesehatanAwal:number=100;
let hasilKesehatan = kurangiKesehatan(kesehatanAwal,6);
if(hasilKesehatan<0){
    console.log(`darah tinggal ${hasilKesehatan}sudah tidak bisa bertarung`);
}else{
    console.log(`Darah masih sisa ${hasilKesehatan} dan prajurit masih siap bertempur sampai titik darah terakhir!!`)
}

// STUDI KASUS 5
function tampilkanHasil():void{
    console.log(`Pahlawan ${namaPahlawan} telah berhasil mengumpulkan emas sebanyak ${hasilEmas} dan memperoleh poin pengalaman sebanyak ${pengalaman}`);
}
tampilkanHasil();