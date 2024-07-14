const listaDeProdutos = () => {
  return fetch("https://6692e6f4fe34d30c92370b67.mockapi.io/v1/geek")
  .then((resposta) => resposta.json())
  .catch((erro) => console.log(erro));
};

const criaProduto = (nome, valor, imagem) => {
  return fetch("https://6692e6f4fe34d30c92370b67.mockapi.io/v1/geek", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          nome,
          valor,
          imagem,
      })
  })
  .then((resposta) => resposta.json())
  .catch((erro) => console.log(erro));
}

const deletaProduto = (id) => {
  return fetch(`https://6692e6f4fe34d30c92370b67.mockapi.io/v1/geek/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then((resposta) => resposta.json())
  .catch((erro) => console.log(erro));
}

export const servicosProdutos = {
  listaDeProdutos,
  criaProduto,
  deletaProduto,
};