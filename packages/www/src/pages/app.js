// import React, {useContext} from 'react';
// import {Container, Flex, Heading, Button, NavLink} from 'theme-ui'




import React from "react";
import {inputRef, Input, Container, Heading, Button, Flex, Label, NavLink } from "theme-ui";
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
      <div>
        <Router>
    {/* <Home path="/" /> */}
    <Dash path="/app" />

    
  </Router>
  <h1>Eh</h1>

  <Flex as="form" onSubmit={e=>{e.preventDefault();
  alert(inputRef.current.value);
  }}>
    <Label sx={{display: "flex"}}>
  <span>Add&nbsp;Todo</span>

  <Input ref={inputRef}
  defaultValue='Hello'
/>

</Label>

<Button variant='secondary'>Boop</Button>
  </Flex>



        {/* <Flex sx={{flexDirection: " column", padding: 3}}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{margin:2, color: 'black'}}
        onClick= { () => {netlifyIdentity.open()} }
        >Login</Button>
        </Flex> */}

        



        {/* <Button mr={2}>Beep</Button> */}


  </div>
        
    );
};

  