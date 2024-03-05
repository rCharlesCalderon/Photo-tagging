import "../styles/Maps.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Maps() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/Home", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  return (
    <div className="Map-container">
      <span>Games</span>
      <div className="Maps">
        {images &&
          images.imageList.map((image, index) => (
            <div className="image-box" key={index}>
              <img src={image} alt="" className="image"></img>
            </div>
          ))}
      </div>
      <Link to="/Map1">
        <button> </button>
      </Link>
    </div>
  );
}

export default Maps;
