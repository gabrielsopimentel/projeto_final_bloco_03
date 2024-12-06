function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Seja Bem Vindo!</h2>
            <p>Farmácia</p>
          </div>

          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://icr.usp.br/wp-content/uploads/2017/12/Instituto-da-crianc%CC%A7a-farmacia.jpghttps://i.imgur.com/VpwApCU.png"
              alt="Imagem da Página Home"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
