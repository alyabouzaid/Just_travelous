import React, { Component } from 'react';
import CountryHasCityHttpService from '../../api/countryHasCity.http.service';
import GenericTable from './GenericTable';

export class CountryCityTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'CountryNameCHC', title: 'Country' },
        { name: 'CityNameCHC', title: 'City' },
        { name: 'PostalCodeCHC', title: 'Postal Code' },
      ],
      rows: [],
    };
  }
  componentDidMount() {
    this.fetchData()
      .then((res) => {
        console.log('cdm res', res);
        this.setState({ rows: res });
      })
      .catch((err) => console.log(err));
  }

  fetchData = async () => {
    let result;
    await CountryHasCityHttpService.getAll()
      .then((response) => {
        console.log('response of GET all cities request ', response);
        if (response.status !== 200) {
          throw Error('err');
        }
        result = response.data;
      })
      .catch((e) => {
        console.log('error in GET all countries request', e);
      });
    return result;
  };

  render() {
    return <GenericTable rows={this.state.rows} columns={this.state.columns} />;
  }
}
