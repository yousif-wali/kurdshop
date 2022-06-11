function Footer(props){
    return (
        <footer>
        <div>Coptyright<sup>&copy;</sup>{props.theYear}</div>
        <div id="team">
            <span className="m-3"><a href="https://www.facebook.com/srdar.njar" target="_blank"><img alt="Sardar W. Khano Profile" src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/279837831_5020115351419577_7771119978484870744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E3ySCBt0tdMAX_D4EAo&tn=5ohIgmXSV-BWXKP5&_nc_ht=scontent-ort2-1.xx&oh=00_AT-QC4z-RpeEtyBEE-6OKcPImFUgl-Jv3qkE2w-_hiyZfg&oe=62A97B21"/>Sardar W. Khano</a></span>
            <span className="m-3"><a href="https://www.facebook.com/2yousif0r0wali2/" target="_blank"><img alt="Yousif R. Wali Profile" src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/279173747_2006626349510263_8826504392189770829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VIkW-4J9gs0AX9TO6rx&tn=5ohIgmXSV-BWXKP5&_nc_ht=scontent-ort2-1.xx&oh=00_AT_ob4CVlZteASbDQg365h51dwDqpPlSflvD9-PNU30VjQ&oe=62A97560"/>Yousif R. Wali</a></span>
        </div>
        <div id="socials"> 
            <a data-type="facebook" href="fa-facebook.png"><i className="fab fa-facebook-f"></i></a>
            <a data-type="instagram" href="fa-instagram.png"><i className="fab fa-instagram"></i></a>
            <a data-type="kwai" href="fa-kwai.png"><i className="fab fa-kwai"></i></a>
            <a data-type="tiktok" href="fa-tiktok.png"><i className="fab fa-tiktok"></i></a>
            <a data-type="snapchat" href="fa-snapchat.png"><i className="fab fa-snapchat"></i></a>
            <a data-type="twitter" href="fa-snapchat.png"><i className="fab fa-twitter"></i></a>
            <a data-type="youtube" href="fa-youtube.png"><i className="fab fa-youtube"></i></a>
        </div>
    </footer>
    );
}
export default Footer