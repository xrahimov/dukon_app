import React from 'react'
import { Layout } from 'antd'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'
const { Footer } = Layout

function AppFooter() {
    return (
        <div>
            <Footer style={{background: '#183a16'}}>
                <div className="footer-main-div">
                <div className="footer-social-icons">
                    <ul>
                        <li><a href="#"><FacebookOutlined style={{ color: '#3955f9', fontSize: '25px' }} /></a></li> 
                        <li><a href="#"><InstagramOutlined style={{ color: '#fc1c70', fontSize: '25px' }} /></a></li>
                        <li><a href="#"><TwitterOutlined style={{ color: '#1cb2fc', fontSize: '25px' }} /></a></li>
                        <li><a href="#"><LinkedinOutlined style={{ color: '#3628ff', fontSize: '25px' }} /></a></li>
                    </ul> 
                </div>
                <div className="footer-menu-one">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                </div>
                </div>
                <div className="footer-bottom">
                    <p>Created by: <a href="https://www.linkedin.com/in/khudoyberdi-rahimov-a6410919a/">Khudoyberdi Rakhimov</a></p>
                </div>
            </Footer>
        </div>
    )
}

export default AppFooter