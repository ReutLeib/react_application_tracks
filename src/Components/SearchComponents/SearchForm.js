import React, { Component } from 'react';

// icons:
import passengerIcn from '../../images/icons/passenger.png'
import departIcn from '../../images/icons/depart.png'
import arriveIcn from '../../images/icons/arrive.png'


class SearchForm extends Component {
constructor(props) {
super(props);
this.state = {
from:"",
to:"",
travelers:0
}
this.onSubmit = this.onSubmit.bind(this);
this.onChange = this.onChange.bind(this);
// Don't call this.setState() here!
}
onSubmit(e){
e.preventDefault();
console.log("VALUES: " + this.state.from + ", " + this.state.to + ", " + this.state.travelers );

	this.props.history.push({
pathname: "/results",
state: this.state
});

}

onChange(e){
	console.log(this.props.width);
this.setState({[e.target.name]:e.target.value});
}

render() {
return (
<form onSubmit={this.onSubmit}>
	<div className="form-row">
		<div className={"col-12 mb-2 " + (this.props.width > 767 ? "col-md-6 px-md-3":"col-md-12")}>
			<div className="col-12 bg-white">
				<div className="row">
					<label className={"col-form-label " + (this.props.width < 300 ? "col-6 ":"col-3")}>
						<img src={departIcn} className="iconSearchForm pr-2" alt="depart"/>
						המראה:</label>
					<input type="text" className={"form-control border-0 " + (this.props.width < 300 ? "col-6":"col-9")} name="from" onChange={this.onChange} value={this.state.from}/>
				</div>
			</div>
		</div>
		<div className={"col-12 mb-2 " + (this.props.width > 767 ? "col-md-6 px-md-3":"col-md-12")}>
			<div className="col-12 bg-white">
				<div className="row">
					<label className={"col-form-label " + (this.props.width < 300 ? "col-6 ":"col-3")}>
						<img src={arriveIcn} className="iconSearchForm pr-2" alt="arrive"/>
						נחיתה:</label>
					<input type="text" className={"form-control border-0 " + (this.props.width < 300 ? "col-6":"col-9")} name="to" onChange={this.onChange} value={this.state.to}/>
				</div>
			</div>
		</div>

		<div className={"col-12 mb-2 "+ (this.props.width>767 ? "col-md-4 px-md-3" : "col-md-12")}>
			<div className="col-12 bg-white">
				<div className="row">
					<label className="col-5 col-form-label"><img src={passengerIcn} className="iconSearchForm pr-2" alt="passenger"/>נוסעים:</label>
					<select className="col-7 border-0 bg-white" name="travelers" onChange={this.onChange} value={this.state.travelers}>
						<option  value="1">1</option>
						<option  value="2">2</option>
						<option  value="3">3</option>
						<option  value="4">4</option>
					</select>
				</div>
			</div>
		</div>

		<div className="w-100 mb-md-4"></div>
		<div className="col-12 mx-auto">
			<button type="submit" className="btn-block btnGreen rounded-0 w-100 btn border-0 text-white">חפש</button>
		</div>
	</div>
</form>
);
}
}
export default SearchForm;