import React, { Component } from 'react';


class Search_page extends Component {
constructor(props) {
super(props);
this.state = {
from:"",
to:"",
number_op:0
}
this.onSubmit = this.onSubmit.bind(this);
this.onChange = this.onChange.bind(this);
// Don't call this.setState() here!
}
onSubmit(e){
e.preventDefault();
  this.props.history.push({
    pathname: "/results",
    state: this.state
  });
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
return (
<div className="container">
  <div className ="row">
    
  </div>
</div>
);
}
}


export default Search_page;