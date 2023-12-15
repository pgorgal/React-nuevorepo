import "../styles//Contacto.css"

function Contacto() {

    return (
        <div>
            <h3 className="column nope">Contacto</h3>
            <form  action="#">
                <div className="formulario">
                    <div className="fila">
                        <div>
                            <label className="label" for="nombre">Nombre</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingresá tu nombre" />
                        </div>
                    </div>
                    <div className="fila">
                        <div>
                            <label className="label" for="apellido">Apellido</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" id="apellido" placeholder="Ingresá tu apellido" />
                        </div>
                    </div>
                    <div className="fila">
                        <div>
                            <label className="label" for="email">Mail</label>
                        </div>
                        <div>
                            <input type="email" className="form-control" id="floatingInput" placeholder="Ingresá tu correo" />
                        </div>
                    </div>
                    <div className="fila">
                        <div className="col">
                            <label className="label" for="phone">Teléfono</label>
                        </div>
                        <div className="col">
                            <input type="phone" className="form-control" id="floatingInput" placeholder="Ingresá tu celular" />
                        </div>
                    </div>
                    <div className="fila">
                        <div className="col">
                            <label className="label" for="comentario">Comentario</label>
                        </div>
                        <div className="col">
                            <textarea type="text" maxlength="300" className="form-control" id="comentario" placeholder="Contame tu consulta" />
                        </div>
                    </div>
                    <div className="filaboton">
                        <div className="col">
                            <button type="reset" id="botonesContacto">Borrar</button>
                        </div>
                        <div className="col">
                            <button type="submit" id="botonesContacto">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Contacto