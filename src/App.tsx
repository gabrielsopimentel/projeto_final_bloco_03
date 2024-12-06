import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias.tsx";
import FormCategoria from "./components/categorias/formCategoria/FormCategoria.tsx";
import DeleteCategoria from "./components/categorias/deleteCategoria/DeleteCategoria.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App