import logo from './logo.svg';
import './App.css';
import image2 from './image2.jpg';



function App() {
  return (
    <div className="App">
      <div style={{border:"solid1pxblack",maxWidth:100}}>

          <h1 className="title red">Lawson Sylvain</h1>

          <br />

          <img height="500" width="500" src={image2}/>

          <br />

          <img height="500" width="500" src= {"image1.jpg"} />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>  


  </div>

  );
}

export default App;
