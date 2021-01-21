import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                    <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                    ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                    <i class="fa fa-phone"></i>
                    <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="#"> office@company.com</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    <h2> Cool<span> cab</span></h2>
                    <p class="menu">
                    <a href="/"> Home</a> |
                    <a href="/about"> About</a> |
                     |
                    <a href="/contact us"> Contact</a>
                    </p>
                    <p class="name"> dev &copy; 2021</p>
                </div>
            </footer>
            
        </div>
    )
}
