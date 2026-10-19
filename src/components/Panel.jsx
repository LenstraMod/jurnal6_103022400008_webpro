import KartuMenu from "./KartuMenu";

function Panel(props){
    // const Menu = [
    //     {judul: "Nasi Ayam Geprek", kategori: "Makanan", harga:"17.000"},
    //     {},
    //     {},
    // ]
    const n = 8
    return(
        <div className="panel">
            <h1>{props.judul}</h1>
            <KartuMenu nama="Nasi ayam Geprek" harga={1000 + (n * 1000)} />
            <KartuMenu nama="Es Teh Lemon" kategori="Minuman" harga="13700" />
            <KartuMenu nama="Nasi ayam Geprek" harga="13700" />
        </div>
    )
}
export default Panel;