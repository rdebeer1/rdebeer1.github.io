import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import resume from '../images/resume.jpg'

class Main extends Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const styles={
      fluid: {
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3,
      fontSize: '16px',
      },
      fluidContainer: {
        flex: '0 0 30 %',
      }
    }
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none', margin: 0, height:'100vh', overflow: 'scroll'}}>
          <h2 className="major">About</h2>
          <span className="image main" style={{ flex: 1, margin: 0 }}><img style={{ flex: 1, maxWidth: '15rem'}} src={pic01} alt="" /></span>
            <p style={{ flex: 1, letterSpacing: '2px'}}>I recently left my last job in pursuit of a profession that matches my passions. My last employer was PoolCorp and I worked within their distribution network (SCP Distributors LLC, 
              Superior Pool Product LLC, & National Pool & Tile Group) as both a Product Specialist and Business Development Representative.  
              I am a Dallas native but recently moved to Austin from San Diego. I was with my last employer for a little over 3 years, working with multiple sales teams, 
              managers, and customers. I managed over a hundred accounts across San Diego County and generated over $13 million in sales with 
              these accounts in 2017. I excel at building relationships with my customers and providing them with exceptional service. At the beginning of 2018 I attended Hack Reactor in downtown Austin to increase
              my prophecy/skills with JavaScript and its many frameworks. I am looking for new opportunities in the tech industry around the
              Austin or Dallas areas. I am driven, hardworking, and always forward thinking; being stagnant is not an option.</p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none', margin: 0, width: '100%'}}>
          <h2 className="major">Projects</h2>
          <ul className="icons">
            <li style={{ paddingRight: '.5rem', margin: '1rem' }}><a href="https://rdebeer1.github.io/Football-Database" target="_blank" className="icon fa-trophy"></a> Football-Database</li>
            <li style={{ paddingRight: '.5rem', margin: '1rem' }}><a href="https://rdebeer1.github.io/SocialMedium/" target="_blank" className="icon fa-headphones"></a> SocialMedium</li>
            <li style={{ paddingRight: '.5rem', margin: '1rem' }}><a href="http://trumpchange.herokuapp.com/" target="_blank" className="icon fa-dollar"></a> TrumpChange</li>
          </ul>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none', margin: 0, paddingLeft: '1rem', paddingRight: '1em', paddingTop: '1rem', paddingBottom: '1rem', width: '25rem'}}>
          <h2 className="major">Resume</h2>
          <div style={styles.fluid}>
            <div style={styles.fluidContainer}>
              <ReactImageMagnify isEnlargedImagePortalEnabledForTouch={true} isActivatedOnTouch={true} {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                src: resume,
              },
              largeImage: {
                src: resume,
                width: 765,
                height: 990,
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: 'over',
            }} />
            </div>
          </div>
          {close}
        </article>


        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/robert.debeer@gmail.com" method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/rdebeer1" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-debeer" target="_blank" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a href="https://www.instagram.com/robert.debeer/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.facebook.com/robert.m.debeer" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://twitter.com/RobertDeBeer" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main