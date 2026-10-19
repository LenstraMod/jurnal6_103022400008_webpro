import { useState } from "react";
import Labelharga from "./LabelHarga";

function KartuMenu(props){

    const [jumlah,setJumlah] = useState(0);
    const [pesanan, setPesanan] = useState("");

    return(
        <div className="kartu">
            <h3>{props.nama}</h3>
            <p>{props.kategori ? props.kategori: "Makanan"}</p>
            <Labelharga harga={props.harga} />
            <div className="button-area kontrol">
                <button onClick={() => setJumlah(jumlah - 1)} disabled={jumlah === 0}>-</button>
                <p>{jumlah}</p>
                <button onClick={() => setJumlah(jumlah + 1)}>+</button>
            </div>
            <p>{jumlah == 0 ? "Belum Dipesan" : "Subtotal: " + (jumlah * props.harga)}</p>

            {jumlah >= 5 && <span className="badge">Pesanan Banyak</span>}
            <p>catatan Pesanan: </p>
            <input type="text" value={pesanan} onChange={(e) => setPesanan(e.target.value)} />
            <p>Catatan Pesanan : {pesanan}</p>
        </div>
    )
}

export default KartuMenu;   