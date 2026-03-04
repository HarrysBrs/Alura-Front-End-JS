1.Para centralizar um container com conteudo dentro: 

.parent-container {
  position: relative; /* O pai precisa ser relativo */
  width: fit-content;
}

.imagem-fundo {
  display: block;
  width: 100%;
  height: auto;
}

.conteudo {
  position: absolute; /* O conteúdo flutua sobre o pai */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza perfeitamente */
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Um fundo semi-transparente ajuda na leitura */
  padding: 20px;
}