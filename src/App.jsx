import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";

const gayaJudul = {
  color : '#1f3a5f',
  fontSize : '28px'
};

function App() {
  const username = "Abe";
  const jam = 9;

  return (
    <>
      <div className="">
        <h1 className='judul' style={gayaJudul}>Kantin {username}</h1>
        <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
        <p>Saldo awal kantin : {8 * 1000}</p>
        <button disabled>Bayar</button>
      </div>

      <Panel judul="Menu hari ini"/>
    </>
  )
}

export default App
