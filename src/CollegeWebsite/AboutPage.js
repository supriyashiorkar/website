
import {  NavLink } from 'react-router-dom'
function AboutPage() {
    return (
        <>
            <section className='sub-headerC'>
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

                <h1>ABOUT US</h1>
            </section>

            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We Are World's Largest University</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                        <a href="" className="hero-btn red-btn">EXPORE NOW</a>
                    </div>

                    <div className="about-col">
                        <img src="./images3/office1.jpg" alt="not available" />
                    </div>
                </div>
            </section>

            <section className='college-footer'>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> Lorem ipsum dolor sit amet
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
export default AboutPage;