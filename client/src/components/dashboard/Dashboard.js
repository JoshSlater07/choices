import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Time from "./time1.png";
import Family from "./fam.png";
import Options from "./options.png";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

   


  render() {
    const { user } = this.props.auth;

    return (

      
      <div style=
      {{ height: "75vh",
      
    }} 
      className="col-sm-12">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              <b>Choices - An Interactive Visual Schedule</b>
              <br/>
              <br/>
              <b>Welcome!,</b> {user.name.split(" ")[0]}

            </h4>
           
            <br></br>
            <br></br>
            <br></br>
            
            
           
            <div className = "appHome"></div>
            <a href = "Schedule"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
                   <img src = {Time} alt = "A schedule icon"
                    style = {{ 
                      marginLeft: "-10px",
                      marginTop: "-5px"
                      
      
                    }}></img>
               
            </a>
            

            <a href = "Account"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              <img src = {Family} alt = "A family icon" 
              style = {{ 
                marginLeft: "-10px",
                marginTop: "22px"

              }}></img>
            </a>

            <a href = "Preferences"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "3px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              <img src = {Options} alt = "An options icon" 
              style = {{ 
                marginLeft: "-10px",
                

              }}></img>
            </a>

            

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            
            
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                margin: "10px"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
