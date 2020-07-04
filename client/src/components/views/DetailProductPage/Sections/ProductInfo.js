import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Descriptions } from 'antd'
import { ButtonContainer } from '../../StyledComponents/Button'

function ProductInfo(props) {

  const user = useSelector(state => state.user)
    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
          <Descriptions.Item label="Company">{Product.company}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p className='cart-page-anchor' ><a href="/login">Log In</a> to buy products.</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
          <Descriptions.Item label="Company">{Product.company}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonContainer
            onClick={addToCarthandler}
          >
            Add to Cart
          </ButtonContainer>
        </div>
      </div>
    )
  }
}

export default ProductInfo