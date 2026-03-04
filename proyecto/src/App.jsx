import { useState } from "react";
import "./App.css";

function App() {
  /* ======================
     ESTADOS
  ====================== */
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Bicicleta", categoria: "Deportes", zona: "Centro", precio: 200 },
    { id: 2, nombre: "Sofá usado", categoria: "Hogar", zona: "Norte", precio: 500 },
  ]);

  const [filtro, setFiltro] = useState("");

  const [nuevo, setNuevo] = useState({
    nombre: "",
    categoria: "",
    zona: "",
    precio: "",
  });

  /* ======================
     FUNCIONES
  ====================== */
  const manejarCambio = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregarProducto = (e) => {
    e.preventDefault();

    if (!nuevo.nombre || !nuevo.categoria || !nuevo.zona || !nuevo.precio) {
      alert("Completa todos los campos");
      return;
    }

    setProductos([
      ...productos,
      {
        id: Date.now(),
        nombre: nuevo.nombre,
        categoria: nuevo.categoria,
        zona: nuevo.zona,
        precio: Number(nuevo.precio),
      },
    ]);

    setNuevo({ nombre: "", categoria: "", zona: "", precio: "" });
  };

  const productosFiltrados = productos.filter((p) =>
    p.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  /* ======================
     RENDER
  ====================== */
  return (
    <div className="container">
      <h1>🛒 Reutiliza y Conecta</h1>

      {/* FILTRO */}
      <input
        type="text"
        placeholder="Filtrar por categoría..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {/* FORMULARIO */}
      <form className="form" onSubmit={agregarProducto}>
        <h2>➕ Agregar objeto usado</h2>

        <input
          name="nombre"
          placeholder="Nombre del objeto"
          value={nuevo.nombre}
          onChange={manejarCambio}
        />

        <input
          name="categoria"
          placeholder="Categoría"
          value={nuevo.categoria}
          onChange={manejarCambio}
        />

        <input
          name="zona"
          placeholder="Zona"
          value={nuevo.zona}
          onChange={manejarCambio}
        />

        <input
          name="precio"
          type="number"
          placeholder="Precio"
          value={nuevo.precio}
          onChange={manejarCambio}
        />

        <button type="submit">Agregar</button>
      </form>

      {/* LISTA DE PRODUCTOS */}
      <div className="lista">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.nombre}</h3>
            <p><b>Categoría:</b> {p.categoria}</p>
            <p><b>Zona:</b> {p.zona}</p>
            <p className="precio">💲 {p.precio}</p>

            <button onClick={() => alert("Contacto próximamente")}>
              Contactar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;