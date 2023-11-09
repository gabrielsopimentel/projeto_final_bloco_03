import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full bg-slate-500 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          Projeto Final Bloco 3
          <div className="flex gap-4">
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarCategoria" className="hover:underline">
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
