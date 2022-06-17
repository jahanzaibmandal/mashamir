import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "./Footer.css";
import {BsWhatsapp,BsFacebook,BsInstagram} from "react-icons/bs";
import { Button } from 'bootstrap';
export const Footer = () => {
  return (

    <div>


        <div className='footer_main_div'>
        <Row className='Row1'>
    <Col md={{ span: 4, offset:0}} lg={{ span: 3, offset:0}} xl={{ span: 3, offset:0}} id="col">
      
     <span > About the store </span>
     <p>
     Masha Mir is a multi-fashion brand focusing
     on eastern wear founded in 2022.
     </p>
     <a href='https://wa.me/message/NNXRTFIRFKLUJ1' target="_blank">  <BsWhatsapp/> </a> 
     <a href='https://www.facebook.com/mashamir.pk' target="_blank">  <BsFacebook/> </a> 
     <a href='https://www.instagram.com/mashamir.pk/' target="_blank">  <BsInstagram/> </a>  
    </Col>
    <Col md={{ span: 2, offset: 1}} lg={{span: 2, offset: 2}} xl={{ span:2, offset:2}} id="col">
    <span > Quick links</span>
    <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Collections</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Contact Us</a></li>
    </ul>
     
      </Col>
      <Col md={{ span: 4, offset: 1}} lg={{span: 3, offset:2}} xl={{ span:3, offset:2}} id="col">
    <span >Newsletter</span>
    <p>
    Be the first to receive updates on new arrivals, special promos and sales.
        </p>
     <input type='email' placeholder="Your Email"></input>
     <button>ok </button>
      </Col>
  </Row>
   <Row className='Row2'>
   <Col md={{ span: 3, offset: 5}} lg={{span: 3, offset: 5}} xl={{ span:3, offset:5}}>
    <span ><a href='https://www.fiverr.com/mohammadzaib?up_rollout=true' target="_blank"> Powerd by Mandal</a> </span>
    
     
      </Col>
      <Col md={{ span: 3, offset: 1}} lg={{span: 2, offset: 1}} xl={{ span:2, offset:1}}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRYhe3WzWtcVRiA8d+5MzdNa5E0zYfU2lZFUWtx1a0mKkqxioq4F8RQtOJKCAhGEAVFcSFdCP4PgkFwYYOu1EUrRbEIKhULTVqL1ZiYTOYeF2NuJk4z94zLMs/m3vPxvuc53Hs+6NOnzzVIqOpwhjvqPBq5GWOBxcivmFvg80nW1vvGGXU3uE8wqbBXZqfCguAnwWyYcvZ/yXzHA3gTh7vEXwy8MfqYD0eOeBbTgtEu/b8WTYdjTibJzFEf410c75K0pD7AnoOag0fV6jemRIAPBC+EKY0tZf4V+QiPpGQc2M7+Q+TbaDQwSb4/WWjWsMfD05rrFVl76yhvp4qEjL13tkQgz4knKZaSZY667K1NOddfvuWewKn/Cm7F2AFGbuqsX9rGjqeShQrB4TDllPaBM15PFanl7N7i/xhconklWSbDq+0FpxmKPJya4fqR1me6avYaK18lyxAdiSfsKmXy1jLOU+OvG+reHi70IEMumChlAulrQGsVdaNW9CQDB0oZDPcSmVX8WSH2qJLZXcpEfusltqiYeaw8ZDq41C5zrpfI1Yq9pFnrUaVojZ/BDj7DamrsX1VLd7wnlYZBc6XMrVzBp6nRf1za+lMVBQPdjtZOPgnP+L2UgYJXWo9qmg0un79629/bqe1KFilEr60XSplDnMF7qVkunmN5cXPdygqDSSdbyTvhmNMdMnAXLwdmU7LEyPmzNFZa5UaD7EGyij2ojY8Nm26v2CQTaM7zRORESrbVZX7+hsU/NcND5PsSNYL3XfBk+/WhQwYmWbub5yP3o+qUmV9b9eLybYbqe7yEhYr+X8pMhCnHw8zGdXXDsYLvub1o3YFvCYwHFvFLwdxBvgg2Zhdn1I27FxPYJ7NTNI8fZWbDc36oGq9Pnz7XHP8ArIanwUqX/XsAAAAASUVORK5CYII="/>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAADlklEQVRYhe2XXWxTVQDHf/e23V2/GNvsWjuG++jQ2OJwG6Aj8rEH5Ak/4gOakBE/eNDEmJjAi5mZwQcTEwwJmsCLUdHFxPjgB5mAU6xMMwZubFPowmgHrGvZWGlpu34dH7qVJbULi3Yssb+ne+49J//fOeeec+6FAgUK/DdI8wvm3V16oRQ/iSxsQkhSrkb/OlQSAoFLLRm6rh9pDmfJmF7tthCXTgP1+ZL4B1xoxGb/h9u8APLcXRGX315iEYB6EZPa5wrynQvRuMQi6VyJpiwZAUX3QmZ+rrxQxaVmWcmoF1O5qrwYWQZfIEa5QYNKJeGdjjETTwGgaGRMRg0TgRjxpMi0K9WrWaFTE42lmAjE7l7msYpB3nB00mrtZey2mR3HD+GPrqSmQsvvBzYQSwjW7e/B2bEenaJiU3svwWiCD9oepNVeBkAiJWg7PMSJC5MAfPKag422Eka8YVrae3PKZE3Tbz4Hu348gMfyBRZDjK3WPgCeajYB8P35GxRrZHSKinhScMUf4b0X6mm1l3H6z5t0fHWZb/tucMUfAWDtagMbbSUA1Jp1GItVdy8zx3HPejSNJ3nGHgBgZ1Na5tNfxqmz6AAY9UWIJwXVJm26I64AH/0wxt6jw7i86Y315W2VAPS7g8gSPPKAcfEyzr+mQW/HVPscdWYtjioDo74Izos3qZ+VGZkNPOYcB2DfzmpOvtXEw6v0AJQbNTy7oYIBT4gveyYAaFhtWLxMjytAMiWorXucp5srAPjMOY4QYDOnZeZ6f+TUNZ4/dIHhq7dxVBn4+s0GitQyu5+4H0Uj03nGy4AnlJapzj0yOVfTrUiCfneIxhojL7VWEk8KOs+ke2ezaDMyOkVFeCbJqcEp+t1Bht5vYYVWjVGrYs8WKwB7tlhJptKrq2GBaVpwaf96cZrGGiP3GTV80+fHfys2KzM7MuNhXt9RRdtmK5d9ESrLFCQJDn7nYdOalVhLFcYmo3inZwCwlirUmLSU6NQEwonFyXQPTWVe3I9/vg6k95JYIoXbH2XEG8a+ysDwtRDmEoXBsRD7j7noGpjk8IsP4fZH2fe5i+6hKQDe3WVj+9py6sxazo0Gs/LufEK88tN5YN1CcnniD//RrY/CMjsOlqeMBLkPjTwyPzcjk0I6dy9kBJzNkpE0qQ7AtcQulySReCfjMP+Jde9ZXYLgdpDW5P3vAHGpSK90XT3YEslXToEC/1/+BgW3PQReIJTvAAAAAElFTkSuQmCC"/>



      </Col>
   </Row>

</div>


 </div>
  )
}

export default Footer
