import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner" style={{fontFamily: 'OperatorMonoSsm-Medium'}}>
                <h1 style={{fontWeight: 500, textTransform: 'none', fontStyle: 'italic'}}>Welcome</h1>
                <div style={{width: '98%', textAlign: 'left', fontSize: '85%', fontWeight: 500, textTransform: 'none'}}>
                    <span style={{ color: '#74DCE9', fontStyle: 'italic' }}> const </span>
                    <span style={{ color: '#A8DE70', fontStyle: 'normal' }}> Robert DeBeer </span>
                    <span style={{ color: '#FF5F87', fontStyle: 'normal' }}> = </span>
                    <span style={{ color: '#706E70', fontStyle: 'normal' }}> ( </span>
                    <span style={{ color: '#FE9861', fontStyle: 'italic' }}> props </span>
                    <span style={{ color: '#706E70', fontStyle: 'normal' }}> ) </span>
                    <span style={{ color: '#FF5F87', fontStyle: 'normal' }}> => </span>
                    <span style={{ color: '#FFD95C', fontStyle: 'normal',}}> &#x0007B; <br /></span>
                </div>
                <div style={{width: '98%', padding: '0px 0px 0px 25px', fontSize: '85%', fontWeight: 500, textTransform: 'none'}}>
                    <span style={{ color: '#FF5F87', fontStyle: 'italic' }}> return</span>
                    <span style={{ color: '#706E70', fontStyle: 'italic' }}> this.</span>
                    <span style={{ color: '#fff', fontStyle: 'normal' }}>props.fullStackDeveloper <br /></span>
                </div>
                <div style={{width: '98%', textAlign: 'left', fontSize: '85%', fontWeight: 500, textTransform: 'none'}}>
                    <span style={{ color: '#FFD95C', fontStyle: 'normal' }}> &#x0007D;</span>
                </div>
            </div>
        </div>
        <nav>
            <ul style={{fontFamily: 'OperatorMonoSsm-Medium', fontStyle: 'italic', fontWeight: 300, color: '#fff'}}>
                <li><a style={{ textTransform: 'none', letterSpacing: 'unset', fontSize: '100%'}} href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a style={{ textTransform: 'none', letterSpacing: 'unset', fontSize: '100%'}} href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
                <li><a style={{ textTransform: 'none', letterSpacing: 'unset', fontSize: '100%'}} href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                <li><a style={{ textTransform: 'none', letterSpacing: 'unset', fontSize: '100%'}} href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header