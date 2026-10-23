import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../modelos/producto';

@Component({
  imports: [FormsModule],
  selector: 'app-formularios',
  styleUrl: './formularios.css',
  templateUrl: './formularios.html',
})
export class Formularios {
  productos: Producto[] = [];
  producto: Producto;
  categorias = [
    "Categoría 1", 
    "Categoría 2", 
    "Categoría 3", 
    "Categoría 4",
  ];

  constructor() {
    this.productos = [
      {
        id: 1,
        nombre: 'Manzanas',
        descripcion: 'Manzanas rojas',
        precio: 45,
        categoria: "Frutas"
      },
      {
        id: 2,
        nombre: 'Papaya',
        descripcion: 'Sólo papayas',
        precio: 50,
        categoria: "Frutas"
      },
      {
        id: 3,
        nombre: 'Plátanos',
        descripcion: 'Oro parece, platano es',
        precio: 60,
        categoria: "Frutas"
      },
      {
        id: 4,
        nombre: 'Mango',
        descripcion: 'Mango',
        precio: 55,
        categoria: "Frutas"
      },
      {
        id: 5,
        nombre: 'Piña',
        descripcion: '¿Quien vive?',
        precio: 45,
        categoria: "Frutas"
      }
    ];
    this.producto = {
      id: this.productos.length + 1,
      nombre: "",
      descripcion: "",
      precio: 0,
      categoria: ""
    };
  }

  // Mostrar formulario
  mostrarFormulario: boolean = false;
  verformulario() {
    this.mostrarFormulario = !this.mostrarFormulario
    this.inicializarFormulario()
  }

  // Inicializar Formulario
  inicializarFormulario() {
    this.producto = {
      id: this.productos.length + 1,
      nombre: "",
      descripcion: "",
      precio: 0,
      categoria: ""
    };
  };

  // Método clasico para añadir
  insertarFormulario() {
    this.productos.push(
      {
        id: this.producto.id,
        nombre: this.producto.nombre,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        categoria: this.producto.categoria,
      }
    );
    this.verformulario()
  }

  // Método moderno para añadir
  insertarFormulario2() {
    this.productos.push({ ...this.producto }),
      this.verformulario()
  }

  // Método clásico para eliminar de lista
  borrar(dato: number) {
    for (let index = 0; index < this.productos.length; index++) {
      if (dato == this.productos[index].id) {
        this.productos.splice(index, 1);
        this.actualizar()
      }
    }
  }

  // Método moderno para eliminar de lista
  borrarPorListado(dato: number) {
    this.productos = this.productos.filter(producto => producto.id !== dato);
    this.actualizar()
  }

  // Actualizar IDs
  actualizar() {
    for (let index = 0; index < this.productos.length; index++) {
      this.productos[index].id = index + 1;
    }
  }

  // Método para seleccionar elemento
  seleccionar(dato: Producto) {
    this.producto = {...dato};
    this.mostrarFormulario = true;
  }
}
