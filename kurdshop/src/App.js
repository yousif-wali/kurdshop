import Carousel from './Carousel'
import {images} from './Data'
import Profile from "./Profile"


function App() {
  return (
    <div className="container-fluid app row">
      <div id = "background-image">
        <div>
          <img id="coverImage" src={require("./image/"+images[0].background+".jpg")} alt="Background"/>
        </div>
      </div>
      <div className="vipad">
      <span className="col-lg-5 offset-0 col-md-5 col-sm-12 details">
        <div id="vipDetails">
        <h3 id="title">{images[0].title}</h3>
        <p id="desc">{images[0].desc}</p></div>
        </span>
      <span className="col-lg-7 offset-0 col-md-7 col-sm-12 sliders">
        <Carousel title = "title" desc = "desc" backgroundImage = "coverImage" vipId= "vipDetails" />
        </span>
        </div>
<Profile/>
    </div>
  ); 
}

export default App;
