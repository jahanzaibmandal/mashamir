import React from 'react'
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <>
    <div className='main_div'> 
    <div className='contactus_main_div' >
    <form>
<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
    <label>Phone <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />  
    </li>
    <li>
        <label>Your Message <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>

    </div>
    <div className='contact_details'>
    <ul>
        
  <li href="mailto:jim@rock.com"><label >Phone Number:</label>   &nbsp;  &nbsp; +923001577727</li><br/>
  <li href="tel:+13115552368"><label > Whatsapp Number:</label>&nbsp;  &nbsp;+923001577727</li><br/>
  <li href="mailto:jim@rock.com"><label >Email:</label>&nbsp;  &nbsp;mashmir.pk@outlook.com</li><br/>
  <li href="tel:+13115552368"><label >Customer Service Hours:</label><br/>24/7</li><br/>
  <li href="mailto:jim@rock.com"><label >Address:</label><br/>Zee Embroidery Hanjarwal Lahore, Pakistan.</li><br/>
  
</ul>

    </div></div>
    </>
  )
}
export default ContactUs