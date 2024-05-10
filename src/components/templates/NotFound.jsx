//tailwind 
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
    <h1 className="text-5xl font-bold text-pink-800 mb-8">¡Oops!</h1>
    <p className="text-2xl text-primary mb-4 border border-black">¡No pudimos encontrar lo que buscabas!</p>
    <img src="../../assets/404.jpg" alt="404 Not Found" className="w-64 h-64 mb-8" />
    <p className="text-lg text-pink-800">Parece que te has perdido en el ciberespacio.</p>
    <p className="text-lg text-pink-800">Pero no te preocupes, siempre puedes volver haciendo clic <a href="/" className="text-blue-800 font-semibold hover:underline">aquí</a>.</p>
  </div>);
}

export default NotFound;
