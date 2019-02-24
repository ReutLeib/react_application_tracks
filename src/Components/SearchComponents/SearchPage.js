import React, { Component } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import SearchForm from './SearchForm';
import './style.css';


class SearchPage extends Component {
constructor(props) {
super(props);
this.state = {
from:"",
to:"",
number_op:0
}

// Don't call this.setState() here!
}

render() {
return (
<div className="jumbotron jumbotron-fluid mb-0">
    <div className="container full-height">
      <div className="mainPage-form p-1 p-md-3 align-middle">
        <ContainerDimensions>
        { ({ width }) => <SearchForm {...this.props} width={width}/> }
        </ContainerDimensions>
      </div>
    </div>
</div>
);
}
}


export default SearchPage;