import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ProjectNavigation from "../ProjectNavigation";
import "./EmployeeNewsFeed.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { SessionLogic } from '../../../Logins/SessionLogic';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../../../images/newsfeedlogo.jpg';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const EmployeeNewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [sh, setsh] = useState(false);
  const [shows, setshows] = useState("Comments");
  const [expanded, setExpanded] = React.useState(false);

  const setCommentData = (e) => {
    setCommentInput(e.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let newsEmpData1 = localStorage.getItem("LoginData");
  let newsEmpData2 = JSON.parse(newsEmpData1);
  console.log(newsEmpData2);
  const show1 = () => {
    setsh(sh == false ? true : false);
    setshows(shows == "Comments" ? "Close Comments" : "Comments");
  };
  const addComment = (ele) => {
    console.log(ele);
    if (commentInput == "") {
      alert("Please enter comment");
    } else {
      let data = {
        message: commentInput,
        name: newsEmpData2.employeeName,
      };
      axios
        .post(`http://localhost:8088/news/${ele.newsFeedId}/comment/add`, data)
        .then((response) => response);

      document.getElementById("form1").value = "";
      axios.get("http://localhost:8088/news").then((response) => {
        setNewsData(response.data);
      });

      alert("Comment is Added Successfully.", window.location.reload());
    }
  };

  // const deleteComment = (ele1) => {
  //   console.log(ele1);
  //   axios.delete(`http://localhost:8088/comment/delete/${ele1.commentId}`);
  //   alert("Comment delete", window.location.reload());
  // };

  useEffect(() => {
    axios.get("http://localhost:8088/news").then((response) => {
      setNewsData(response.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8088/news").then((response) => {
  //     setNewsData(response.data);
  //   });
  // }, []);




  return (
    <>
      <ProjectNavigation />
      <div>
        <MDBContainer className="py-1">
          <MDBRow>
            <MDBCol lg="3">
              <Card sx={{ marginTop: "30px", padding: "10px", backgroundColor: "#f4f5f7" }}>
                <Typography gutterBottom variant="h4" component="div" color="#002d64"
                  fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                  align="center">
                  Events
                </Typography>
                <hr />
                <li>Saral 4th anniversary</li>
                <hr />
                <li>Halferly Performance Awards</li>
                <hr />
                <li>Health and Wealth workshop</li>
                <hr />
                <li>Success Celebration of Saral profits</li>
                <br />
              </Card>
            </MDBCol>
            <MDBCol lg="5">
              <div >

                {newsData.map((ele) => {
                  return (
                    <>
                      <SessionLogic />
                      <Card sx={{ maxWidth: 545, marginTop: "30px", border: "1px solid black" }}>
                        <CardHeader
                          avatar={
                            <Avatar aria-label="recipe">
                              <img src={logo}
                                className="border rounded-circle me-2"
                                alt="Avatar"
                                style={{ height: "40px", marginRight: "5px" }}
                              />
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={ele.newsName}
                          subheader={ele.newsDate}
                        />
                        <CardMedia
                          component="img"
                          height="194"
                          image={ele.newsImageUrl}
                          alt="Paella dish"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {ele.newsDescription}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >
                            <CommentIcon />
                          </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <div class="md-form">
                              <input
                                type="text"
                                id="form1"
                                class="form-control"
                                placeholder="Add Comment Here..."
                                style={{ border: "solid 1px" }}
                                onChange={setCommentData}
                              />
                            </div>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              id="btnlogin"
                              style={{ backgroundColor: "#002d64" }}
                              onClick={() => {
                                addComment(ele);
                              }}
                            >
                              Add Comment
                            </Button>
                            <p onClick={show1}>{shows}</p>
                            <div style={{ display: sh ? "block" : "none" }}>
                              {ele.comments?.map((ele1) => {
                                console.log(ele1);
                                return (
                                  <>
                                    <div className="d-flex mb-3">
                                      <a>
                                        <img
                                          src="https://storage.needpix.com/thumbs/blank-profile-picture-973460_1280.png"
                                          className="border rounded-circle me-2"
                                          alt="Avatar"
                                          style={{ height: "40px" }}
                                        />
                                      </a>
                                      <div>
                                        <div className="bg-light rounded-3 px-3 py-1">
                                          <h6><b>{ele1.name}</b>
                                            <br />
                                            {ele1.message}  </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Collapse>
                      </Card>


                    </>
                  );
                })}
              </div>
            </MDBCol>
            <MDBCol lg="4">
              <Card sx={{ marginTop: "30px", padding: "10px", backgroundColor: "#f4f5f7" }}>
                <Typography gutterBottom variant="h4" component="div" color="#002d64"
                  fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                  align="center">
                  Announcements
                </Typography>

                <hr />
                <li>Salient features of Saral Loan facility to USA</li>
                <hr />
                <li>Waiver in ATM Service Charges</li>

                <hr />
                <li>Saral Calendar for the year 2023</li>
                <hr />
                <li>New Launch of Atal Pension Yojana(APY)</li>
                <hr />
                <li>"SARAL WECARE" Deposit Scheme for Senior Citizens</li>
                <hr />
                <li>Revision of safe deposit lockers rental charges W.E.F 2023</li>
                <br />
              </Card>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    </>
  );
};

export default EmployeeNewsFeed;
