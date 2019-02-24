import React, { Component } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import SearchForm from './SearchComponents/SearchForm';
import FilterPage from './SearchComponents/Filter';
import data from '../LocalData/data.json';
import './style.css'

// icons:
import seatIcn from '../images/icons/seat.png'
import suitcaseIcn from '../images/icons/suitcase.png'

class ResultsPage extends Component {
constructor(props) {
super(props)
this.state = {
  results:[],
    boxAirline1:false,
    boxAirline2:false,
    boxAirline3:false,
    boxAirport1:false,
    boxAirport2:false,
    departure:"",
    arrival:"",
    price:""
}
this.options = [
{
  
},
]
// this.findMatch = this.findMatch.bind(this);
// this.displayResult = this.displayResult.bind(this);
  this.print = this.print.bind(this);
  this.viewCards = this.viewCards.bind(this);
  this.backBtn = this.backBtn.bind(this);
  this.updateResults = this.updateResults.bind(this);
  this.filterResultFlights = this.filterResultFlights.bind(this);
  this.onChange = this.onChange.bind(this);
  this.boxAirline1Func = this.boxAirline1Func.bind(this);

  // this.calcPrice = this.calcPrice.bind(this);
}


componentDidMount(){
  this.setState({results: data});
  // console.log(`from:${this.props.location.state.from}, to:${this.props.location.state.to}, travelers: ${this.props.location.state.travelers}`);
  console.log("V: " + this.props.location.state);

    let temp = this.state.results.filter((name) => {
    // console.log("name" + JSON.stringify(name));
    if(this.state.boxAirline1 !== false){
      console.log("TTTTTTt");
      this.setState({results: this.boxAirline1Func(name)});
    }

      // return name.name.indexOf(this.state.boxAirline1 >= 0)
  })

}

// findMatch = (userSearch)=> {
//   return data.find((element) => {
//     return (element.from === userSearch.from && element.to === userSearch.to && element.travelers === userSearch.travelers);
//   });
// }

// displayResult = (this.findMatch(this.state.search)).map((obj, index)=>{
//   return(
//   <div className="col-12" key={index}>
//     <p className="col">{obj.from}</p>
//     <p className="col">{obj.to}</p>
//     <p className="col">{obj.travelers}</p>
//   </div>
//   );
// })

filterResultFlights(userSearch){
 if( (this.props.location.state.from == userSearch.from) && 
      (this.props.location.state.to == userSearch.to) && 
      (this.props.location.state.travelers <= userSearch.placesLeft) )
    return true;
  else
    return false;

}

print(){
  for (let i = 0; i < this.state.results.length; i++) {
    console.log("RES: " + this.state.results[i].type)
  }
}

  updateResults(newResult, i) {
    this.setState(() => ({
      results: this.state.results.map(
        (prof) => (prof.id !== i) ? prof : {...prof, name: newResult}
      )
    }))
  }

