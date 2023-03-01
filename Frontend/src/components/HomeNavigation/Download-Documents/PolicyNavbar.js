import * as React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import './SOP.css';
import sop1 from '../../images/database.jpg';
import sop2 from '../../images/incidentmgmt.jpg';
import sop3 from '../../images/middleware1.jpg';
import pol1 from '../../images/code&ethics.jpg';
import pol2 from '../../images/cybersecurity.jpg';
import pol3 from '../../images/governance.jpg';
import scd1 from '../../images/networkdevices.jpg';
import scd2 from '../../images/operatingsys.jpg';
import { SessionLogic } from '../../Logins/SessionLogic';

export default function PolicyNavbar() {
  
  return (
    <>
    <SessionLogic/>
    <div className='policies'>
    <h4 className='fontfamily'>Standard Operating Procedure (SOP) </h4>
    <hr height="2px" />
     <div className="flex-containersop">
      <Card sx={{marginLeft:"50px"}}>
      <Link to="/sop1">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={sop1} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Database Management</Typography>
      </Card>

      <Card sx={{marginLeft:"50px"}}>
      <Link to="/sop2">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={sop2} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Incident Management</Typography>
      </Card>

      <Card sx={{marginLeft:"50px"}}>
      <Link to="/sop3">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={sop3}/>
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Middleware Management</Typography>
      </Card>
      <br/>
      <br/>
      </div>

        
    <h4 className='fontfamily'>Policies</h4>
    <hr height="2px" />
     <div className="flex-containersop">
      <Card sx={{marginLeft:"50px"}}>
      <Link to="/policy1">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={pol1} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Code Of Conduct & Ethics</Typography>
      </Card>

      <Card sx={{marginLeft:"50px"}}>
      <Link to="/policy2">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={pol2} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Cyber Security</Typography>
      </Card>

      <Card sx={{marginLeft:"50px"}}>
      <Link to="/policy3">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={pol3} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Corporate Governance</Typography>
      </Card>
      <br/>
      <br/>
      </div>
      
    <h4 className='fontfamily'>Specification Control Document (SCD) </h4>
    <hr />
     <div className="flex-containersop">
      <Card sx={{marginLeft:"50px"}}>
      <Link to="/scd1">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={scd1} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Network Devices</Typography>
      </Card>

      <Card sx={{marginLeft:"50px"}}>
      <Link to="/scd2">
        <img style={{
          height: "170px", width: "200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: " 50%"
        }} src={scd2} />
      </Link><br/>
      <Typography variant='body4' marginLeft="30px">Operating Systems</Typography>
      </Card>
      <br/>
      <br/>
      </div>
      <br/>
      <br/>
      </div>
    </>
  );
}