import useHome from "./useHome";

function Home() {
  const {
    name,
    input,
    handleInputChange,
    fetchGithubApi,
    userUrl,
  } = useHome();

  return (
    <div className="Container">
      <h1>FIAP</h1>
      <h2>Educação que transforma!</h2>
      <h3>Bem-vindo, {name}</h3>
      <div className="Content">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Digite seu usuário"
        />
        <button onClick={fetchGithubApi}>Buscar</button>
      </div>
      <a href={userUrl}>{userUrl}</a>
    </div>
  );
}

export { Home };
