import * as React from 'react';
import Card from "react-bootstrap/Card";
import CardM from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, CardContent } from "@mui/material";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";

export default function LoanInfo() {
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
                Saral Loan : Benefits
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
                                    Low interset rates
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="car-loan">
                        <Card>
                            <img src='https://www.bankofbaroda.in/personal-banking/loans/vehicle-loan/-/media/Project/BOB/CountryWebsites/India/personal-banking/loans/vehicle-loan/baroda-car-loan/Benefits/Baroda-Car-Loan-QuickProcessing.svg'
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
                                    Paperless Process
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="car-loan">
                        <Card>
                            <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/loans/vehicle-loan/baroda-car-loan/benefits/baroda-car-loan-higherloanamount.svg"
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
                                    Higher Loan Amount
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="health">
                        <Card>
                            <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/business-banking/corporate-banking/icon/loans-advances.svg?iar=0&hash=10158DBE55A3C90BA63F996CD0A91375"
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
                                    Low processing charges
                                </Typography>
                            </Card.Title>
                        </Card>
                    </div>
                    <div className="health">
                        <Card>
                            <img src='https://cdn.carrot.com/uploads/sites/66089/2022/04/vender-su-casa-150x150.png'
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
                                   Longer tenures
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
                Saral Loan : Features
            </Typography>
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <CardContent>
                   <li>Loan products to suit every customers need</li>
                   <li>The approved loan amount varies according to location and income of the applicants.</li>
                   <li>Low Interest Rates</li>
                   <li>Low Processing Fee</li>
                   <li>No Hidden Charges</li>
                   <li>No Pre Payment Penalty</li>
                   <li>The interest rate is linked to Saral Repo Linked Lending Rate (SRLLR) of the bank and is reset monthly.</li>
                   <li>Interest charges on Daily Reducing Balance</li>
                   <li>Repayment up to 30 years</li>
                   <li>Moratorium period up to 36 months after the loan amount is disbursed.</li>
                   <li>Generally, we accept mortgages of the constructed or purchased property as collateral. In some cases, collateral for home loans can be accepted in the form of insurance policies, government promissory notes, shares and debentures, gold ornaments and other property etc.</li>
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
                <li>Identity proof / address proof (copy of passport/voter ID card/driving license/Aadhaar Card)</li>
                <li>Bank statement of previous 3 months (Passbook of previous 6 months)</li>
                <li>Two latest salary slip/current dated salary certificate with the latest Form 16</li>
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
                Target Group
                </Typography> 
                <li>Resident Indians</li>
                <li>Non-resident Indians (NRIs) holding an Indian passport or Persons of Indian origin (PIOs) holding a foreign passport or overseas citizens of India (OCI). </li>
                <li>Staff members (availing under public scheme)</li>
                </CardContent>
                <br/>
                <hr/>
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Eligibility of Borrower(s)
                </Typography>
                <li>Individuals - singly or jointly.</li>
                <li>HUFs are not eligible.</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Resident Indian
                </Typography>
                <li>Applicant/co-applicant(s), whose income are considered for eligibility, should be employed/engaged in business/profession for a minimum period of 1 year (for salaried) and/or 2 years (for non-salaried).</li>
                <li>Break in service, if any, can be allowed up to a maximum period of 3 months.</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
               Co-Applicants
                </Typography>
                <li>The close relatives of the applicant can be added as a co-applicant for higher eligibility.</li>
                <li>If the applicant wants to add any person who is not a close relative as a co-applicant, the same can be considered only if he/she is the joint owner of property.</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
               Repayment Period
                </Typography>
                <li>Maximum period of loans shall be 30 years initially, including the maximum moratorium period of 36 months.</li>
                <li>Maximum moratorium period shall be 36 months as under.</li>
                <li>18 month moratorium period for under construction houses and building up to 7th floor and thereafter 6 months additional moratorium per floor subject to a maximum moratorium of 36 months.</li>
                </CardContent>
                <br/>
            </CardM>
            <br/>
            <br/>
            <Typography gutterBottom variant="h4" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                align="center">
                Saral Loan : Eligibility
            </Typography>
            <CardM sx={{ maxWidth: 1200, maxheight: 400, marginLeft: "120px" }} >
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Resident Type
                </Typography> 
                <li>Resident Indians</li>
                <li>Non-resident Indians (NRIs) holding an Indian passport or Persons of Indian origin (PIOs) holding a foreign passport or overseas citizens of India (OCI). </li>
                <li>Staff members (availing under public scheme)</li>
                </CardContent>
                <br/>
                <hr/>
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Minimum Age
                </Typography>
                <li>Applicant:- 21 Years</li>
                <li>Co-applicant:- 18 Years</li>
                </CardContent>
                <br/>
                <hr/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#002d64"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                Maximum Age
                </Typography>
                <li>Maximum Age: 70 years</li>
                <li>Loan Tenure: up to 30 years.</li>
                </CardContent>
                <br/>
            </CardM>
            <br/>
            <br/>
        </>
    )

}