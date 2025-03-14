import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ModalConfirmDelete from './ModalConfirmDelete';
import ModalEditProduct from './ModalEditProduct';
import ModalAddProduct from './ModalAddProduct';
import ActionButtons from './ActionButtons';

export default function GridComponent() {
    const [productos, setProductos] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [editProducto, setEditProducto] = useState(null);
    const [newProducto, setNewProducto] = useState({ nombre: '', descripcion: '', precio: '' });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/productos')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Hubo un error al obtener los productos:', error));
    }, []);

    const handleEdit = (producto) => {
        setEditProducto(producto);
    };

    const handleUpdate = (producto) => {
        fetch('http://localhost:8080/api/productos', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
        })
        .then(response => response.json())
        .then(updatedProducto => {
            setProductos(productos.map(p => p.id === updatedProducto.id ? updatedProducto : p));
            setEditProducto(null); // Cerrar la modal
        })
        .catch(error => console.error('Error al actualizar el producto:', error));
    };

    const handleDelete = () => {
        setIsDeleteConfirmOpen(true);
    };

    const handleConfirmDelete = () => {
        fetch('http://localhost:8080/api/productos', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedIds),
        })
        .then(() => {
            setProductos(productos.filter(p => !selectedIds.includes(p.id)));
            setSelectedIds([]);
            setIsDeleteConfirmOpen(false);
        })
        .catch(error => console.error('Error al eliminar productos:', error));
    };

    const cancelDelete = () => {
        setIsDeleteConfirmOpen(false);
    };

    const handleCheckboxChange = (id) => {
        setSelectedIds(prevSelectedIds =>
            prevSelectedIds.includes(id)
                ? prevSelectedIds.filter(selectedId => selectedId !== id)
                : [...prevSelectedIds, id]
        );
    };

    const handleAddProductOpen = () => setIsAddModalOpen(true);
    const handleAddProductClose = () => {
        setIsAddModalOpen(false);
        setNewProducto({ nombre: '', descripcion: '', precio: '' });
    };

    const handleNewProductoChange = (e) => {
        const { name, value } = e.target;
        setNewProducto(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddProducto = () => {
        fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProducto),
        })
        .then(response => response.json())
        .then(data => {
            setProductos([...productos, data]);
            handleAddProductClose();
        })
        .catch(error => console.error('Error al agregar el producto:', error));
    };

    return (
        <>
            <ActionButtons
                handleAddProductOpen={handleAddProductOpen}
                handleDelete={handleDelete}
                selectedIds={selectedIds}
            />
            
            <ProductTable
                productos={productos}
                selectedIds={selectedIds}
                handleCheckboxChange={handleCheckboxChange}
                handleEdit={handleEdit}
            />

            <ModalConfirmDelete
                isOpen={isDeleteConfirmOpen}
                cancelDelete={cancelDelete}
                handleConfirmDelete={handleConfirmDelete}
            />

            <ModalEditProduct
                editProducto={editProducto}
                setEditProducto={setEditProducto}
                handleUpdate={handleUpdate}
            />

            <ModalAddProduct
                isOpen={isAddModalOpen}
                newProducto={newProducto}
                handleNewProductoChange={handleNewProductoChange}
                handleAddProducto={handleAddProducto}
                handleAddProductClose={handleAddProductClose}
            />
        </>
    );
}
