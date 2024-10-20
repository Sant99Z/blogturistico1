
import { useState } from 'react'
import './App.css'

function App() {
  

  return (
      <div>
     <header class="hero-section">
        <div class="container">
            <h1>Bienvenido a Mi Página</h1>
            <p>Descubre nuevas oportunidades para aprender y crecer con nosotros.</p>
            <a href="#" class="cta-button">Empieza Ahora</a>
        </div>
    </header>

    <section class="features">
        <div class="container">
            <h2>Nuestras Características</h2>
            <div class="feature-item">
                <h3>Calidad</h3>
                <p>Proporcionamos contenido de la mejor calidad para ayudarte a alcanzar tus metas.</p>
            </div>
            <div class="feature-item">
                <h3>Soporte 24/7</h3>
                <p>Contamos con un equipo de soporte listo para ayudarte en cualquier momento.</p>
            </div>
            <div class="feature-item">
                <h3>Acceso Ilimitado</h3>
                <p>Accede a todos nuestros recursos sin limitaciones desde cualquier dispositivo.</p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2024 Mi Página. Todos los derechos reservados.</p>
    </footer>
      
        </div>
  )
}

export default App
