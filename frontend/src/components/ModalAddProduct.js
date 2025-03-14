export default function ModalAddProduct({ isOpen, newProducto, handleNewProductoChange, handleAddProducto, handleAddProductClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Agregar Nuevo Producto</h2>
                <form>
                    <div className="row">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={newProducto.nombre}
                            onChange={handleNewProductoChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={newProducto.descripcion}
                            onChange={handleNewProductoChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="precio">Precio</label>
                        <input
                            type="number"
                            name="precio"
                            value={newProducto.precio}
                            onChange={handleNewProductoChange}
                        />
                    </div>
                </form>
                <div className="modal-buttons">
                    <button onClick={handleAddProductClose} className="boton-secondary">Cerrar</button>
                    <button onClick={handleAddProducto}>Añadir Producto</button>
                </div>
            </div>
        </div>
    );
}
