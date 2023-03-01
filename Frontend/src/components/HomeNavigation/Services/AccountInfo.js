import * as React from 'react';
import Card from "react-bootstrap/Card";
import CardM from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, CardContent } from "@mui/material";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";

export default function AccountInfo() {
    const navigate = useNavigate();
    return (
        <>
            <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                id="btnlogin"
                style={{ backgroundColor: "#002d64" }}
                onClick={() => {
                    navigate("/services");
                }}
            >
                <ArrowBackIosNewTwoToneIcon /> Back
            </Button>
            <Typography gutterBottom variant="h4" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                align="center">
                Saral Account : Benefits
            </Typography>
            <br />
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <br />
                <div className="flex-container">
                    <div className="credit">
                        <Card>

                            <img src="https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/-/media/Project/BOB/CountryWebsites/India/personal-banking/accounts/Saving-accounts/baroda-advantage-saving-account/Benefits/Baroda-Advantage-Savings-Account-EarnInterest.svg"
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    color: "#002d64",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Card.Title className="title">
                                <Typography gutterBottom variant="h6" component="div"
                                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                                    Earn Interset
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="car-loan">
                        <Card>
                            <img src='https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/-/media/Project/BOB/CountryWebsites/India/personal-banking/accounts/Saving-accounts/baroda-advantage-saving-account/Benefits/Baroda-Advantage-Savings-Account-MobileBankingFingertips.svg'
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    color: "#002d64",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Card.Title className="title">
                                <Typography gutterBottom variant="h6" component="div"
                                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                                    Mobile Banking
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="car-loan">
                        <Card>
                            <img src="https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/-/media/Project/BOB/CountryWebsites/India/personal-banking/accounts/Saving-accounts/baroda-advantage-saving-account/Benefits/Baroda-Advantage-Savings-Account-AccessInternetBanking.svg"
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    color: "#002d64",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Card.Title className="title">
                                <Typography gutterBottom variant="h6" component="div"
                                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                                    Internet Banking
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="health">
                        <Card>
                            <img src="https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/-/media/Project/BOB/CountryWebsites/India/personal-banking/accounts/Saving-accounts/baroda-advantage-saving-account/Benefits/Baroda-Advantage-Savings-Account-NoHiddenCosts.svg"
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    color: "#002d64",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Card.Title className="title">

                                <Typography gutterBottom variant="h6" component="div"
                                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                                    No hidden Costs
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="health">
                        <Card>
                            <img src='https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/-/media/Project/BOB/CountryWebsites/India/personal-banking/accounts/Saving-accounts/baroda-advantage-saving-account/Benefits/Baroda-Advantage-Savings-Account-EligibleForDebitCards.svg'
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    color: "#002d64",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Card.Title className="title">

                                <Typography gutterBottom variant="h6" component="div"
                                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                                    Debit Cards
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                </div>
                <br />
            </CardM>
            <br />
            <br />
            <Typography gutterBottom variant="h4" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                align="center">
                Saral Account : Features
            </Typography>
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <CardContent>
                    <li>As a customer, you can enjoy the many features of a savings account free of cost or for minimum charges. 
                        With a savings account, you will receive a passbook and chequebook.</li>
                    <li>You may also apply for a debit card, mobile banking and net banking on your savings account, though charges may apply. With net banking, you can access your bank statements and make payments directly from your savings account.
                         You can use the debit card linked to your savings account to withdraw cash from ATMs and to pay merchants.</li>
                    <li>Saral Bank pays interest on all savings accounts, the interest of which, 
                        is transferred to your savings account every quarter, though it is calculated daily.</li>
                </CardContent>
            </CardM>
            <br/>
            
            <br/>
            <Typography gutterBottom variant="h4" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                align="center">
                Documents Required
            </Typography>
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <CardContent>
                    <table >
                        <tbody>
                            <tr>
                                <td colspan="2" style={{textAlign:"center"}}>
                                    List Of Valid KYC Documents For Account Opening
                                </td>
                            </tr>
                            <tr>
                            <td colspan="2" className="light-text">Permanent Account Number (PAN)/ FORM60 is mandatorily to be obtained while opening of the accounts as per extant Reserve Bank of India Guidelines.</td> 
                            </tr>
                            <tr>
                                <td>Officially Valid Documents (OVDs) </td>
                                <td className="light-text">
                                    <ul>
                                        <li>Passport</li>
                                        <li>Driving license with photo</li>
                                        <li>Proof of possession of Aadhaar Number</li>
                                        <li>Voter’s Identity Card issued by Election Commission of India</li>
                                        <li>Job card issued by NREGA duly signed by an officer of the State Government.</li>
                                        <li>Letter issued by the National Population Register containing details of Name and Address.</li>
                                    </ul>
                                    
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>In case of Foreign Students</td>
                                <td className="light-text">
                                    <ul>
                                        <li>Copy of Passport and copy of Visa.</li>
                                        <li>An Identity Card issued by college / institution.</li>
                                        <li>An admission letter for the course mentioning duration of course for which he/ she is admitted by the Institute / College.</li>
                                        <li>An allotment letter on letter head of the institution/ college for allotment of hostel accommodation duly singed by the authorized signatory, mentioning detailed address and location of hostel, room no. etc. and date of allotment of hostel accommodation etc. or a valid address proof giving local address in form of rent agreement within 30 days of opening of the account.</li>
                                    </ul>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>For NRI / Foreign Tourist For PIO/OCI</td>
                                <td className="light-text">
                                    <ul>
                                        <li>Passport</li>
                                        <li>Valid Visa</li>
                                        <li>PAN/FORM60</li>
                                        <li>Address proof mentioning the current overseas address</li>
                                    </ul>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>Accounts of Companies</td>
                                <td className="light-text">
                                    <ul>
                                        <li>Certificate of Incorporation</li>
                                        <li>Memorandum & Articles of Association.</li>
                                        <li>PAN No. of the Company</li>
                                        <li>Resolution of the Board of Directors and Power of Attorney granted to its managers, officers or employees to transact on its behalf; and</li>
                                        <li>Any one of the OVDs and PAN/FORM60 of the managers, officers or employees, as the case may be, holding an attorney to transact on its behalf with his / her photograph</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>

            </CardM>
            <br/>
            <br/>
            <Typography gutterBottom variant="h4" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                align="center">
                Most Important Terms and Conditions (MITC)
            </Typography>
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Transactions
                </Typography> 
                <li>Transactions of saving oriented nature are permitted. 
                    Commercial transactions are non-allowable transactions. 
                    If non allowable transactions are noticed then Bank may close the account with prior notice/intimation 
                    citing reasons thereof. In case of single account of minor to be operated by him/her the maximum 
                    balance outstanding on any day should not be more than Rs. 100000/- when the minor is aged between 10-14 years.</li>  
                </CardContent>
                <br/>
                <hr/>
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Cash Deposit
                </Typography>
                <li>For Rs.50000/- and above PAN is required to be submitted as per requirement of Income Tax.</li>
                <Typography><b>At Cash machines</b></Typography>
                <li>Cash deposit with debit card up to Rs.2,00,000/- (2 Lacs) per day where PAN is registered and Rs.49,999/- 
                    where PAN is not registered in account.</li>
                <li>Card less transaction (by feeding account number) up to Rs. 20,000/- per day.</li>
                <li>Fake note, Suspicious Note is impounded and receipt is given to the customer. Torne/Mutilated/Taped notes are not accepted by these machines.</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Cash Withdrawal
                </Typography>
                <li>Inter SOL cash payments to third parties is not permissible.</li>
                <li>Per day per transaction limit of Rs.50000/- is fixed for cash withdrawal by account holder only (through withdrawal up to Rs.25000/- SB Account without cheque book facility) at Non Base CBS branches irrespective of nature of accounts.
                     Passbook should accompany with Withdrawals.</li>
                <li>Self-Withdrawal at Base branch is free.</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
               Withdrawal(s) & use of Withdrawal Form (Slip)
                </Typography>
                <li>Withdrawals will be allowed either by withdrawal forms or by cheques. Payment against withdrawal form along with passbook is allowed for self only with per day limit of Rs.25000/- (Minimum Rs.25/- in Rural/SU and Rs. 50/- in Metro/Urban).</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
               Passbook and statement of account
                </Typography>
                <li>Free Pass Book.</li>
                <li>Rs. 100/-per duplicate Pass Book / Statement with latest balance only. For previous statement/ entries, applicable charges apply.</li>
                </CardContent>
                <br/>
            </CardM>
            <br/>
            <br/>
        </>
    )

}