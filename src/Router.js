import React from "react";
import {Route } from "react-router-dom";
import SearchPage from "./Components/SearchComponents/SearchPage";
import ResultsPage from "./Components/Results";



const AppRouter = () =>{
	return(
		<React.Fragment>
			<Route exact path="/" component={SearchPage} />
			<Route path="/results" component={ResultsPage}/>
		</React.Fragment>
	);

}

export default AppRouter;
