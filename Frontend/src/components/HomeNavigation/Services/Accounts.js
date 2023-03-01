import Card from "@mui/material/Card";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from "@mui/material/Typography";
import LabTabs from "./TypesOfAcc";


function Account() {
   

    return (
        <>
            <div >
                <Card sx={{ maxWidth: 1550, maxheight: 520 }}>
                    <div>
                        <Card sx={{ maxWidth: 1550, maxheight: 140 }}>               
                            <AccountBalanceIcon style={{ height: "120px", width: "200px", color: "#002d64", float: "left" }} />
                            <Typography gutterBottom variant="h4" component="div" marginLeft={5} color="#002d64"
                            fontFamily=" 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"><b>Accounts</b></Typography>
                            <Typography gutterBottom variant="body3" component="div">
                                Saral Bank offers different type of accounts to meet your financial goals and secure your future. 
                                Choose from our wide range of deposit products that are specifically designed to keep your unique requirements in mind.
                            </Typography>
                        </Card>
                    </div>
                    <LabTabs/>
                </Card>
            </div>
        </>
    );
}
export default Account;