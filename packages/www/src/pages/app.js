import React from "react";
// import { render } from "react-dom"
import { Router, Link } from "@reach/router";
import netlifyIdentity from "netlify-identity-widget";
// let Home = () => <div>Home</div>
let Dash = () => {
const user = netlifyIdentity.currentUser();



return (<div>{user && user.user_metadata.full_name}</div>)
    
}

export default props => {
    return (
        <Router>
    {/* <Home path="/" /> */}
    <Dash path="/app" />
  </Router>
        
    );
};

  