import "./App.css";
import Profile from "./profile/Profile";

function App() {
  var data = {
    fullName: "Metoui Naima",
    bio: " I'm a Front end JS student ,I love writing code  !! its just fun ",
    imgSrc: "./im1.jpg",
    profession: "front end JS STUDENT",
  };

  return (
    <div className="App">
      <Profile data={data} />
    </div>
  );
}

export default App;
