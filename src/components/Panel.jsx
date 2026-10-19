import KartuMenu from "./KartuMenu";

function Panel({judul, children}){
    return(
        <div className="panel">
            <h1>{judul}</h1>
            {children}
        </div>
    )
}
export default Panel;