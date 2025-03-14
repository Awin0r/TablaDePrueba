export default function ModalConfirmDelete({ isOpen, cancelDelete, handleConfirmDelete }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>¿Estás seguro de que deseas eliminar los productos seleccionados?</h2>
                <div className="modal-buttons">
                    <button onClick={cancelDelete} className="boton-secondary">Cancelar</button>
                    <button onClick={handleConfirmDelete}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}
