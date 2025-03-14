export default function ActionButtons({ handleAddProductOpen, handleDelete, selectedIds }) {
    return (
        <div className="left">
            <button onClick={handleAddProductOpen}>Añadir Producto</button>
            <button onClick={handleDelete} disabled={selectedIds.length === 0} className='boton-rojo'>
                Eliminar Selección
            </button>
        </div>
    );
}
