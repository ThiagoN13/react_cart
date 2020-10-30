import React from 'react'
import ProductInfo from '../ProductInfo/ProductInfo'
import './Carrinho.css';

class Carrinho extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div className="Carrinho">
        <div className="card">
          <div className="card-header">
            <h3>Carrinho</h3>
          </div>

          <div className="card-body">
            <ProductInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Carrinho;
