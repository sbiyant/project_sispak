
let i;
const container = document.querySelector(".section");

const pertanyaan = [
  '<h1>Pengecekan SNOT</h1>',
  "<h1>Kurus (nyilet)</h1>",
  "<h1>Pengecekan Tetelo (Newcastle Disease)</h1>",
  "<h1>Pengecekan Cacar (Avian Pox)</h1>",
  "<h1>Pengecekan Mata Berair</h1>",
  "<h1>Pengecekan Penyakit Kutu Burung</h1>",
  "<h1>Pengecekan Gangguan Pernafasan</h1>"
];

let jawabanSNOT = new Array();

function gejalaSNOT() {
  container.innerHTML =
    `${pertanyaan[0]}
    <input type='checkbox' name='mata'  value='0.8'>Pada bagian dalam mata tumbuh daging atau gajih</br>
    <input type='checkbox' name='mata'  value='0.6'>Sering menggosokkan mata ke tangkringan</br>
    <input type='checkbox' name='mata'  value='0.9'>Pada bagian kelopak mata akan terjadi pembengkakan berwarna merah</br>
    </br><button onclick='cekSNOT()'>Berikutnya</button>`;
}

let hasil = new Array();

function cekSNOT() {
  const cb = document.getElementsByName("mata");
  let mata = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      mata = +cb[i].value;
      jawabanSNOT[i] = mata;
    } else jawabanSNOT[i] = 0;
  }
  jawabanSNOT = arrayFilter(jawabanSNOT, 0);
  hitung(jawabanSNOT, 0);
  gejalaKurus();
}

function arrayFilter(arr, value) {
  return arr.filter(ele => ele != value);
}

function hitung(arr, value) {    
    let a = arr[0];
    for (i = 1; i < arr.length; i++) {
      let b = arr[i];
      hasil[value] = rumus(a, b);
      a = hasil[value];
    }
    if (arr.length <= 1) {
      hasil[value] = a||0;
    }
  }

function rumus(x, y) {
  if (x > 0 && y > 0) {
    return x + y * (1 - x);
  } else if (x < 0 && y < 0) {
    return x + y * (1 + x);
  } else {
    return (x + y) / (1 - Math.min(Math.abs(x, y)));
  }
}

let jawabanKurus = new Array();

function gejalaKurus() {
  container.innerHTML =
    `${pertanyaan[1]}<input type='checkbox' name='kurus'  value='0.9'>Burung terlihat lesu</br>
    <input type='checkbox' name='kurus'  value='0.8'>Bulu mengembang</br>
    <input type='checkbox' name='kurus'  value='0.9'>Burung tidak mau berkicau</br>
    <input type='checkbox' name='kurus'  value='0.9'>Garis tulang pada bagian tembolok terlihat</br>
    </br><button onclick='cekKurus()'>Berikutnya</button>`;
}

function cekKurus() {
  const cb = document.getElementsByName("kurus");
  let kurus = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      kurus = +cb[i].value;
      jawabanKurus[i] = kurus;
    } else jawabanKurus[i] = 0;
  }
  jawabanKurus = arrayFilter(jawabanKurus, 0);
  hitung(jawabanKurus, 1);
  gejalaTetelo();
}

let jawabanTetelo = new Array();

function gejalaTetelo() {
  container.innerHTML =
    `${pertanyaan[2]}
    <input type='checkbox' name='tetelo'  value='0.9'>Leher miring atau berputar</br>
    <input type='checkbox' name='tetelo'  value='0.9'>Keseimbangan tubuh hilang hingga sempoyongan</br>
    <input type='checkbox' name='tetelo'  value='0.6'>Dari lubang mulut keluar cairan kental</br>
    <input type='checkbox' name='tetelo'  value='0.8'>Badan gemetar</br>
    <input type='checkbox' name='tetelo'  value='0.5'>Pucat</br>
    </br><button onclick='cekTetelo()'>Berikutnya</button>`;
}

function cekTetelo() {
  const cb = document.getElementsByName("tetelo");
  let tetelo = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      tetelo = +cb[i].value;
      jawabanTetelo[i] = tetelo;
    } else jawabanTetelo[i] = 0;
  }
  jawabanTetelo = arrayFilter(jawabanTetelo, 0);
  hitung(jawabanTetelo, 2);
  gejalaCacar();
}

let jawabanCacar = new Array();

function gejalaCacar() {
  container.innerHTML =
    `${pertanyaan[3]}
    <input type='checkbox' name='cacar'  value='0.9'>Terdapat kutil</br>
    <input type='checkbox' name='cacar'  value='0.5'>Kurus dan lemah</br>
    </br><button onclick = 'cekCacar()'>Berikutnya</button>`;
}

function cekCacar() {
  const cb = document.getElementsByName("cacar");
  let cacar = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      cacar = +cb[i].value;
      jawabanCacar[i] = cacar;
    } else jawabanCacar[i] = 0;
  }
  jawabanCacar = arrayFilter(jawabanCacar, 0);
  hitung(jawabanCacar, 3);
  gejalaMataBerair();
}

