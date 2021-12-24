import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import AddedTask from './Components/AddedTask/AddedTask';
import Donate from './Components/Donate/Donate';
import Blog from './Components/Blog/Blog';
import Campaign from './Components/Campaign/Campaign';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/AddEvent/AddEvent';


export const UserInfo = createContext()



function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    displayName: '',
    email: '',
    date: '',
    descriptrion: '',
    library: ''
  })
  return (
    <UserInfo.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/donate'>
            <Donate></Donate>
          </Route>
          <Route exact path='/blog'>
            <Blog></Blog>
          </Route>
          <Route exact path='/campaign'>
            <Campaign></Campaign>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/register/:_id'>
            <Register></Register>
          </PrivateRoute>
          {/* <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<Register />} />
          </Route> */}
          {/* <Route path='/registration' element={<Register />} /> */}
          {/* <Route path='/registration' element={<Navigate to={user.isSignIn ? <Register /> : '/login'} />} /> */}
          {/* <Route path='*' element={<Navigate to={user.isSignIn ? '/home' : '/login'} />} /> */}
          <Route exact path='/addedTask'>
            <AddedTask></AddedTask>
          </Route>
          <Route exact path='/admin'>
            <Admin></Admin>
          </Route>
          <Route exact path='/addEvent'>
            <AddEvent></AddEvent>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserInfo.Provider>
  );
}

export default App;
