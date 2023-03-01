import React from "react";
import "./LatestOffers.css";
import CardM from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardImg } from "react-bootstrap";
import credit from '../images/credit.jpg';
import electronics from '../images/electorincs.jpg';
import laptop from '../images/laptop.jpg';
import shopping from '../images/shopping.jpg';
import travel from '../images/travel.jpeg';


function LatestOffers() {
  
    return (
    <>
        <Typography sx={{ textAlign: "center", justifyContent: "center", fontSize: "30px" ,
      fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>
            <b>Latest Offers</b>
        </Typography>
        <div className="latestoffer-container">
        <div className="latestoffercard">
          <CardM sx={{ maxWidth: 250, maxheight: 350 , backgroundColor:"#f4f5f7", color:"#002d64"}} className="completecardlatestoffer">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
              fontFamily= "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Credit Card
              </Typography>
              <CardImg
                src={credit}
                style={{maxHeight:130,maxWidth:210}}/>
                <br/>
              <Typography variant="body3" color="text.secondary">
                Grab the exclusive offer now by using our cards.
              </Typography>
            </CardContent>
          </CardM>
        </div>
        <div className="latestoffercard">
          <CardM sx={{ maxWidth: 250, maxheight: 350 , backgroundColor:"#f4f5f7", color:"#002d64"}} className="completecardlatestoffer">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
              fontFamily= "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Electronics
              </Typography>
              <CardImg
                src={electronics}
                style={{maxHeight:100,maxWidth:210}}/>
                <br/>
              <Typography variant="body3" color="text.secondary">
                Avail exciting offers via SaralMart.
              </Typography>
            </CardContent>
          </CardM>
        </div>
        <div className="latestoffercard">
          <CardM sx={{ maxWidth: 250, maxheight: 350 , backgroundColor:"#f4f5f7", color:"#002d64"}} className="completecardlatestoffer">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
              fontFamily= "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                NetBanking
              </Typography>
              <CardImg
                src={laptop}
                style={{maxHeight:100,maxWidth:210}}/>
                <br/>
              <Typography variant="body3" color="text.secondary">
                Save big amount across popular brands.
              </Typography>
            </CardContent>
          </CardM>
        </div>
        <div className="latestoffercard">
          <CardM sx={{ maxWidth: 250, maxheight: 350 , backgroundColor:"#f4f5f7", color:"#002d64"}} className="completecardlatestoffer">
            <CardContent >
              <Typography gutterBottom variant="h5" component="div"
              fontFamily= "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Travel
              </Typography>
              <CardImg
                src={travel}
                style={{maxHeight:100,maxWidth:210}}/>
                <br/>
              <Typography variant="body3" color="text.secondary">
                Fly with ease this hoilday season.
              </Typography>
            </CardContent>
          </CardM>
        </div>
        <div className="latestoffercard">
          <CardM sx={{ maxWidth: 250, maxheight: 350 , backgroundColor:"#f4f5f7", color:"#002d64"}} className="completecardlatestoffer">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
              fontFamily= "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Shopping
              </Typography>
              <CardImg
                src={shopping}
                style={{maxHeight:100,maxWidth:210}}/>
                <br/>
              <Typography variant="body3" color="text.secondary">
                Get exclusive offers on different sites.
              </Typography>
            </CardContent>
          </CardM>
        </div>
        </div>
    </>
  );
}

export default LatestOffers;
