import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <h1>Users:</h1>

    <section className="id">
      <User name="irfan" job="UI Dev" location="Benglore" />
      <User name="yusuf" job="Engineer" location="Ongole" />
      <User name="shaik" job="Frontend Develop" location="Vijayawada" />
      <User name="Imran" job="Software Develop" location="Hyderabad" />
    </section>
  </div>
}


function User(props) {
  return <div className="user">
    <h3>{props.name}</h3>
    <p>Job: {props.job}</p>
    <p>Location: {props.location}</p>
  </div>
}

export default App;