let jawabanMataBerair = new Array();

function gejalaMataBerair() {
  container.innerHTML =
    `${pertanyaan[4]}
    <input type='checkbox' name='mataBerair' value='0.9'>Bercak merah pada kelopak mata</br>
    <input type='checkbox' name='mataBerair' value='0.9'>Mata mengeluarkan air secara berlebihan</br>
    <input type='checkbox' name='mataBerair' value='0.9'>Mata tidak bisa dibuka serta mata akan mengeluarkan belek</br>
    </br><button onclick = 'cekMataBerair()'>Berikutnya</button>`;
}

function cekMataBerair() {
  const cb = document.getElementsByName("mataBerair");
  let mataBerair = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      mataBerair = +cb[i].value;
      jawabanMataBerair[i] = mataBerair;
    } else jawabanMataBerair[i] = 0;
  }
  jawabanMataBerair = arrayFilter(jawabanMataBerair, 0);
  hitung(jawabanMataBerair, 4);
  gejalaKutuBurung();
}

let jawabanKutuBurung = new Array();

function gejalaKutuBurung() {
  container.innerHTML =
    `${pertanyaan[5]}
    <input type='checkbox' name='kutuBurung' value='0.7'>Burung tidak mau diam dan tampak gelisah</br>
    <input type='checkbox' name='kutuBurung' value='0.9'>Warna bulu burung terlihat kusam</br>
    <input type='checkbox' name='kutuBurung' value='0.9'>Bulu-bulu halus rontok</br>
    <input type='checkbox' name='kutuBurung' value='0.7'>Suka mematuki tubuhnya sendiri</br>
    </br><button onclick = 'cekKutuBurung()'>Berikutnya</button>`;
}

function cekKutuBurung() {
  const cb = document.getElementsByName("kutuBurung");
  let kutuBurung = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      kutuBurung = +cb[i].value;
      jawabanKutuBurung[i] = kutuBurung;
    } else jawabanKutuBurung[i] = 0;
  }
  jawabanKutuBurung = arrayFilter(jawabanKutuBurung, 0);
  hitung(jawabanKutuBurung, 5);
  gejalaGangguanPernafasan();
}

let jawabanGangguanPernafasan = new Array();

function gejalaGangguanPernafasan() {
  container.innerHTML =
    `${pertanyaan[6]}
    <input type='checkbox' name='gangguanPernafasan'  value='0.9'>Sering membuka paruh karena kesulitan bernafas</br>
    <input type='checkbox' name='gangguanPernafasan'  value='0.6'>Menggesek-gesekkan paruh pada tangkringan</br>
    </br><button onclick='cekGangguanPernafasan()'>Berikutnya</button>`;
}

function cekGangguanPernafasan() {
  const cb = document.getElementsByName("gangguanPernafasan");
  let gangguanPernafasan = "";
  for (i = 0; i < cb.length; i++) {
    if (cb[i].type == "checkbox" && cb[i].checked == true) {
      gangguanPernafasan = +cb[i].value;
      jawabanGangguanPernafasan[i] = gangguanPernafasan;
    } else jawabanGangguanPernafasan[i] = 0;
  }
  jawabanGangguanPernafasan = arrayFilter(jawabanGangguanPernafasan, 0);
  hitung(jawabanGangguanPernafasan, 6);
  validasi();
}

let teksBaru;


function validasi() {
  for (i = 0; i < hasil.length; i++) {
    if (hasil[i] == isNaN) {
      hasil[i] = 0;
    }
  }
  hasil = hasil.map((e) => e.toFixed(2));
  hasil = hasil.map((e) => e * 100);
  result();
}


function kelayakan() {
  hasil[0] *= -0.6;
  hasil[1] *= -0.86;
  hasil[2] *= -0.6;
  hasil[3] *= -0.7;
  hasil[4] *= -0.1;
  hasil[5] *= 0.1;
  hasil[6] *= -0.4;

  let hasilMin = Math.min.apply(null, hasil);
  if (hasilMin < -50) {
    teksBaru = 'Burung tersebut tidak layak dibeli';
  }else {
    teksBaru = 'Burung tersebut layak dibeli';
  }
  return '';//avoid the 'undefined'
}

function result() {
  container.innerHTML = 
    `
    <h1>Hasil pengujian</h1>
    <table>
        <tr>
            <td>Gejala Penyakit SNOT = </td><td>&emsp;${hasil[0]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Kurus (Nyilet) = </td><td>&emsp;${hasil[1]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Tetelo (Newcastle Disease) = </td><td>&emsp;${hasil[2]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Cacar (Avian Pox) = </td><td>&emsp;${hasil[3]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Mata Berair = </td><td>&emsp;${hasil[4]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Kutu Burung = </td><td>&emsp;${hasil[5]} %</td>
        </tr>
        <tr>
            <td>Gejala Penyakit Gangguan Pernafasan = </td><td>&emsp;${hasil[6]} %</td>
        </tr>
    </table>
    ${kelayakan()}
    <h1>${teksBaru}</h1>
    </div>
    `;
}
