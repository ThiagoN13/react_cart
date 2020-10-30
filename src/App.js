import React from 'react'
import Produtos from './components/Produtos/Produtos'
import Carrinho from './components/Carrinho/Carrinho'
import './App.css';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <Produtos />
          </div>

          <div className="col-4">
            <Carrinho />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
