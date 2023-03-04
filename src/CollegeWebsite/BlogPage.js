
import {  NavLink } from 'react-router-dom'
function BlogPage() {
    return (
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
                    <h1>Our Certificate & Online Courses for 2023</h1>

                </div>
            </section>

            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <img src="./images3/degree recieved 1.jpg" alt="not available" />
                        <h2>Our Certificate & Online Courses for 2023</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            consectetur adipiscing elit Lorem ipsum dolor sit amet</p><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet</p><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                        </p><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                            consectetur adipiscing</p><br />

                        <div className="comment-box">
                            <h3>Leave a comment</h3>
                            <form className="comment-form">
                                <input type='text' placeholder="Enter Name" />
                                <input type='email' placeholder="Enter Email" />
                                <textarea rows="5" placeholder="Your Comment"></textarea>
                                <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                            </form>
                        </div>
                    </div>
                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div >
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>

                        <div >
                            <span>Data Science</span>
                            <span>28</span>
                        </div>

                        <div >
                            <span>Machine Learning</span>
                            <span>15</span>
                        </div>

                        <div >
                            <span>Computer Science</span>
                            <span>34</span>
                        </div>

                        <div >
                            <span>AutoCaD</span>
                            <span>42</span>
                        </div>

                        <div >
                            <span>Journalism</span>
                            <span>65</span>
                        </div>

                        <div >
                            <span>Commerce</span>
                            <span>87</span>
                        </div>
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
export default BlogPage;