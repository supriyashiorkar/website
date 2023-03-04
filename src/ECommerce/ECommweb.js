import './ECommWeb.css'
import {  NavLink } from 'react-router-dom'
function EComWeb() {




    return (
        <>
            <h1 style={{ color: "red" }}>RedStore | ECommerce Website Design</h1>
            <div className='headerEcom'>
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
                        <img src='./ecom/cart2.png' alt='not available' height='30px' width='30px' />
                        <img src='./ecom/menuicon.png' className='menuiconEcom' alt='not available' height='30px' width='30px' />
                    </div>

                    <div className='rowEcom'>
                        <div className='colECom'>
                            <h1>give your workout<br /> a new style !</h1>
                            <p>success isn't always about greatness. it's about consistency.
                                consistent <br />hardwork gains success. greatness will come.
                            </p>
                            <a href='' className='btnEcom'>explore now &#8594;</a>
                        </div>

                        <div className='colECom'>
                            <img src='./ecom/football1.jpg' />
                        </div>
                    </div>
                </div>
            </div>

            {/* -----Featured Categories ---- */}
            <div className='categoriesEcom'>
                <div className='small-containerEcom'>
                    <div className='rowEcom'>
                        <div className='colECom3'>
                            <img src='./ecom/jeans1.jpg' alt='' />
                        </div>
                        <div className='colECom3'>
                            <img src='./ecom/purse2.jpg' alt='' />
                        </div>
                        <div className='colECom3'>
                            <img src='./ecom/makeup1.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* -------featured Products---------- */}
            <div className='small-containerEcom'>
                <h2 className='titleEcom'>featured Products</h2>
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

                <h2 className='titleEcom'>latest Products</h2>
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
            </div>

            {/* ------offer----- */}

            <div className='offer-Ecom'>
                <div className='small-containerEcom'>
                    <div className='rowEcom'>
                        <div className='colECom'>
                            <img src='./ecom/smwatch3.png' alt='' className='offer-img' width='400px' height='400px' />
                        </div>

                        <div className='colECom'>
                            <p>exclusively available on redstore</p>
                            <h1>smart band 4</h1>
                            <small>the mi smart band 4 features a 39.9% larger (than mi band 3)AMOLD color full-touch display with adjustable brightness , so everything
                                is clear as can be.
                            </small>
                            <a href='' className='btnEcom'>Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----testimonial-------- */}
            <div className='testimonialEcom'>
                <div className='small-containerEcom'>
                    <div className='rowEcom'>
                        <div className='colECom3'>
                            <div className='.rt'> &#8220;</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>
                            <div className='ratingEcom'>
                                <div className='rt' > &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                                <img src='./ecom/dp.jpg' alt='' />
                                <h3>Deepika Padukone</h3>
                            </div>
                        </div>

                        <div className='colECom3'>
                            <div className='.rt'> &#8220;</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>
                            <div className='ratingEcom'>
                                <div className='rt' > &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                                <img src='./ecom/al.jpg' alt='' />
                                <h3>alia bhatt</h3>
                            </div>
                        </div>

                        <div className='colECom3'>
                            <div className='.rt1'> &#8220;</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>
                            <div className='ratingEcom'>
                                <div className='rt' > &#9733;   &#9733;   &#9733;   &#9733;  &#9734;</div>
                                <img src='./ecom/sd.jpg' alt='' />
                                <h3>sidharth malhotra</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------brands-------- */}

            <div className='brandEcom'>
                <div className='small-containerEcom'>
                    <div className='rowEcom'>
                        <div className='colECom5'>
                            <img src='./ecom/godrej-logo.png' alt='n0t available' />
                        </div>
                        <div className='colECom5'>
                            <img src='./ecom/PayPal_logo.png' alt='n0t available' />
                        </div>
                        <div className='colECom5'>
                            <img src='./ecom/philipslogo.jpg' alt='n0t available' />
                        </div>
                        <div className='colECom5'>
                            <img src='./ecom/oppologo.jpg' alt='n0t available' />
                        </div>
                        <div className='colECom5'>
                            <img src='./ecom/cocacolalogo.jpg' alt='n0t available' />
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------footer--------------------- */}

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
export default EComWeb;