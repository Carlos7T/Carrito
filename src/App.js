import React,{ Fragment, useState} from "react";

import Header from './components/Header';

import Footer from './components/Footer';

import Producto from './components/Producto';

import Carrito from './components/Carrito';


function App() {

  //Crear listado de productos
  const [productos, guardarProductos ]= useState([
    { id: 1, nombre: 'Camisa React', precio: 50},
    { id: 2, nombre: 'Camisa JS', precio: 20},
    { id: 3, nombre: 'Camisa Java', precio: 10},
    { id: 4, nombre: 'Camisa PHP', precio: 15},
    { id: 5, nombre: 'Camisa HTML', precio: 30},
  ]);

  //State para carrito de compras
  const [carrito, agregarProducto]= useState([]);

  const fecha = new Date().getFullYear();




  return (
    <Fragment>
    
      <Header
      titulo= 'Tienda Virtual' 
     
      />
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        
        productos={productos}
        agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
      />

      <Footer
        fecha={fecha}
      
      />
      </Fragment>
  );
}

export default App;
