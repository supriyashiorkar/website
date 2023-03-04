import './ECommWeb.css'
import {  NavLink } from 'react-router-dom'
function ProductDetails() {

   
    return (
        <>
            <div className='containerEcom'>
                <div className="navbarEcom">
                    <div className="logoEcom">
                        <img src="./ecom/redstorelogo.png" alt="not available" width="125px" />
                    </div>

                    <nav className='navEcom'>
                        <ul id='menuItems'>
                        <li><NavLink to="/ecomweb">ECommerce Website</NavLink></li>
        <li><NavLink to="/prEcom">Products</NavLink></li>
        <li><NavLink to="/prEcomdtl">Products Detail</NavLink></li>
        <li><NavLink to="/cartEcom">Cart</NavLink></li>
        <li><NavLink to="/accntEcom">Account</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* ----------single product details----- */}

            <div className="small-containerEcom single-product">
                <div className="rowEcom">
                    <div className="colECom">
                        <img src="./ecom/dress1.jpg" alt="" height='260%' width='260%' id='ProductImg'/>

                        <div className='small-img-row'>
                            <div className='small-img-col'>
                                <img src='./ecom/dress2.jpg'width='100%'className='smallImg'/>
                            </div>
                            <div className='small-img-col'>
                                <img src='./ecom/dress3.jpg'width='100%'className='smallImg'/>
                            </div>
                            <div className='small-img-col'>
                                <img src='./ecom/dress4.jpg'width='100%'className='smallImg'/>
                            </div>
                            <div className='small-img-col'>
                                <img src='./ecom/dress5.jpg'width='100%'className='smallImg'/>
                            </div>
                        </div>
                    </div>
                    <div className="colECom">
                        <p>Home / Dress</p>
                        <h1>Style & Trend Yellow Color Kurti</h1>
                        <h4>$350.00</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Large</option>
                            <option>Medium</option>
                            <option>Small</option>
                        </select>

                        <input type="number" placeholder='Enter Quantity' min='1'/>
                        <a href="" className='btnEcom'>Add To Cart</a>
                        <h3>Product Details 		&#8594;</h3><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>

            </div>

            <div className='small-containerEcom'>
<div className='rowEcom row-2'>
    <h2>Related Products</h2>
    <p>View More</p>
</div>
            </div>

            <div className='small-containerEcom'>
                <div className='rowEcom'>
                    <div className='colECom4'>
                        <img src='./ecom/sandle2.jpg' alt='' />
                        <h6>shoes</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$50.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/tshirt1.jpg' alt='' />
                        <h6>TShirt</h6>
                        <div className='ratingEcom'>
                            <div className='rt'>&#9733;   &#9733;   &#9733;   &#9734;  &#9734;</div>
                        </div>
                        <p>$150.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/watch2.jpg' alt='' />
                        <h6>smartwatch</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$250.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/purse2.jpg' alt='' />
                        <h6>handbag</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$750.00</p>
                    </div>
                </div>
            </div>
            <div className='footerEcom'>
                <div className='containerEcom'>
                    <div className='rowEcom'>
                        <div className='footer-col1'>
                            <h3>download our app</h3>
                            <p>download app for android and ios mobile phone</p>
                            <div className='app-logo'>
                                <img src='./ecom/appstore.jpg' alt='' />
                                <img src='./ecom/googleplay.jpg' alt='' />
                            </div>
                        </div>

                        <div className='footer-col2'>
                            <img src='/ecom/redstorelogo.png' alt="not available" width="125px" />
                            <p>our purpose is to sustainably make the pleasure and benifits of sports accesible to the way.</p>
                        </div>

                        <div className='footer-col3'>
                            <h3>useful links</h3>
                            <ul>
                                <li>coupons</li>
                                <li>blog post</li>
                                <li>return policy </li>
                                <li>join affiliate</li>
                            </ul>
                        </div>



                        <div className='footer-col4'>
                            <h3>follow us</h3>
                            <ul>
                                <li>facebook</li>
                                <li>twitter</li>
                                <li>instagram </li>
                                <li>youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className='copyright'>copyright 2023-easy tutorials</p>

                </div>
            </div>
        </>
    )
}
export default ProductDetails;