// Footer.jsx

function Home() {
  return (
    <main className="containerApp mt-4">
        <section>
            <h2 className="mb-4">¡Bienvenido a la Plataforma de Gestión de Alquileres!</h2>
            <p>En esta plataforma podrás administrar todas tus propiedades, inquilinos, contratos y pagos de alquiler de manera fácil y eficiente.</p>
            <p>Comienza seleccionando una opción del menú de navegación.</p>
        </section>

        <section>
            <h2 className="mb-4">Últimas Novedades</h2>
            <article>
                <h3>¡Nueva Propiedad Disponible!</h3>
                <p>Se ha añadido una nueva propiedad en el centro de la ciudad. ¡No te la pierdas!</p>
            </article>
            {/*Otros artículos con novedades o actualizaciones*/}
        </section>
    </main>
  );
}

export default Home;
