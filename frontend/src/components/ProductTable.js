export default function ProductTable({ productos, selectedIds, handleCheckboxChange, handleEdit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr key={producto.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(producto.id)}
                                onChange={() => handleCheckboxChange(producto.id)}
                            />
                        </td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>
                            <button onClick={() => handleEdit(producto)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
