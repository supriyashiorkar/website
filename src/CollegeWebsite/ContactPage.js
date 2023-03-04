import {  NavLink } from 'react-router-dom'

function ContactPage(){
    return(
        <>
       <section className='headerC'>
                <nav className='nav1'>
                    <a href='#'><img src='./images2/collegelogo.jpg' /></a>
                    <div className='nav-linksC' id='navlinks'>
                        <img src='./images2/closetag.jpg' alt='not available' className='bars' />
                        <ul>
                        <li><NavLink to="/hmpg">Home</NavLink></li>
        <li><NavLink to="/abt">About</NavLink></li>
        <li><NavLink to="/crse"> Course</NavLink></li>
        <li><NavLink to="/blg">Blog</NavLink></li>
        <li><NavLink to="/cnct">Contact</NavLink></li>
                        </ul>
                    </div>
                    <img src='./images2/bars.jpg' alt='not available' className='bars' />
                </nav>

                <div className='text-box'>
                    <h1>Contact Us</h1>

                </div>
            </section>

            <section className="contact-us">
        <div className="row">
            <div className="contact-col">
                <div>
                    <img src='./images2/facebook.jpg' alt='not available' className="cont"/>
                    <span>
                    <h5>XYZ Road , ABC Building </h5><br/>
                    <p>Banglore, Kanrnataka , IN</p>
                    </span>
                </div>

                <div>
                    <img src='./images3/phoneicon.jpg' alt='not available' className="cont2"/>
                    <span>
                   <h5>+1 123456789 </h5><br/>
                    <p>Monday To Saturday, 10AM to 6PM</p>
                    </span>
                </div>

                <div>
                    <img src='./images3/emailicon.png' alt='not available' className="cont3"/>
                    <span>
                   <h5>info@tutorial.com : </h5><br/>
                    <p>Email us your Query</p>
                    </span>
                </div>
            </div>

            <div className="contact-col">
                <form action="">
                    <input type="text" placeholder="Enter Your Name" required/>
                    <input type="email" placeholder="Enter Email Address" required/>
                    <input type="text" placeholder="Enter Your Subject" required/>
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <button type="submit" className="hero-btn red-btn">Send Message</button>
                </form>
            </div>
        </div>
            </section>

            <section className='college-footer'>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                <div className='footer4'>
                    <a href='https://www.instagram.com/'>  <img src='./images2/insta.jpg' alt='not available' /></a>
                    <a href='https://www.facebook.com/'>  <img src='./images2/facebook.jpg' alt='not available' /></a>
                    <a href='https://www.linkdin.com/'>  <img src='./images2/Linkedin.jpg' alt='not available' /></a>
                    <a href='https://www.twitter.com/'>  <img src='./images2/twitter.jpg' alt='not available' /></a>
                    <a href='https://www.YouTube.com/'>  <img src='./images2/YouTube.png' alt='not available' /></a>
                </div>
                <hr />
                <p>Copyright @ 2021, Easy Tutorials</p>
            </section>
        </>
    )
}
export default ContactPage;