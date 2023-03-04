import {  NavLink } from 'react-router-dom'

function CartEcom() {
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

            {/* -----------cart itrms detail------------------ */}
            <div className="small-containerEcom cart-page" >
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="./ecom/tshirt1.jpg" alt=""/>
                                <div >
                                    <p>Printed Tshirt</p>
                                    <small>Price : $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" min="1" /></td>
                        <td>$50.00</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="./ecom/shoes.jpg" alt=""/>
                                <div >
                                    <p>Shoes</p>
                                    <small>Price : $150.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" min="1" /></td>
                        <td>$50.00</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="./ecom/smwatch3.png" alt=""/>
                                <div >
                                    <p>Smartwatch</p>
                                    <small>Price : $2000.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" min="1" /></td>
                        <td>$50.00</td>
                    </tr>
                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$35.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$235.00</td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* -----------footer------------------ */}
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
export default CartEcom;