import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a style={{color: '#fff'}} href="https://github.com/rdebeer1" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a style={{color: '#fff'}} href="https://www.linkedin.com/in/robert-debeer-0308a1161" target="_blank" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a style={{color: '#fff'}} href="https://www.instagram.com/robert.debeer/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a style={{color: '#fff'}} href="https://www.facebook.com/robert.m.debeer" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a style={{color: '#fff'}} href="https://twitter.com/RobertDeBeer" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        </ul>
    </footer>
    
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
