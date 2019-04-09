import React, { Component } from "react";
class Schedule extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h1 style ={{ 
  top: "50px"}}>
             
              <span style={{ fontFamily: "Helvetica" }}>Schedule</span> 
            
            </h1>


           
            <br />
            <h6><span style={{ fontFamily: "Helvetica" }}>Please select a day to view your schedule!</span></h6> 
            <br />

            <br />

            <br />

            <br />

            <br />

            <br />

            
            <a href = "timeline"
              style={{
                width: "125px",
                height: "125px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                margin: "15px",
                textAlign: "center"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Edit Schedule
            </a>

            <a href = "timeline1"
              style={{
                width: "125px",
                height: "125px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                margin: "15px",
                textAlign: "center"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              View Schedule
            </a>

            

        
            
          </div>
        </div>
      </div>
    );
  }
}
export default Schedule;
