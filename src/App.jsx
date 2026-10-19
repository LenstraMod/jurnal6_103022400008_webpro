import { useState } from "react";
import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";

const gayaJudul = {
  color : '#1f3a5f',
  fontSize : '28px'
};

function App() {
  const username = "Abe";
  const jam = 9;

  const dataAwal = [
      {id: 1, judul: "Nasi Ayam Geprek", kategori: "Makanan", harga:"17.000"},
      {id: 2, judul: "Mie Ayam", kategori: "Makanan", harga:"15.000"},
      {id: 3, judul: "Es Teh", kategori: "Minuman", harga:"8.000"},
      {id: 2, judul: "Bakso", kategori: "Makanan", harga:"12.000"},
      {id: 3, judul: "Es Jeruk", kategori: "Minuman", harga:"8.000"}, 
  ];
  const [daftarMenu, setDaftarMenu] = useState(dataAwal);

  const [pesanan, setPesanan] = useState({});

  function deletes(props){

  }

  return (
    <>
      <div className="">
        <h1 className='judul' style={gayaJudul}>Kantin {username}</h1>
        <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
        <p>Saldo awal kantin : {8 * 1000}</p>
        <button disabled>Bayar</button>
      </div>

      <Panel judul="Menu hari ini">
        {daftarMenu.length === 0 ? (
          <p>Semua menu habis</p>
        ):(
           <div className="daftar">
              {daftarMenu.map((m) => (
                <KartuMenu key={m.id} nama={m.nama} kategori={m.kategori} harga={m.harga} />
              ))}
           </div> 
        )}
      </Panel>
    </>
  )
}

export default App
