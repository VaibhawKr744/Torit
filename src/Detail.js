import React from 'react';
import {Badge, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Detail extends React.Component {

    state = {
      condition: true,
     }
     
    handleClick=() =>{
      this.setState({
        condition: false
      });
      console.log(this.state);
    }
    render() 
    {
      const percentage = 90;
      return (
        
      <Card onClick={this.handleClick} style={{width: "80%", color: "black", marginBottom: "10px", backgroundColor: this.state.condition === true ? "" : "#f0e5c9" }}>
      <Card.Body>
        <div style={{display:"flex"}}>
          <div style={{ height:"100px", width: "150px", paddingLeft: "30px" }}> <CircularProgressbar styles={buildStyles({
          textColor: "green",
          pathColor: "green",
          
        })} value={percentage} text={`${percentage}%`}/></div>
          <div style={{marginLeft:"30px"}}>
            <h3 style={{textAlign:"left", }}>Prachi</h3>
            <h6 style={{textAlign:"left"}}>ATS Technology</h6>
            <span style={{fontSize:"15px", color:"green", fontWeight:"bold", color: this.state.condition === true ? "orange" : "green"}}>In progress </span>
            <span style={{fontSize:"15px"}}>|</span>
            <span style={{fontSize:"15px", fontWeight:"bold"}}> Next Milestone date : 20th December</span>
             <span style={{fontSize:"15px", marginLeft:"470px", fontWeight:"bold", marginRight:"10px"}}>Rs. 6000 </span>
             <span><Badge variant="success">Paid</Badge></span>
          </div>
        </div>
       
        <div style={{display:"flex", marginTop: "40px", marginLeft: "30px"}}>
            <Card style={{width:"555px", backgroundColor:"#f2f2f2" , height:"100px"}}>
              <div style={{textAlign:'left', padding: "20px"}}>
              <h5>Rakesh Gupta</h5>
              <p style={{fontSize:"15px", color:"grey"}}>9857463846 - rakesh@gmail.com</p>
              </div>
              
            </Card>
              <Card style={{width:"555px", backgroundColor:"#f2f2f2"}}>
              <div style={{textAlign:'left', paddingLeft: "20px", paddingTop: "20px"}}>
              <h6>Total Cost: Rs.10000</h6>
              <p style={{fontSize:"15px", color:"green", fontWeight:"bold"}}>Total paid: Rs.2000</p>
              </div>
              </Card>
        </div>
        
      </Card.Body>
      
    </Card>);
    }
  }

  export default Detail;
