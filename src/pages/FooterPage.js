import React from 'react';
import '../assets/css/footer.css'

function FooterPage(props) {
    return (
        <div className="footer">
        Copyright © {props.title} - 2020.
        </div>
    );
}

export default FooterPage;
