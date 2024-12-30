import React from "react";
import './Front_Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Front_page() {
  return (
    <div>
      <nav>
        <div> World's Largest Medical Equipment Market Place
        </div>
        <div>
        <a href="https://1mdm.com/index.php?route=account/account">My account | </a> 
          <a href='https://1mdm.com/about/contact.php'>Contact Us </a>
        </div>
      </nav>
      <hr></hr>
      <div className="header">
        <div className="logo">
          <a href="https://1mdm.com/">
            <img src="https://1mdm.com/image/cache/catalog/1mdm-Brand/1mdm-172x58-172x58.png" alt="1mdm">
            </img>
          </a>
        </div>
        <div className="about">
          <a href="https://1mdm.com/about/index.php">About Us</a>
          <a href="https://1mdm.com/about/our-story.php">Our Story</a>
          <a href="https://1mdm.com/about/seller.php">Sell on 1MDM</a>
          <a href="https://1mdm.com/about/pricing.php">Pricing</a>
        </div>
      </div>
      <div className="section1">
        <div className="main_details">
          <div className="main_left">
            <h4>Sell on 1mdm.com</h4>
            <h1>Reach millions of B2B buyers globally
            </h1>
            <div className="main_left_btn">
              <a href="https://1mdm.com/about/pricing.php">
                <button type="button" className="btn btn-danger">Start selling</button>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B919820045154&text&type=phone_number&app_absent=0">
                <button type="button" className="btn btn-outline-danger">Chat with consultant</button>
              </a>
            </div>
          </div>
          <div className="main_right">
            <div className="main_right_details">
              <h3>26,000,000</h3>
              <p>active buyers globally</p>

              <h3>400,000</h3>
              <p>product inquiries daily</p>

              <h3>200</h3>
              <p>countries and regions represented</p>

            </div>

          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section2_head">
          <h2>1mdm.com is a leading ecommerce platform that
            helps SMEs go global</h2>
        </div>
        <div className="section2_details">
          <div className="section2_left">
            <iframe src="https://www.youtube.com/embed/TN7iJyc5Uks" width={600} height={400}></iframe>
          </div>
          <div className="section2_right">
            <p>Connect with millions of business buyers from around the world.</p>
            <br />
            <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
          </div>
        </div>
      </div>
      <div className="section3">
        <h1>Largest number of products & categories of
          <br /> medical devices on a single place - 1mdm.com
        </h1>
        <br />
        <h5>
          Connect with buyers worldwide for your product &
          <br />
          start selling now.
        </h5>
      </div>
      <div className="section4">
        <h2>Grow your business with a suite of tools built for you</h2>
        <div className="section4_details">
          <div className="section4_col1">
          <div className="section4_col1_detail">
            <a className="list-home active" href="list-home" aria-controls="list-home">Customer Storefront</a>
            <a href="#">Advertising tools</a>
            <a href="#"> Data and analytics</a>
            <a href="#">Customer support</a>
          </div>
          </div>
          <div className="section4_col2">
          <div className="section4_col2_details" aria-labelledby="list-home">
          <div id="list-home" className="section4_col2_left normal active">
            <h1>Set up a store that showcases your brand
            </h1>   
            <br />
            <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>         
          </div>
          <div className="section4_col2_right">
            <img src="https://1mdm.com/about/assets/1mdm-product-1.png" />
          </div>
          </div>

          </div>
        </div>
      </div>
      <div className="section5">
        <div className="section5_details">
          <h2>
          Success stories from 1mdm.com sellers
          </h2>
          <div className="section5_details_slide">
            <div className="slide_content">
            <div className="slide_left">
            <p>Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional</p>
            </div>
            <div className="slide_right" >
              <img src="	https://1mdm.com/about/assets/slider-1.webp"/>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_details">
        <h2>Ready to Grow Your Business?</h2>
        <div className="footer_btn">
        <a href="https://1mdm.com/about/pricing.php">
          <button type = "button " className="btn btn-light btn-lg"> Start Selling</button>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919943005109&text&type=phone_number&app_absent=0">      
          <button type="button" className="btn btn-outline-light btn-lg">Chat with consultant
          </button>
        </a>
        </div>  
      <div className="footer_link">
        <a href="https://1mdm.com/about/pricing.php"><p>Start Selling</p></a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919943005109&text&type=phone_number&app_absent=0"><p>Customer Service</p></a>
      </div>
      </div>
      
      <div className="footer">
        <div className="footer_container">
          <div className="footer_div1">
          <div className="footer_logo">
            <img src="https://1mdm.com/about/assets/logo-white.png" alt="mdmlogo"/>
            <br /> <br />
            <p> One Medical Devices               
              <br />
                Market Place
            </p>
          </div>
          </div>
          <div className="footer_div2">
            <h5>Platform</h5> 
            <br />
            <a href="https://1mdm.com/about/seller.php">
            <p>Sell on 1MDM</p>
            </a> 
            <a href="https://1mdm.com/about/pricing.php">
              <p>Pricing</p>
            </a>   
            <a href="https://1mdm.com/about/index.php">
              <p>About Us</p>
            </a>   
            <a href="https://1mdm.com/about/our-story.php">
              <p>Our Story</p>
            </a>   
            <a href="https://superlabs.co/careers.php" >
              <p>Careers</p>
            </a>   
            <a href="https://1mdm.com/index.php?route=extension/maza/blog/home">
              <p>Blog</p>
            </a>   
            <a href="https://1mdm.com/index.php?route=product/manufacturer">
              <p>Brands</p>
            </a>   
          </div>
          <div className="footer_div2">
            <h5>Press Room</h5> 
            <a href="https://1mdm.com/about/press.php">
              <p>Images & B-roll</p>
            </a>   
            <h5>Press Room</h5>  
            <a href="https://1mdm.com/terms-of-service">
              <p>Terms of Service</p>
            </a>   
            <a href="https://1mdm.com/privacy-policy">
              <p>Privacy Policy</p>
            </a>   
            <a href="https://1mdm.com/delivery-information">
              <p>Delivery Information</p>
            </a>   
          </div>       
          <div className="footer_div2">
            <h5>Reach Us</h5>
            <a href="https://1mdm.com/corporate-information">
              <p>Corporate Information</p>
            </a>   
            <a href='https://1mdm.com/about/contact.php'>
              <p>contact Us</p>
            </a>   
          </div>
        </div>
      </div> 
      <div className="copyright">
        <br />
        <p>
        © 2024 1MDM ⚡ by  
        <a href="https://www.superlabs.co">SuperLabs</a>     
        </p>
      </div> 
    </div>  

  )
}