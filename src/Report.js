import React from 'react'
import {  Button, Grid,  } from '@mui/material';
import { jsPDF } from "jspdf";
//

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


 function Report(props) {

    const downloadReport = () => {
        const score = localStorage.getItem('result');
        const name = localStorage.getItem('Name');
        const doc = new jsPDF();
      
        doc.setFontSize(18);
        doc.setTextColor("#1976D2"); // Material-UI primary color
      
        doc.text("Quiz Result", 80, 20);
      
        doc.setFontSize(14);
        doc.setTextColor("#333");
      
        doc.text(`Name: ${name}`, 20, 40);
        doc.text(`Your Score: ${score}`, 20, 50);
      
        doc.setLineWidth(0.5);
        doc.line(20, 55, 190, 55); // Horizontal line
      
        doc.setFontSize(10);
        doc.setTextColor("#777");
      
        doc.text(
          "Thank you for participating in the quiz!",
          20,
          75,
          { maxWidth: 170 }
        );
      
        doc.setFontSize(12);
        doc.setTextColor("#1976D2");
      
        doc.text("Downloaded on: " + new Date().toLocaleString(), 20, 100);
      
        doc.save(`${name}_QuizResult.pdf`);
      };
 
      const score = localStorage.getItem('result');
        const name = localStorage.getItem('Name');

        const performance=()=>{
           
            if (score<=2) {
                return "You  need  improvement"
            }
            else if (score<=4){
                return "Good"
            }
            else if (score<=6){
                return "Excellent"
            }
        }

  return (
    

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  style={{backgroundColor:props.pagebg,color:props.textclr,height:"89.6vh"}}
>
    <div>

         <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
        Your quiz result
        </Typography>
        <Typography variant="h5" component="div">
        Your name <b> {` ${name}`} </b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
          Your score is <b>{`${score}`}</b> out of 6
        </Typography>
        <Typography variant="body2">
          {performance()}
          <br />
          
        </Typography>
      </CardContent>
      
    </Card>
        
      <Button  sx={{ minWidth: 400 }} variant="contained"  size="medium" onClick={downloadReport} style={{marginTop:"15px"}}>
            Download Result
          </Button>
    </div>
    </Grid>  
  )
}
export default Report;