import './ECommWeb.css'
import {  NavLink } from 'react-router-dom'
function ProductsEcom() {
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


            <div className='small-containerEcom'>
                <div className='rowEcom row-2'>
                    <h2>All Products</h2>
                    <select>
                        <option>Default Shorting</option>
                        <option>Short By Price</option>
                        <option>Short By Popularity</option>
                        <option>Default rating</option>
                        <option>Default Sale</option>
                    </select>
                </div>

                <div className='rowEcom'>
                    <div className='colECom4'>
                        <img src='./ecom/tshirt2.jpg' alt='' />
                        <h6>black & white t-shirt</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$50.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/purse3.jpg' alt='' />
                        <h6>Handbags</h6>
                        <div className='ratingEcom'>
                            <div className='rt'>&#9733;   &#9733;   &#9733;   &#9734;  &#9734;</div>
                        </div>
                        <p>$150.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/sandle1.jpg' alt='' />
                        <h6>Shoes</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$250.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/watch3.jpg' alt='' />
                        <h6>smart watch</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9733;</div>
                        </div>
                        <p>$750.00</p>
                    </div>
                </div>
                <div className='rowEcom'>
                    <div className='colECom4'>
                        <img src='./ecom/dress1.jpg' alt='' />
                        <h6>Style N Trends</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$50.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/watch1.jpg' alt='' />
                        <h6>Watch</h6>
                        <div className='ratingEcom'>
                            <div className='rt'>&#9733;   &#9733;   &#9733;   &#9734;  &#9734;</div>
                        </div>
                        <p>$150.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/shoes2.jpg' alt='' />
                        <h6>Shoes</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                        </div>
                        <p>$250.00</p>
                    </div>

                    <div className='colECom4'>
                        <img src='./ecom/purse.jpg' alt='' />
                        <h6>HandBag</h6>
                        <div className='ratingEcom'>
                            <div className='rt'> &#9733;   &#9733;   &#9733;   &#9733;  &#9733;</div>
                        </div>
                        <p>$750.00</p>
                    </div>
                </div>

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

                <div className='page-btn'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
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
export default ProductsEcom;