
const Footer = (props) =>{
    const {footerProps1, footerProps2} = props.footerProps;
    return(
      <footer className="page-footer font-small bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-3">
                    <div className="flex-center">
                        {/* Facebook */}
                        <a className="fb-ic p-3">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x "> </i>
                        </a>
                        {/* Twitter */}
                        <a className="tw-ic p-3">
                            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/* Google +*/}
                        <a className="gplus-ic p-3">
                            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                         </a>
                        {/*Linkedin */}
                        <a className="li-ic p-3">
                            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/*Instagram*/}
                        <a className="ins-ic p-3">
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        {/*Pinterest*/}
                        <a className="pin-ic p-3">
                            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Copyright */}
        <div className="footer-copyright text-center py-3 text-white">{footerProps1}
            <a href="/"> {footerProps2}</a>
        </div>
      </footer>
    )

}

export default Footer;



