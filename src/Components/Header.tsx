export default function Header() {
  return (
    <header className="header flex justify-between items-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
        <h1 className="header__title text-lg sm:text-xl md:text-2xl lg:text-3xl">Contador de calorías</h1>
        <button className="header__button text-sm sm:text-base md:text-lg px-4 py-2">Reiniciar App</button>
    </header>
  );
}
