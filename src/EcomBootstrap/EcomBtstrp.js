
import './EcomBt.css';
import Carousel from 'react-bootstrap/Carousel';
function EcomBtstrp() {
  return (
    <>
      <div className="EcomBt">
        <div className="top-nav-bar">
          <div className="search-box">
            <img src="./bt/logo.jpg" alt="" height='70px' width='70px' className='logo' />
            <input type="text" className="form-control" />
            <span className="input-group-text"><img src="./images2/search2.png" height='30px' width='30px' /></span>
          </div>

          <div className='menu-bar'>
            <ul>
              <li><a href='#'>Cart<img src='./ecom/cart2.png' height='20px' width='20px' className='basket' /></a></li>
              <li><a href='#'>Sign Up</a></li>
              <li><a href='#'>Log in</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section className='btHeader'>
        <div className='side-menu'>
          <ul>
            <li>On Sale  <img src='./bt/Right1.png' height='10px' width='10px' className='ri8' />
              <ul>
                <li>sub-menu-1</li>
                <li>sub-menu-1</li>
                <li>sub-menu-1</li>
                <li>sub-menu-1</li>
              </ul>
            </li>
            <li>Mobiles  <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-2</li>
                <li>sub-menu-2</li>
                <li>sub-menu-2</li>
                <li>sub-menu-2</li>
              </ul>
            </li>
            <li>Computers <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-3</li>
                <li>sub-menu-3</li>
                <li>sub-menu-3</li>
                <li>sub-menu-3</li>
              </ul>
            </li>
            <li>Books <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-4</li>
                <li>sub-menu-4</li>
                <li>sub-menu-4</li>
                <li>sub-menu-4</li>
              </ul>
            </li>
            <li>Fitness <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-5</li>
                <li>sub-menu-5</li>
                <li>sub-menu-5</li>
                <li>sub-menu-5</li>
              </ul>
            </li>
            <li>Baby Care <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-6</li>
                <li>sub-menu-6</li>
                <li>sub-menu-6</li>
                <li>sub-menu-6</li>
              </ul>
            </li>
            <li>Magzines <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-7</li>
                <li>sub-menu-7</li>
                <li>sub-menu-7</li>
                <li>sub-menu-7</li>
              </ul>
            </li>
            <li>Auto Accessories <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-8</li>
                <li>sub-menu-8</li>
                <li>sub-menu-8</li>
                <li>sub-menu-8</li>
              </ul>
            </li>
            <li>Movies & Music <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-9</li>
                <li>sub-menu-9</li>
                <li>sub-menu-9</li>
                <li>sub-menu-9</li>
              </ul>
            </li>
            <li>Vedio & Games <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-10</li>
                <li>sub-menu-10</li>
                <li>sub-menu-10</li>
                <li>sub-menu-10</li>
              </ul>
            </li>
            <li>Home & Kitchen <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-11</li>
                <li>sub-menu-11</li>
                <li>sub-menu-11</li>
                <li>sub-menu-11</li>
              </ul>
            </li>
            <li>Furniture <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-12</li>
                <li>sub-menu-12</li>
                <li>sub-menu-12</li>
                <li>sub-menu-12</li>
              </ul>
            </li>
            <li>Grocery <img src='./bt/Right1.png' height='10px' width='10px' />
              <ul>
                <li>sub-menu-13</li>
                <li>sub-menu-13</li>
                <li>sub-menu-13</li>
                <li>sub-menu-13</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className='sliderbt'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 h-80"
              src="./bt/img1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-80"
              src="./bt/img2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-60"
              src="./bt/img3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-80"
              src="./bt/img4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>



      <section className='featured-categories'>
        <div className='btcontainer'>
          <div className='btrow'>

            <div className='col-mid-4'>
              <img src='./bt/smwatch2.webp' />
            </div>
            <div className='col-mid-4'>
              <img src='./bt/sandle1.jpg' />
            </div>
            <div className='col-mid-4'>
              <img src='./bt/purse3.jpg' />
            </div>
          </div>
        </div>
      </section>
      {/* ----------- */}

      <section className='on-sale'>
        <div className='containerbt'>
          <div className='title-box'>
            <h2>On Sale</h2>
          </div>

          <div className='btrow1'>
            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/books.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Books</h3>
                <h5>$300.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/hdphn.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Headphone</h3>
                <h5>$400.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/mixi2.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Mixer</h3>
                <h5>$5000.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/shoes4.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                  <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Shoes</h3>
                <h5>$2000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------new product----------- */}
      <section className='new-products'>
        <div className='containerbt'>
          <div className='title-box'>
            <h2>New Arrivals</h2>
          </div>

          <div className='btrow1'>
            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/scrp.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                  <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                  <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                  <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>ScrapBook</h3>
                <h5>$300.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/shrug.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Shrug</h3>
                <h5>$400.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/mixi1.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>Mixer</h3>
                <h5>$5000.00</h5>
              </div>
            </div>

            <div className='col-mid-3'>
              <div className='product-top'>
                <img src='./bt/tshrt.jpg' className='wt' />
                <div className='overlay-ri8'>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                  <button type='button' className='btn btn-secondary'>
                   <i class="fa fa-angle-right" ></i>
                  </button>
                </div>
              </div>
              <div className='product-bottom text-center'>
                <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                <h3>TShirt</h3>
                <h5>$2000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------website features-------------- */}
      <section className='website-features'>
        <div className='containerbt'>
          <div className='btrow1'>
            <div className='col-mid-3 feature-box'>
              <img src='./bt/garanty.jpg' height='80px' width='80px' />
              <div className='feature-text'>
                <p><b>100% Original Items </b>are available at company</p>
              </div>
            </div>

            <div className='col-mid-3 feature-box'>
              <img src='./bt/return1.png' height='80px' width='80px' />
              <div className='feature-text'>
                <p><b>Return within 30 days  </b>of receving your order</p>
              </div>
            </div>


            <div className='col-mid-3 feature-box'>
              <img src='./bt/delivery1.png' height='80px' width='80px' />
              <div className='feature-text'>
                <p><b>Get free delivery for every </b>order on more than price</p>
              </div>
            </div>
            <div className='col-mid-3 feature-box'>
              <img src='./bt/cash1.png' height='80px' width='80px' />
              <div className='feature-text'>
                <p><b>Pay online through multiple  </b>payment options (card payment/net banking)</p>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* -------footer------------------ */}

      <section className='footerbt'>
        <div className='containerbt text-center'>
          <div className='btrow1'>
            <div className='col-mid-3'>
              <h1>Useful Links</h1>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Return Policy</p>
              <p>Discount  Coupons</p>
            </div>
            <div className='col-mid-3'>
              <h1>Company</h1>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Carrer</p>
              <p>Affiliate</p>
            </div>
            <div className='col-mid-3'>
              <h1>Follow Us On</h1>
              <p> <i className="fa fa-instagram" ></i>  Instagram</p>
              <p><i class="fa fa-facebook-official"></i> Facebook</p>
              <p><i className="fa fa-twitter" ></i>Twitter</p>
              <p><i class="fa fa-youtube"></i> Youtube</p>
            </div>

            <div className='col-mid-3 footer-image'>
              <h1>Download App</h1>
             <img src='./bt/app.png' height='150px' width='150px'/>
            </div>

          </div>

          <hr/>
<p className='copyright' style={{color:"white"}}>Made  With Easy Tutorials</p>
        </div>
      </section>

    </>
  )
}
export default EcomBtstrp;