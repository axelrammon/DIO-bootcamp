import React from 'react';

const buttonA = <button>Histórico</button>;
const buttonB = <button>Cadastrar</button>;

const hasCustomer = true;

function App() {
  
  const renderShowHistory = () => (
    <div>
      Clique no botão para visualizar o Histórico
      <br />
      {buttonA}
    </div>
  )
  
  const renderAddCustomer = () => (
    <div>
      Clique para cadastrar cliente
      <br />
      {buttonB}
    </div>
  )

  const showCustomer = () => {
    if (!hasCustomer) return null

    return(
      <div>
        <h1>Nome cliente: Axel</h1>
      </div>
    )
  }

  return (
    <div>
      <p>Digital</p>
      <p>Welcome</p>
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
}

export default App;
