import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UsersList from './api/UsersList'

function App() {
  const url=process.env.REACT_APP_BACKOFFICE_PROTOCOL + "://" +
            process.env.REACT_APP_BACKOFFICE_SERVICE + ":" +
            process.env.REACT_APP_BACKOFFICE_PORT + "/" +
            process.env.REACT_APP_BACKOFFICE_API_ENDPOINT
  return (
    <div className="App">
      <header className="App-header">
        <h4><strong>{`connection string to backoffice`}</strong><br/>
        <i>{`${url}`}</i><br/>
        </h4>
        <p>&nbsp;</p>
        <UsersList></UsersList>
      </header>
    </div>
  );
}

export default App;
