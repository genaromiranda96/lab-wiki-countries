import React from 'react';
import Navbar from './components/Navbar'
import CountrieList from './components/CountrieList'
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom';
import AllCountries from './countries.json';


function App() {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <div class="row">
            <div className="col-5 countries-container overflow-scroll" style= {{height: "800px"}}>
              <CountrieList countries={AllCountries} />
            </div>
            <div className="col-7">
            <Switch>
              <Route path="/:idContry" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
