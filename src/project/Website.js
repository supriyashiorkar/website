import './WebsiteProj.css'

function Website() {
    return (
        <>
     
            {/* <h1>Best Online Food delivery Service in India</h1><br/><br/> */}
            <nav id="navbar">
                <div id="logop">
                    <img src="./images/logo.jpg" alt="not available" />
                </div>

                <ul>
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">About Us</a></li>
                    <li className="item"><a href="#">Services</a></li>
                    <li className="item"><a href="#">Contact Us</a></li>

                </ul>
            </nav>

            <section id='home'>
                <h1 className='h-primary'>Welcome to MyOnline Meal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
                <button className="btn">Order Now</button>
            </section>

            <section className='services-container'>
                <h1 className='h-primary center'>Our services</h1>
                <div id='services'>
                    <div className='box'>
                        <img src='./images/fruit-2.jpg' alt='not available' />
                        <h2 className='h-secondary center'>Food Catering</h2>
                        <p className='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>

                    <div className='box'>
                        <img src='./images/salad2.jpg' alt='not available' />
                        <h2 className='h-secondary center'>Bulk Ordering</h2>
                        <p className='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>

                    <div className='box'>
                        <img src='./images/delivery.jpg' alt='not available' />
                        <h2 className='h-secondary center'>food Ordering</h2>
                        <p className='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                </div>
            </section>

            <section className='client-section'>
                <h1 className='h-primary center'>Our Clients</h1>
                <div id='clients'>
                    <div className='client-item'>
                        <img src='./images/logo1.jpg' alt='not available' />
                    </div>
                    <div className='client-item'>
                        <img src='./images/logo2.jpg' alt='not available' />
                    </div>
                    <div className='client-item'>
                        <img src='./images/skypelogo.jpg' alt='not available' />
                    </div>
                    <div className='client-item'>
                        <img src='./images/hplogo.jpg' alt='not available' />
                    </div>
                </div>
            </section>

            <section id='contact'>
                <h1 className='h-primary center'>Contact Us</h1>
                <div className='contact-box'>
                    <form action=''>
                       <div className='form-group'>
          <input type="text" placeholder='Enter Your Name'/> </div>

                        <div className='form-group'>
                     <input type="text" placeholder='Enter Your Email'/>    </div>

                             <div className='form-group'>   
                        <input type="phone" placeholder='Enter Your Phone'/>
                       </div>

                       <div className='form-group'>   
                        <textarea name='message' placeholder='Enter Your Address'/>
                       </div>
                    </form>
                </div>
            </section>

<footer>
    <div className='center'>
        Copyright &copy;www.myOnlineMeal.com. All Rights Reserved!
    </div>
</footer>
        </>
    )
}
export default Website;