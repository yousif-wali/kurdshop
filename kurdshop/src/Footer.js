function Footer(props){
    return (
        <footer>
        <div>Coptyright<sup>&copy;</sup>{props.theYear}</div>
        <div id="team">
            <span className="m-3"><a href="https://www.facebook.com/srdar.njar" target="_blank" rel="noreferrer"><img alt="Sardar W. Khano Profile" src={require("./image/developers/logo.png")}/>Sardar W. Khano</a></span>
            <span className="m-3"><a href="https://www.facebook.com/2yousif0r0wali2" target="_blank" rel="noreferrer"><img alt="Yousif R. Wali Profile" src={require("./image/developers/yousif.jpg")}/>Yousif R. Wali</a></span>
        </div>
        <div id="socials"> 
            <a data-type="facebook" href="fa-facebook.png"><i className="fab fa-facebook-f"></i></a>
            <a data-type="instagram" href="fa-instagram.png"><i className="fab fa-instagram"></i></a>
            <a data-type="tiktok" href="fa-tiktok.png"><i className="fab fa-tiktok"></i></a>
            <a data-type="snapchat" href="fa-snapchat.png"><i className="fab fa-snapchat"></i></a>
            <a data-type="twitter" href="fa-snapchat.png"><i className="fab fa-twitter"></i></a>
            <a data-type="youtube" href="fa-youtube.png"><i className="fab fa-youtube"></i></a>
        </div>
    </footer>
    );
}
export default Footer