import './Website3Proj.css'

function Website3(){
    return(
        <>
 <div className='hero'>
    <nav>
        <img src='./images/w3.jpg' className='logo3'/>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Recipe</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <img src='./images/w3a.jpg' className='logo3a'/>
    </nav>

    <div className='row3'>
        <div className='col3'>
            <h1>All happiness depends on a <br/>leilusrly Breakfast.</h1>
            <a href='#'>Order Now</a>
            </div>
            <div className='col3'>
            <img src='./images/rose.webp' className='feature-img'/>
            <img src='./images/tulip.webp' className='feature-img2'/>
        </div>
       
    </div>
 </div>
        </>
    )
}
export default Website3;