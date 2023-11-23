import React, { useState, useEffect, useRef } from 'react';
import '../../scss/_nav.scss';

function nav() {

  const [isOpen, setOpen] = useState(false);

    return (
            <div className="nav flex flex-row justify-between items-center">
              <ul className="inline-flex">
                <li><a href="#about">About</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#ourteam">Our Team</a></li>
                <li><a href="#make-enquiry">Make Enquiry</a></li>
              </ul>
              <button>Contact Us <span>→</span></button>
                <div className='hamburger'>
                  <button
                    onClick={() => setOpen(!isOpen)}
                    className={`hamburger-button ${isOpen ? "open" : "close"}`}
                  />
                    <div className={`panel ${isOpen ? "open" : "close"}`}>
                      <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#ourteam">Our Team</a></li>
                        <li><a href="#make-enquiry">Make Enquiry</a></li>
                      </ul>
                    </div>
                </div>
            </div>
    );
}

export default nav