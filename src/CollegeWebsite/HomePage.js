import './CollegeWeb.css'
import {  NavLink } from 'react-router-dom'
function HomePage() {

    var navlinks = document.getElementById("navlinks");

    function showMenu() {
        navlinks.style.right = "0"
    }
    function hideMenu() {
        navlinks.style.right = "-200px"
    }
    return (
        <><br />
            <h1>University Website Design - Easy Tutorials</h1><br />

            <section className='headerC'>
                <nav className='nav1'>
                    <a href='#'><img src='./images2/collegelogo.jpg' /></a>
                    <div className='nav-linksC' id='navlinks'>
                        <img src='./images2/closetag.jpg' alt='not available' className='bars' onClick={() => hideMenu()} />
                        <ul>
                        <li><NavLink to="/hmpg">Home</NavLink></li>
        <li><NavLink to="/abt">About</NavLink></li>
        <li><NavLink to="/crse"> Course</NavLink></li>
        <li><NavLink to="/blg">Blog</NavLink></li>
        <li><NavLink to="/cnct">Contact</NavLink></li>
                        </ul>
                    </div>
                    <img src='./images2/bars.jpg' alt='not available' className='bars' onClick={() => showMenu()} />
                </nav>

                <div className='text-box'>
                    <h1>World's Best University</h1>
                    <p>Making Website is Now One of the Easiest thing in the World.You
                        just need to learn HTML, CSS,<br /> Javascript and you are good to go.</p>
                    <a href='#' className='hero-btn'>Visit Us to Know More</a>
                </div>
            </section>

            <section className='course'>
                <h1>Courses We Offer</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>

                <div className='row'>
                    <div className='course-col'>
                        <h3>Intermidiate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>

                    <div className='course-col'>
                        <h3>Degree</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>

                    <div className='course-col'>
                        <h3>Post Graduation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>


                </div>
            </section>

            <section className='campus'>
                <h1>Our Global Campus</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>

                <div className='row'>
                    <div className='campus-col'>
                        <img src='./images3/library2.jpg' alt='not available' />
                        <div className='layer'>
                            <h3>India</h3>
                        </div>
                    </div>

                    <div className='campus-col'>
                        <img src='./images3/playground1.jpg' alt='not available' />
                        <div className='layer'>
                            <h3>London</h3>
                        </div>
                    </div>

                    <div className='campus-col'>
                        <img src='./images3/campus4.jpg' alt='not available' />
                        <div className='layer'>
                            <h3>Newyork</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className='facilities'>
                <h1>Our facilities</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>

                <div className='row'>
                    <div className='facilities-col'>
                        <img src='./images3/library4.jpg' alt='not available' />
                        <h3>World's Best Library</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className='facilities-col'>
                        <img src='./images3/basketball.jpg' alt='not available' />
                        <h3>Largest Playground</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className='facilities-col'>
                        <img src='./images3/cafeteria.jpg' alt='not available' />
                        <h3>Tasty and Healthy Food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </section>

            <section className='testimonials'>
                <h1>What Our Student's Says</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>

                <div className='row'>
                    <div className='testimonials-col'>
                        <img src='./images3/virat.jpg' alt='not available' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            </p>
                            <h3>Virat Kohli</h3>
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                        </div>
                    </div>

                    <div className='testimonials-col'>
                        <img src='./images3/alia.jpg' alt='not available' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            </p>
                            <h3>Alia Bhatt</h3>
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star1.jpg' alt='not available' className='cl' />
                            <img src='./images3/star5.jpg' alt='not available' className='cl' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='college-cta'>
                <h1>enroll for our various online Courses anywhere from the World</h1>
                <a href='#' className='hero-btn'>contact us</a>
            </section>

            <section className='college-footer'>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet<br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet</p>
                    <div className='footer4'>
                    <a href='https://www.instagram.com/'>  <img src='./images2/insta.jpg' alt='not available'/></a>
                    <a href='https://www.facebook.com/'>  <img src='./images2/facebook.jpg' alt='not available'/></a>
                    <a href='https://www.linkdin.com/'>  <img src='./images2/Linkedin.jpg' alt='not available'/></a>
                    <a href='https://www.twitter.com/'>  <img src='./images2/twitter.jpg' alt='not available'/></a>
                    <a href='https://www.YouTube.com/'>  <img src='./images2/YouTube.png'alt='not available'/></a>
                    </div>
                    <hr/>
                    <p>Copyright @ 2021, Easy Tutorials</p>
               

       

            </section>
        </>
    )
}
export default HomePage;