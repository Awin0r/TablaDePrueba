package com.ejemplo.productos.controller;

import com.ejemplo.productos.model.Producto;
import com.ejemplo.productos.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {
    
    @Autowired
    private ProductoRepository productoRepository;
    
    @GetMapping
    public List<Producto> obtenerProductos() {
        return productoRepository.findAll();
    }
    
    @DeleteMapping
    public void borrarProductos(@RequestBody List<Long> ids) {
        productoRepository.deleteAllById(ids);
    }
    
    @PutMapping
    public Producto actualizarProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @PostMapping
    public Producto agregarProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto); // Guardar el producto en la base de datos
    }
}

