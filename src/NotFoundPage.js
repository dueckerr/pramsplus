import React from 'react';
import { Link } from 'react-router-dom';
import logo from "assets/img/PPlogo.jpg";

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={logo}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;