import Carousel from './Carousel'
import {images} from './Data'
function App() {
  return (
    <div className="container-fluid row">
      <div id = "background-image">
        <div>
          <img id="coverImage" src={require("./image/"+images[0].background+".jpg")}/>
        </div>
      </div>
      <span className="col-lg-5 offset-0 col-md-5 col-sm-12" style={{marginTop: '9em'}}>
        <h3 id="title">{images[0].title}</h3>
        <p id="desc">{images[0].desc}</p>
        </span>
      <span className="col-lg-7 offset-0 col-md-7 col-sm-12"><Carousel title = "title" desc = "desc" backgroundImage = "coverImage"/></span>
      <div>
        Welcome:- <br/> More To Come Soon...
      </div>

    </div>
  ); 
}

export default App;
