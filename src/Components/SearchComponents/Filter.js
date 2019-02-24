// <label for="customRange3">Example range</label>
// <input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
import React, { Component } from 'react';




class Filter extends Component {
constructor(props) {
super(props);
this.state = {
from:"",
to:"",
boxAirline1:false,
boxAirline2:false,
boxAirline3:false,
boxAirport1:false,
boxAirport2:false,
departure:"",
arrival:"",
price:"",
travelers:0

}

this.onSubmit = this.onSubmit.bind(this);
this.onChange = this.onChange.bind(this);
}

onSubmit(e){
e.preventDefault();
console.log("VALUES: " + this.state.from + ", " + this.state.to + ", " + this.state.travelers );
// console.log(this.refs.boxAirline1.checked);
// console.log(this.refs.boxAirline2.checked);
// console.log(this.refs.boxAirline3.checked);
// console.log(this.refs.boxAirport1.checked);
// console.log(this.refs.boxAirport2.checked);

      // this.props.history.push({
      // pathname: "/results",
      // state: this.state
      // });

}

onChange(event){
  // console.log(e.target.value);
  // this.setState({[e.target.name]:e.target.value});
  // console.log(this.state);
  event.preventDefault();
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });

  // console.log(this.state);
    this.props.history.push({
      pathname: "/results",
      state: this.state
      });

}

// ComponentDidUpdate(){
// //   if(this.prevState != this.state)
// // console.log(this.refs.boxAirline1.checked);
// // console.log(this.refs.boxAirline2.checked);
// // console.log(this.refs.boxAirline3.checked);
// // console.log(this.refs.boxAirport1.checked);
// // console.log(this.refs.boxAirport2.checked);
// }

componentDidUpdate(prevProps, nextProps) {

  // console.log("pre: " + JSON.stringify(prevProps.location.state));
  // console.log("nxt: " + JSON.stringify(nextProps));
  // console.log("BE:" + this.props.location.state.boxAirline1);
  // console.log("BE:" + JSON.stringify(this.props));
  console.log("pre: " + prevProps.location.state.boxAirline1);
  console.log("nxt: " + nextProps.boxAirline1);

    if (prevProps.location.state.boxAirline1 !== nextProps.boxAirline1) {
    console.log("BB");
    // this.fetchData(this.props.userID);
    // if(this.state.boxAirline1 !== prevProps)
      // console.log("HH");

    }
}

render() {
return (
<form >
  <div className="form-row backgroundBlue">
  <div className="col-11 mx-2"> 

      <div className="col-12 mb-2 mx-0 pt-3 pb-1 border-bottom">
          <div className="row">
            <label className="col-12 mb-3 col-form-label backgroundBlue text-white font-weight-bold border-0">טווח מחירים לאדם</label>
            <small className="col-9 text-white"> 1$</small>
            <small className="col-2 text-white"> 1000$</small>
            <input type="range" multiple class="custom-range col-12 mb-3 form-control border-0" name="price" onChange={this.onChange} value={this.state.price} min="0" max="1000" step="100" id="customRange3"/>
          </div>
      </div>

      <div className="col-12 mb-2 mx-0 pt-3 pb-1 border-bottom border-light">
          <div className="row">
            <label className="col-8 col-form-label backgroundBlue text-white font-weight-bold border-0">חברת תעופה</label>

              <div class="col-12 form-check">
                <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline1" name="boxAirline1" onChange={this.onChange} value={this.state.boxAirline1} aria-label="..."/>
                <label className="col-10 text-white">ARKIA</label>
              </div>
             <div class="col-12 form-check">
                <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline2"  name="boxAirline2" onChange={this.onChange} value={this.state.boxAirline2}aria-label="..."/>
                <label className="col-10 text-white">VUELING</label>
            </div>
            <div class="col-12 form-check">
              <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline3" name="boxAirline3" onChange={this.onChange} value={this.state.boxAirline3} aria-label="..."/>
              <label className="col-10 text-white">VUELING</label>
            </div>
          </div>
      </div>

      <div className="col-12 mb-2 mx-0 pt-3 pb-1 border-bottom">
          <div className="row">
            <label className="col-12 mb-3 col-form-label backgroundBlue text-white font-weight-bold border-0">משך טיסה
            <small> כולל עצירות</small></label>
            <label className="col-12 mb-3 col-form-label backgroundBlue text-white border-0">טיסה הלוך</label>
            <small className="col-7 col-md-7 mb-3 text-white"> 01:00 שעות</small>
            <small className="col-5 col-md-5 mb-3 text-white"> 10:00 שעות</small>
            <input type="range" multiple class="custom-range col-12 mb-3 form-control border-0" name="departure" onChange={this.onChange} value={this.state.departure} min="0" max="10" step="1"/>
            <label className="col-12 mb-3 col-form-label backgroundBlue text-white border-0">טיסה חזור</label>
            <small className="col-7 col-md-7 mb-3 text-white"> 01:00 שעות</small>
            <small className="col-5 col-md-5 mb-3 text-white"> 10:00 שעות</small>
            <input type="range" multiple class="custom-range col-12 mb-3 form-control border-0" name="arrival" onChange={this.onChange} value={this.state.arrival} min="0" max="10" step="1" />
          </div>
      </div>

      <div className="col-12 mb-2 mx-0 pt-3 pb-1 border-light">
          <div className="row">
            <label className="col-8 col-form-label backgroundBlue text-white font-weight-bold border-0">שדה תעופה</label>

              <div class="col-12 form-check">
                <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirport1" name="boxAirport1" onChange={this.onChange} value={this.state.boxAirport1} aria-label="..."/>
                <label className="col-10 text-white">BCN Barcelona</label>
              </div>
             <div class="col-12 form-check">
                <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirport2" name="boxAirport2" onChange={this.onChange} value={this.state.boxAirport2} aria-label="..."/>
                <label className="col-10 text-white">TLV בן גוריון - נתב"ג</label>
            </div>
          </div>
      </div>

      <div className="w-100 mb-md-4"></div>
    </div>
  </div>
</form>
);
}
}
export default Filter;