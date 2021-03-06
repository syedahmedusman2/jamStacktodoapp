import React,{useEffect,useState, useRef, useReducer} from 'react';
import { Input, Container, Heading, Button, Flex, Label, NavLink, Checkbox } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";
import {Link} from 'gatsby';

export default props => {
    const [user, setUser]=  useState();
    const inputRef= useRef();
const [todos, setTodos] = useState([])
// const checkbo= useEffect(false);
    useEffect(()=>{
        netlifyIdentity.init({})
        
    });

    netlifyIdentity.on("login", user=>{
        netlifyIdentity.close();
        setUser(user);
    });

    netlifyIdentity.on("logout", () =>{
        netlifyIdentity.close();
    })
    
    return (
        
    <Container>
        <Flex as='nav'>
  <NavLink as={Link} to="/" p={2}>
    Home
  </NavLink>
  <NavLink as={Link} to="/app" p={2}>
    Dashboard
  </NavLink>
  {user &&(<NavLink p={2}>
      {user.user_metadata.full_name}
  </NavLink>)}
  {/* <NavLink href='#!' p={2}>
    About
  </NavLink> */}
</Flex>

        <Flex sx={{flexDirection: " column", padding: 3}}>
        <Heading as="h1">Todo App</Heading>
        <Button sx={{margin:2, color: 'black'}}
        onClick= { () => {netlifyIdentity.open()} }
        >Login</Button>
        </Flex>

        <Flex as="form" onSubmit={e=>{e.preventDefault();
        setTodos([{done:false, value:inputRef.current.value},...todos])
  inputRef.current.value= ""
  }}>
    <Label sx={{display: "flex"}}>
  <span>Add&nbsp;Todo</span>

  <Input ref={inputRef}
  defaultValue='Hello'
/>

</Label>

<Button variant='secondary' sx={{color:'black'}}>Boop</Button>
  </Flex>

  <Flex sx={{flexDirection:"column"}}>
    <ul>
      {todos.map(todo=>(
        <Flex as="li">
          <Checkbox checked={todo.done}/>
      <span>{todo.value}</span>
      </Flex>
      ))}
    </ul>
  </Flex>

        {/* <Label>
  Form Label
</Label>

<Input
  defaultValue='Hello'
/> */}

        {/* <Button mr={2}>Beep</Button> */}
<Button variant='secondary'>Boop</Button>



    </Container>
    
);}