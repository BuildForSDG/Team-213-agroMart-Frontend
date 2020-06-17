import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
      <ul className="content row products">
        {/*Fetch Data */}
        {data.products.map((product) => (
          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <Link className="links" to={"/product/" + product._id}>
                <img
                  src={product.image}
                  alt="fresh-tomatoe"
                  className="prod-img"
                />
              </Link>

              <div className="prod-name">
                <Link className="links" to={"/product/" + product._id}>
                  {product.name}
                </Link>
              </div>
              <div className="prod-category">{product.category}</div>
              <div className="prod-price"> GHC {product.price}</div>
              <div className="prod-rating">
                {product.rating} Stars {product.review}
              </div>
            </div>
          </li>
        ))}
        {/*
          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="/images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

          <li className="col-12 col-md-6 col-lg-4">
            <div className="product">
              <img
                src="../images/tomatoe.JPG"
                alt="fresh-tomatoe"
                className="prod-img"
              />
              <div className="prod-name">
                <a className="links" href="">
                  Fresh Organic Tomatoes
                </a>{" "}
              </div>
              <div className="prod-category">Vegetables</div>
              <div className="prod-price">GHC 20.00/Kg</div>
              <div className="prod-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>*/}
      </ul>
    );
}
export default HomePage;