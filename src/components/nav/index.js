import React from 'react'
import '../../scss/_nav.scss';

function nav() {
    return (
            <div className="nav flex flex-row justify-between items-center">
              <ul className="inline-flex">
                <li><a href="#about">About</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#ourteam">Our Team</a></li>
                <li><a href="#make-enquiry">Make Enquiry</a></li>
              </ul>
            </div>
    );
}

export default nav