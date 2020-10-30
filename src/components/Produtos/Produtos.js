import React from 'react'
import ProductInfo from '../ProductInfo/ProductInfo'
import './Produtos.css';

class Produtos extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div className="Produtos">
        <div className="card">
          <div className="card-header">
            <h3>Produtos</h3>
          </div>

          <div className="card-body">
            <ProductInfo />
            <ProductInfo />
            <ProductInfo />
            <ProductInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Produtos;