    backBtn(){
    this.props.history.push("/");
  }

boxAirline1Func(name){
  console.log("boxAirline1Func");
  let temp = []
  if(name.Departure.airline == this.state.boxAirline1)
    temp.push(name);
  console.log("TEMP: " + JSON.stringify(temp));
  return temp;
}

viewCards(card,i) {
    // console.log("DD: " + card.Departure.from);
  let userSearch = {'from': card.Departure.from, 'to': card.Departure.to, 'placesLeft': card.placesLeft};

  // console.log("CA: " + this.state.boxAirline1);
  // let temp = this.state.results.filter((name) => {
  //   // console.log("name" + JSON.stringify(name));
  //   if(typeof card.boxAirline1 != false){
  //     this.boxAirline1Func(name);
  //   }

  //     // return name.name.indexOf(this.state.boxAirline1 >= 0)
  // })
  // if(typeof card.boxAirline1 !== "undefined"){              
  //                 this.state.results.filter(name => {
  //                   return name.name.indexOf(this.state.boxAirline1 >= 0)
  //                 }).map(this.viewCards)
  //               }
  if(this.filterResultFlights(userSearch)){
     return (          
        <div className="result mt-3 bg-white p-2" key={'card'+i} index={i} onChange={this.updateResults}>
          <div className="row">

                <div className="col-12">
                  <p className="blueTxtColor my-1 "><small>{card.flight}</small>
                  <img className="mx-1" src={suitcaseIcn} alt="suitcase"/>          
                  <img src={seatIcn} alt="seat"/>
                  </p>
                </div>

              <div className="col-12 col-md-9 border-right p-4">

                  <div className="col-12">
                      <div className="row">
                          <div className="col-5 col-md-7 border-right">

                            <div className="row">

                              <span className="col-6 text-center">{card.Departure.airline}</span>
                              <span className="col-6 text-center">{card.Departure.leavingTime}
                              <small className="d-block text-muted mx-auto">{card.Departure.airportFrom}</small>
                              </span>
                            </div>

                          </div>
                          <div className=" col-5 col-md-3 border-left text-center">טיסה ישירה 
                          <small className="d-block text-muted mx-auto text-center">משך טיסה {card.Departure.duration}</small>
                          </div>
                          <span className="col-2 border-left text-center">
                          <div>{card.Departure.returnTime}</div>
                          <small className="d-block text-muted mx-auto text-center">{card.Departure.airportTo}</small>
                          </span>

                      </div>
                  </div>

                       <div className="col-12">
                      <div className="row">
                          <div className="col-5 col-md-7 border-right">
                            <div className="row">
                              <span className="col-6 text-center">{card.Arrival.airline}</span>
                              <span className="col-6 text-center">{card.Arrival.leavingTime}
                              <small className="d-block text-muted mx-auto">{card.Arrival.airportFrom}</small>
                              </span>
                            </div>
                          </div>
                          <div className=" col-5 col-md-3 border-left text-center">טיסה ישירה 
                          <small className="d-block text-muted mx-auto text-center">משך טיסה {card.Arrival.duration}</small>
                          </div>
                          <span className="col-2 border-left text-center">
                          <div >{card.Arrival.returnTime}</div>
                          <small className="d-block text-muted mx-auto text-center">{card.Arrival.airportTo}</small>
                          </span>

                      </div>
                  </div>
            </div>

              <div className="col-12 col-md-3">
                  <small className="d-block text-danger font-weight-bold text-center">נותרו {card.placesLeft} מקומות</small>
                  <h3 className="d-block text-info font-weight-bold text-center">${parseInt(card.Departure.price, 10) + parseInt(card.Arrival.price, 10)}</h3>
                  <small className="d-block text-info font-weight-bold text-center"> לנוסע</small>
                  <small className="d-block font-weight-bold text-center">סה"כ ${parseInt(card.Departure.price, 10) + parseInt(card.Arrival.price, 10)}</small>
                  <button className="hazmen btn btn-info w-100">
                      הזמן
                  </button>
              </div>

          </div>
      </div>   
        
    )
  }
  else{
    return ("")
  }
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
  console.log(this.state);
}


render() {
  // let temp = this.state.results;
// let temp = this.state.results.filter(
//       (res)=>{
//         console.log("res");

//         return res.name.indexOf(this.state.results.boxAirline1);
//       }
//   );

//   if(typeof temp.boxAirline1 !== "undefined"){
//     temp.boxAirline1.filter(
//       (res)=>{
//         console.log("res");
//         return res;
//       }
//     );
//   }

return (
<section>
<div className="container">
  <div className="row py-5">
    <aside className="col-12 col-md-3">
      <div className="row py-3 px-1 d-none d-md-block">

        <div className="col-12 pb-3">
          <button type="button" class="btn btn-block border-0 text-white font-weight-bold newSearch" onClick={this.backBtn}>חיפוש חדש</button>
        </div>

        <div className="col-12">
        <ContainerDimensions>
          { ({ width }) => <SearchForm {...this.props} width={width}/> }
        </ContainerDimensions>
        </div>

           <ContainerDimensions>
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
                              <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline1" name="boxAirline1" onChange={this.onChange} checked={this.state.boxAirline1} aria-label="..."/>
                              <label className="col-10 text-white">ARKIA</label>
                            </div>
                           <div class="col-12 form-check">
                              <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline2"  name="boxAirline2" onChange={this.onChange} checked={this.state.boxAirline2}aria-label="..."/>
                              <label className="col-10 text-white">VUELING</label>
                          </div>
                          <div class="col-12 form-check">
                            <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirline3" name="boxAirline3" onChange={this.onChange} checked={this.state.boxAirline3} aria-label="..."/>
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
                              <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirport1" name="boxAirport1" onChange={this.onChange} checked={this.state.boxAirport1} aria-label="..."/>
                              <label className="col-10 text-white">BCN Barcelona</label>
                            </div>
                           <div class="col-12 form-check">
                              <input class="col-2 form-check-input position-static" type="checkbox" ref="boxAirport2" name="boxAirport2" onChange={this.onChange} checked={this.state.boxAirport2} aria-label="..."/>
                              <label className="col-10 text-white">TLV בן גוריון - נתב"ג</label>
                          </div>
                        </div>
                    </div>

                    <div className="w-100 mb-md-4"></div>
                  </div>
                </div>
</form>
           </ContainerDimensions>

      </div>
    </aside>

      <PureModal
              onClose={() => {
                console.log('handle closing');
                return true;
              }}
              ref="modal"
              className="Xleft">
               <div className="col-12">
                  <ContainerDimensions>
                    { ({ width }) => <FilterPage {...this.props} width={width}/> }
                  </ContainerDimensions>
                </div>
      </PureModal>
      <div class="btn-group col-12 col-md-3 d-block d-md-none">
        <div class="btn-fab" id="main">
          <button onClick={() => this.refs.modal.open() }>סנן תוצאות</button>
        </div>
      </div>

      <div className="col-md-8 offset-md-1">
        <div className="row">
          <div className="col-12">

              { 
                 this.state.results.map(this.viewCards) 
              }
          </div>
      </div>
    </div>
  </div>
</div>
</section>
)
}
}
export default ResultsPage;