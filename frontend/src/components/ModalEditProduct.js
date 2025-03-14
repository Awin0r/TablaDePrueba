export default function ModalEditProduct({ editProducto, setEditProducto, handleUpdate }) {
    if (!editProducto) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Editar Producto</h2>
                <form>
                    <div className="row">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            value={editProducto.nombre}
                            onChange={(e) => setEditProducto({ ...editProducto, nombre: e.target.value })}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            value={editProducto.descripcion}
                            onChange={(e) => setEditProducto({ ...editProducto, descripcion: e.target.value })}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="precio">Precio</label>
                        <input
                            type="number"
                            id="precio"
                            value={editProducto.precio}
                            onChange={(e) => setEditProducto({ ...editProducto, precio: e.target.value })}
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="button" onClick={() => setEditProducto(null)} className="boton-secondary">Cerrar</button>
                        <button type="button" onClick={() => handleUpdate(editProducto)}>Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
