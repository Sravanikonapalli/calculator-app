import {FaStar} from 'react-icons/fa'
import {IoMdPricetag} from 'react-icons/io'

import './index.css'

const ProductDetails = props => {
  const {productDetails} = props
  const {title, price, category, description, image, rate} = productDetails

  return (
    <li className="products-list">
      <img src={image} alt={title} className="image" />
      <h1 className="title">{title}</h1>
      <div className="pc">
        <div className="price-con">
          <IoMdPricetag size={15} />
          <p className="price">{price}</p>
        </div>

        <p className="category">{category}</p>
      </div>
      <div className="rating-con">
        <FaStar size={15} />
        <p className="rate">{rate}</p>
      </div>

      <p className="category">{description}</p>
    </li>
  )
}

export default ProductDetails
