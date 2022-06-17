import React from 'react'
import "./About.css";

export const AboutUs = () => {
  return (
    <>
    
    <div className='about_div'>
    <div id='about_description'>
        <span>
            About
        </span>
        <p>
        Masha Mir is a multi-fashion brand focusing on eastern wear founded in 2022.
        </p>
      </div>
      <img src='./images/about.jpg' id='heading_image'/>
      
    </div>
     <div className='about_in_details'>
     <p>
     Masha Mir is a multi-fashion brand focusing on eastern wear founded in 2022. Our goal
     is to combine functional designs with popular fashion without relinquishing our hold on
     the quality. With due care in handling each fabric to ensure quality products and breathable
     fits.
    </p>
    <p>
      Founded in Lahore, Pakistan with a vision to expand nationwide we are committed to creating fresh
      and new designs for each season. Our wish is to expand upon this family and share our goals with 
      our beloved customers, workers and more. As Harriet Beecher Stowe said “ Women are the real architects
      of society”, and so we are dedicated to providing women with comfortable clothing so there is one less 
      obstacle on the way.
        </p>
     <img src='./images/b3.jpg' id='heading_image'/>
     </div>
    
    </>
  )
}

export default AboutUs