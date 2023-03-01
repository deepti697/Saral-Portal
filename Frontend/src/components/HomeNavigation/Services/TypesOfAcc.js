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

export default function LabTabs() {
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
                        <Tab label={(<Typography variant="body4" fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">Savings Account</Typography>)} value="1" />
                        <Tab label={(<Typography variant="body4" fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">Current Account</Typography>)} value="2" />
                        <Tab label={(<Typography variant="body4" fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">Fixed Deposit</Typography>)} value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="cards-container">
                        {/* <Box width='300px'height='300px'> */}
                        <div className="prod1">
                        <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" ,backgroundColor:"#f4f5f7"}} className="img-card">
                            <Card backgroundColor="#f4f5f7">
                                <CardContent >
                                    <Typography gutterBottom variant='h5' component='div' color={"#002d64"} className="accfont">
                                    Super Savings Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    With a super savings account comes even better savings. 
                                    Find a plethora of add-on benefits with Saral Bank Super Savings Account.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Platinum Savings Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Saral Platinum Savings Bank Account offers several easy options to access your money, 
                                    including unlimited ATM withdrawals.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Jeevan Suraksha Savings Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    We offer savings account under jeevan suraksha yojna with a minimal balance of Rs. 1000 per day and 
                                    more customer-friendly features & suraksha.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Advantage Savings Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Reap the benefits of savings account with Saral Bank.
                                     A simple, convenient and hassle-free option to save and manage your money, open a savings account now. 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Advantage Current Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Offers a wide range of benefits to both - rural and urban customers, 
                                    such as free mobile and internet banking and low minimum quarterly average balance.
                                  
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Premium Current Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Ideal for customers with medium to large businesses, this current account offers a number of 
                                    free services and benefits, such as an immediate credit & auto payroll.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Premium Current Account Privilege
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Ideal for customers with medium to large businesses, this current account offers a 
                                    number of free services and benefits, such as an immediate credit.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Start-up Current Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    A private limited company or a registered partnership firm or a limited liability partnership 
                                    working towards innovation, development can open account.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Recurring Deposit Scheme
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Watch how your savings grow, just by investing a little each month in a recurring deposit account. 
                                    Invest a little each month in a recurring deposit account.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Monthly Income Plan(MIP)
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Getting a guaranteed monthly income is an important goal for people, especially retired senior citizens. 
                                    Saral Bank has come up with a MIP for you.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Quarterly Income Plan(QIP)
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    It is now easy for your deposits to bring regular income, i.e., 
                                    monthly or quarterly and supplement your earnings with our Regular Income Plan.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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
                                    Tax Saving Fixed Deposit Account
                                    </Typography>
                                    <Typography gutterBottom variant='body3' color='text.secondary'>
                                    Invest for a long period of time to get more on our term deposit. 
                                    Make your return immune to interest rate fluctuation with Saral Tax Savings Term Deposit Account.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='large'
                                     onClick={() => {
                                        navigate("/accinfo");
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