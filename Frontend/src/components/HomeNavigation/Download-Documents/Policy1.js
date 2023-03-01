import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";

const Policy1 = ({ fileId }) => {
  const navigate = useNavigate();
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9191/api/policies/1`, { responseType: "arraybuffer" })
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        setPdf(URL.createObjectURL(file));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fileId]);

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
                        navigate("/employee-module");
                    }}
                >
                    <ArrowBackIosNewTwoToneIcon /> Back
                </Button>
      {pdf && (
        <>
          <iframe src={pdf} style={{ width: "100%", height: "550px" }} />
          
          <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#002d64" }}
                  href={pdf} download
                >
                  DOWNLOAD
                </Button>
              </div>
        </>
      )}
    </>
  );
};

export default Policy1;
