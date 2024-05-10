/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="container mx-auto px-4 mt-8 text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">¡Bienvenido a Rentify!</h1>
        <p className="text-lg text-gray-300">Tu destino para unas vacaciones inolvidables</p>
        <Link to="/habitaciones" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 mt-8 rounded-full transition duration-300">Explorar habitaciones</Link>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Descubre lo que Rentify tiene para ofrecerte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Variedad de habitaciones</h3>
            <p className="text-gray-300">Encuentra la habitación perfecta para tu escapada, ya sea que viajes solo o en grupo.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Reservas flexibles</h3>
            <p className="text-gray-300">¡Reserva con confianza! Ofrecemos políticas de cancelación flexibles para adaptarnos a tus necesidades.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Atención al cliente</h3>
            <p className="text-gray-300">Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para ayudarte en lo que necesites.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <blockquote className="italic text-gray-300 mb-4">Increíble experiencia! Las habitaciones son hermosas y el servicio es excelente.</blockquote>
            <cite className="font-semibold">María G.</cite>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <blockquote className="italic text-gray-300 mb-4">Me encantó mi estancia en Rentify. Definitivamente volveré en el futuro.</blockquote>
            <cite className="font-semibold">Juan M.</cite>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <blockquote className="italic text-gray-300 mb-4">La mejor opción para mis vacaciones. Altamente recomendado!</blockquote>
            <cite className="font-semibold">Laura P.</cite>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
