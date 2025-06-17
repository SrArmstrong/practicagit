import './App.css'

function App() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Página Landing-Page</h1>
        <p>Página creada con la finalidad de ejemplificar el uso de githupage</p>
        <img src="./src/assets/Knight.png" alt="Logo" className="landing-logo" />
      </header>

      <section className="landing-benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Rápida implementación sin complicaciones</li>
          <li>Seguridad y privacidad garantizadas</li>
          <li>Herramientas de análisis avanzadas</li>
          <li>Diseño responsivo y moderno</li>
        </ul>
      </section>

      <section className="landing-cta">
        <button className="cta-button">Empieza Ahora</button>
      </section>

      <footer className="landing-footer">
        <p>© 2025 Sergio Pérez Aldavalde. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
