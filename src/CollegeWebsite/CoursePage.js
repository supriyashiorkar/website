import {  NavLink } from 'react-router-dom'

function CoursePage(){
    return(
        <>
       <section className='headerC'>
                <nav className='nav1'>
                    <a href='#'><img src='./images2/collegelogo.jpg' /></a>
                    <div className='nav-linksC' id='navlinks'>
                        <img src='./images2/closetag.jpg' alt='not available' className='bars'  />
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

               <h1 className="crs">Our Courses</h1>
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



            <section className='college-footer'>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> Lorem ipsum dolor sit amet
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
export default CoursePage;