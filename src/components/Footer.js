import "../styles//Footer.css"
import Mapa from "./Iframe"
import Insta from "./Instagram"

function Footer() {

    return (
        <div className="contenido">
            <div className="footer">
                <h3 id="titulo">Donde estoy</h3>
                <Mapa /> 
            </div>
            <div className="footer">
                <h3 id="titulo">Redes</h3>
                <div className="redes">
                    <Insta />
                    <a href="https://instagram.com/bendita_corteza?igshid=NTc4MTIwNjQ2YQ==" className="link">Seguime en Instagram:                        @Bendita_Corteza</a>
                </div>
            </div>
            <div className="footer">
                <h3 id="titulo">Mapa del Sitio</h3>
                <a className="link" href="./sitemap.xml">Link al Sitio</a>
            </div>
        </div>
    )
}

export default Footer