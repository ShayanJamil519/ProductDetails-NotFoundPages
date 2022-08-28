import React from 'react'
import './ProductDetails.css'

const ProductDetails = () => {
  return (
    <>
      <div className="ProductDetailsContainer">
        {/* Image Container */}
        <div className="ImgContainer">
          {/* Left Side */}
          <div className="ImgContainer__Left">
            <div className="LeftImgBox">
              <img src="./images/shoe.png" alt="" />
            </div>

            <div className="LeftImgBox">
              <img src="./images/shoe.png" alt="" />
            </div>

            <div className="LeftImgBox">
              <img src="./images/shoe.png" alt="" />
            </div>

            <div className="LeftImgBox">
              <img src="./images/shoe.png" alt="" />
            </div>
          </div>

          {/* Right Side */}
          <div className="ImgContainer__Right">
            <img src="./images/shoe.png" alt="" />
          </div>
        </div>
        {/* Details Container */}
        <div className="DetailsContainer">
          <div className="DetailsContainer__Content">
            <h1>Men's Wool Runners</h1>
            <h5>$95 USD</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              molestiae alias distinctio vitae, iste quisquam. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Quae possimus animi
              incidunt facilis placeat labore explicabo assumenda aliquid hic
              nobis.
            </p>
          </div>

          <div className="DetailsContainer__ColorFilter">
            <p>
              <span>Classics:</span> Natural Grey (Light Grey Sole)
            </p>
            <div className="ColorFilters">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="DetailsContainer__SizeFilter">
            <div className="SizeFilter">
              <p>
                <span>Size: </span>View Fit Finder
              </p>
              <select required onChange="" value="">
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
              </select>
            </div>

            <div className="SizeFilter">
              <p>
                <span>Quantity: </span>
              </p>

              <div className="_SizeFilters">
                <button onClick="">-</button>
                <input readOnly type="number" value="" />
                <button onClick="">+</button>
              </div>
            </div>
          </div>

          <button className="SubmitButton">Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
