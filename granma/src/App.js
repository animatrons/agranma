import './App.css';

function App() {
  return (
    <div className="App">
      <div className="reqHalf">
        <div className="title-searchBar">
          <div className="title">
            <h1>
              AGRANMA
            </h1>
          </div>
          <div className="searchBar-button">
            <input type="text" className="searchBar">
            </input>
            <span className="button">GO</span>
          </div>
        </div>
        <div className="loadingResult">
          
        </div>
      </div>
      <div className="resHalf">
        <div className="resCard">
          <div className="headBar">
            Results will show here
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
