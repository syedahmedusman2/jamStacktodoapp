import React,{useEffect} from 'react';
import {Container, Heading, Button, Flex, NavLink } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";

export default props => {
    useEffect(()=>{
        netlifyIdentity.init({})
    });
    
    return (
        <Flex as='nav'>
  <NavLink href='#!' p={2}>
    Home
  </NavLink>
  <NavLink href='#!' p={2}>
    Blog
  </NavLink>
  <NavLink href='#!' p={2}>
    About
  </NavLink>
</Flex>

    <Container>
        <Flex sx={{flexDirection: " column", padding: 3}}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{margin:2, color: 'black'}}
        onClick= { () => {netlifyIdentity.open()} }
        >Login</Button>
        </Flex>
    </Container>
    
);}