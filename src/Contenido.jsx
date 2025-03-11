import Card from "./Card"
import { usuarios } from "./database"


function Contenido({}){
    return (
        <section className="panel-control-section">
            {
                usuarios.map((usuario)=> {
                    return <Card usuario={usuario}/>
                 })
            }
        </section>
    )
}
export default Contenido