import React from 'react';
import { Link } from 'react-router-dom';

import AllCountries from '../countries.json';

const CountryDetails = (props) => {
  
    const idContry = props.match.params.idContry;
  
    const selectedCountry = AllCountries.find((country) => {
      return country.cca3 === idContry;
    });
  
    const borderingCountries = AllCountries
      .filter((country) => {
        return (
          selectedCountry.borders.findIndex((item) => {
            return item === country.cca3;
          }) >= 0
        );
      })
      .map((CountryBordering) => {
        return (
          <li>
            <Link to={CountryBordering.cca3}>{CountryBordering.name.common}</Link>
          </li>
        );
      });

    return (
        <div class="overflow-auto">
        <h1>{selectedCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td class="width: 30%">Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {borderingCountries}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

}

export default CountryDetails;