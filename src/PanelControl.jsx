import Contenido from './Contenido';
import MenuLateral from './MenuLateral';
import './PanelControl.css';
const PanelControl =() =>{
    let usuarios = []


    return (
        <section className="panel-control">
            <MenuLateral />
            <Contenido  />
        </section>
    )
}
export default PanelControl;
