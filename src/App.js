import logo from './logo.svg';
import profileImage from './img/prog.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> my react app</h1>
      <h2>author : Sri Keerthi Gnana Prakash</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
