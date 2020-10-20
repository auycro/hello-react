import React from 'react';

class API extends React.Component {
  constructor(){
    super();
    this.state = {
      repo_data: [],
    }
  }

  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/auycro/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({repo_data: data});
        //console.log('this is data: ', this.state.repo_data);
        const repo_array = this.state.repo_data;
        console.log(repo_array[0]);
        //repo_array.forEach(element => {
        //  console.log(element);
        //});
      });
  }
  render() {
    return <h4>API has Mounted, Check the browser 'console' </h4>;
  }
}
export default API;