import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
// import {IoIosArrowDown} from 'react-icons/io'

import Cookies from 'js-cookie'
import ProductDetails from '../ProductDetails'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

const apiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgess: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    products: [],
    apiStatus: apiStatusConsts.initial,
    showFilters: true,
    showRecommendations: false,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConsts.inProgess})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://fakestoreapi.com/products'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.map(each => ({
        id: each.id,
        title: each.title,
        price: each.price,
        category: each.category,
        description: each.description,
        image: each.image,
        rate: each.rating.rate,
        count: each.rating.count,
      }))
      this.setState({
        products: updatedData,
        apiStatus: apiStatusConsts.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConsts.failure})
    }
  }

  loaderView = () => (
    <div className="loader" data-testid="loader">
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  )

  successView = () => {
    const {products} = this.state

    return (
      <ul className="product-items">
        {products.map(each => (
          <ProductDetails key={each.id} productDetails={each} />
        ))}
      </ul>
    )
  }

  failureView = () => (
    <div className="failure-container">
      <h1>Try Again</h1>
      <p>Do not fetch the details. Can you please try again.</p>
    </div>
  )

  renderProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConsts.success:
        return this.successView()
      case apiStatusConsts.failure:
        return this.failureView()
      case apiStatusConsts.inProgess:
        return this.loaderView()
      default:
        return null
    }
  }

  toggleFilters = () => {
    this.setState(prevState => ({showFilters: !prevState.showFilters}))
  }

  toggleRecommendations = () => {
    this.setState(prevState => ({
      showRecommendations: !prevState.showRecommendations,
    }))
  }

  render() {
    const {showFilters, showRecommendations} = this.state

    return (
      <>
        <Navbar />
        <div className="main-heading-nd-para">
          <h1 className="mainheading">DISCOVER OUR PRODUCTS</h1>
          <p className="main-para">
            Lorem ipsum dolor sit amet consecturer. Amet esure...
          </p>
        </div>
        <hr className="hr-line" />
        <div className="products-page">
          <div className="buttons">
            <button
              className="toggle-button"
              type="button"
              onClick={this.toggleFilters}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <button
              className="recommend-button"
              type="button"
              onClick={this.toggleRecommendations}
            >
              Recommended
            </button>
            {showRecommendations && (
              <ul className="recommendations">
                <li>✓ Recommended</li>
                <li>Newest First</li>
                <li>Popular</li>
                <li>Price: High to Low</li>
                <li>Price: Low to High</li>
              </ul>
            )}
          </div>
          <hr className="hr-line" />
          <div className="content">
            {showFilters && (
              <div className="filters">
                <div className="custum">
                  <h3>Customizable</h3>
                  <input type="checkbox" />
                </div>
                <hr className="hr-line" />
                <div>
                  <h3>Ideal For</h3>
                  <div className="labels">
                    <label>
                      <input type="checkbox" /> Men
                    </label>
                    <label>
                      <input type="checkbox" /> Women
                    </label>
                    <label>
                      <input type="checkbox" /> Baby & Kids
                    </label>
                  </div>
                </div>
                <hr className="hr-line" />
                <h2>Filters</h2>
                <div>
                  <h3>Occasion</h3>
                  <p>All</p>
                </div>
                <hr className="hr-line" />
                <div>
                  <h3>Work</h3>
                  <p>All</p>
                </div>
                <hr className="hr-line" />
                <div>
                  <h3>Fabric</h3>
                  <p>All</p>
                </div>
                <hr className="hr-line" />
              </div>
            )}
            <div className="products-container">{this.renderProducts()}</div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
