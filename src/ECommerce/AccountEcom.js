import './ECommWeb.css';
import {  NavLink } from 'react-router-dom';

function AccountEcom(){
    var LoginForm=document.getElementById("LoginForm");
    var RegForm=document.getElementById("RegForm");
    var indicator=document.getElementById("indicator");
    function login(){
        LoginForm.style.transform="translateX(300px)";
        RegForm.style.transform="translateX(300px)";
        indicator.style.transform="translateX(0px)";
    }
    function register(){
        RegForm.style.transform="translateX(0px)";
        LoginForm.style.transform="translateX(0px)";
        indicator.style.transform="translateX(100px)";
    }
    return(
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

            {/* --------------Account page---------- */}

<div className="Account-page">
    <div className="containerEcom">
        <div className="rowEcom">
            <div className="col-2">
                <img src="./ecom/football1.jpg" alt=""/>
            </div>

            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                    <span onClick={()=>login()}>Login</span>
                    <span onClick={()=>register()}>Register</span>
                    <hr id='indicator'/>
                </div>

                <form id='LoginForm'>
                    <input type="text" placeholder='UserName'/>
                    <input type="password" placeholder='Password'/>
                    <button type='submit' className='btnEcom'>Login</button>
                    <a href=''>Forgot Password</a>
                </form>

                <form id='RegForm'>
                    <input type="text" placeholder='UserName'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button type='submit' className='btnEcom'>Register</button>
                 
                </form>
              </div>
            </div>
        </div>
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
export default AccountEcom;