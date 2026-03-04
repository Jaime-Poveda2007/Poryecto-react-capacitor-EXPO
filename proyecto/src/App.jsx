return (
  <div className="container">

    {/* HERO SECTION */}
    <div className="hero">
      <h1>🛒 Reutiliza y Conecta</h1>
      <p>Compra y vende objetos usados cerca de ti ♻️</p>

      <div className="filtros">
        <input
          type="text"
          name="nombre"
          placeholder="🔍 Buscar productos..."
          value={filtros.nombre}
          onChange={manejarFiltro}
        />

        <select name="categoria" value={filtros.categoria} onChange={manejarFiltro}>
          <option value="">Todas las categorías</option>
          <option value="Hogar">Hogar</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Deportes">Deportes</option>
        </select>

        <select name="zona" value={filtros.zona} onChange={manejarFiltro}>
          <option value="">Todas las zonas</option>
          <option value="Centro">Centro</option>
          <option value="Norte">Norte</option>
          <option value="Sur">Sur</option>
        </select>
      </div>
    </div>

    {/* FORMULARIO */}
    <form className="form" onSubmit={agregarProducto}>
      <h2>➕ Publicar producto</h2>

      <input
        name="nombre"
        placeholder="Nombre del producto"
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

      <button type="submit">Publicar</button>
    </form>

    {/* PRODUCTOS */}
    <h2 className="titulo-lista">Productos disponibles</h2>

    <div className="lista">
      {productosFiltrados.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.nombre}</h3>
          <p><b>{p.categoria}</b></p>
          <p>📍 {p.zona}</p>
          <p className="precio">$ {p.precio}</p>

          <button className="btn-contacto">
            Contactar
          </button>
        </div>
      ))}
    </div>
  </div>
);