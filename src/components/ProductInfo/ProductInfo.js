import React from 'react'
import './ProductInfo.css';

class ProductInfo extends React.Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div className="ProductInfo">
        <div className="row">
          <div className="col">
            <img className="product-img" src="https://www.drogariaminasbrasil.com.br/media/product/5b6/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg"></img>
          </div>

          <div className="col">
            <h4>Chocolate branco</h4>
            <span>R$ 12,00</span>

            <div className="row">
              <div className="col-info">
                <b>R$ 8,00</b>
              </div>

              <div className="col">
                2x
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
