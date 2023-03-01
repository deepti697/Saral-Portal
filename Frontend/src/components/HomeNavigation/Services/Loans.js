import Card from "@mui/material/Card";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Typography from "@mui/material/Typography";
import LoanTabs from "./TypesOfLoan";


function Loans() {
   
    return (
        <>
            <div >
                <Card sx={{ maxWidth: 1550, maxheight: 520 }}>
                    <div>
                        <Card sx={{ maxWidth: 1550, maxheight: 140 }}>
                           
                            <CreditScoreIcon style={{ height: "120px", width: "200px", color: "#002d64", float: "left" }}
                             />
                            <Typography gutterBottom variant="h4" component="div" marginLeft={5} color="#002d64" 
                            fontFamily=" 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"><b>Loans</b></Typography>
                            <Typography gutterBottom variant="body3" component="div">
                            At Saral Bank, we believe your journey should continue without any speed bumps. 
                            This is why we bring you customized Bank Loans at competitive interest rates. 
                             You can submit your Bank Loan application online in three easy steps.
                            </Typography>
                        </Card>
                    </div>
                    <LoanTabs/>
                </Card>
            </div>
        </>
    );
}
export default Loans;