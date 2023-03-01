import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from "react-bootstrap/Card";
import CardM from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './ServiceNavbar.css';
import { useNavigate } from "react-router-dom";

export default function LoanTabs() {
    const [value, setValue] = React.useState('1');
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" >
                        <Tab label={(<Typography variant="body4" className="accfont">Home Loan</Typography>)} value="1" />
                        <Tab label={(<Typography variant="body4" className="accfont">Vehicle Loan</Typography>)}value="2" />
                        <Tab label={(<Typography variant="body4" className="accfont">Education Loan</Typography>)}value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="cards-container">
                        {/* <Box width='300px'height='300px'> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Home Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Are you are dreaming of buying your own residence?
                                     Our bob home loan is packed with several exclusive features and benefits for aspiring homeowners.
                                    <br/>
                                  
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                            </div>
                        {/* </Box> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px",backgroundColor:"#f4f5f7" }} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Home Loan Advantage
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Saral  invites you to be a proud owner of your own home and offers easy home loan with 
                                    a number of conveniences to suit your budget.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Home Loan Takeover Scheme
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Switch your existing home loans to Saral Bank. Our home loans are packed with several exclusive features and benefits.                     
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Home Improvement Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Upgrade your residence with home renovation loans from us.
                                    Renovating your home can be a costly, 
                                    but home loan can make your dream home.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                <div className="cards-container">
                        {/* <Box width='300px'height='300px'> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Pre-Owned Car Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Own your dream ride with pre-owned car loans from us. 
                                    Get a pre-owned car loan to purchase a vehicle of your choice. 
                                   
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                            </div>
                        {/* </Box> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px", backgroundColor:"#f4f5f7" }} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Car Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Own your dream ride with car loans from Saral Bank. Get a car loan to purchase a vehicle of your choice. 
                                    With our loans, you can buy a hatchback, sedan, MUV, SUV, sports car or a luxury car. 
                                    <br/>
                                  
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Two Wheeler Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Saral Bank offers affordable two-wheeler finance with affordable monthly instalments. 
                                    With our two-wheeler loans, you can purchase a brand new two-wheeler or bike.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px",backgroundColor:"#f4f5f7" }} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Tractor Loan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Now avail a loan on your existing vehicle for meeting your various personal and business needs. 
                                    Our Top-up Loan is designed to cater to the immediate financial need.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                <div className="cards-container">
                        {/* <Box width='300px'height='300px'> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Saral Vidya
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Saral Vidya Loan is available for school education at any accredited school. The maximum loan amount is Rs. 4 lakhs, 
                                    which is repayable in 12 instalments, continuing to follow disbursement.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                            </div>
                        {/* </Box> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px",backgroundColor:"#f4f5f7" }} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Saral Gyan
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    An education loan granted to the parents of an Indian national or resident student for education at a recognized university or institute. 
                                    Which covers post graduate and other professional courses.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px",backgroundColor:"#f4f5f7" }} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Saral Scholar
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Saral Scholar Loan is available for MBA, MCA, MS, and other approved courses which aid in job creation.
                                     To be eligible, 
                                    the student must be accepted into the notified institute and course.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                     Education Loan 
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    This student education loan is available to Indian nationals who have been accepted into India's top educational institutions. 
                                    The loan amount is determined by list of premier institutions.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/loaninfo");
                                      }}>Know more</Button>
                                </CardActions>
                            </Card>
                            </CardM>
                        </div>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
}