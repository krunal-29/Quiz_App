import React, { useState } from 'react';
import { Grid, Button, Container, Typography, Paper, FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';


function Quiz(props) {
  
let questions = [
  {
    id: 1,
    question: "HTML stands for -",
    option: [
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "None of these",
    ],
    correctans: "HyperText Markup Language",
  },
  {
    id: 2,
    question: "The correct sequence of HTML tags for starting a webpage is -",
    option: [
      "Head, Title, HTML, body",
      " HTML, Body, Title, Head",
      "HTML, Head, Title, Body",
      " HTML, Head, Title, HTML",
    ],
    correctans: "HTML, Head, Title, Body",
  },
  {
    id: 3,
    question:
      " Which of the following element is responsible for making the text bold in HTML?",
    option: ["<pre>", "<a>", "<b>", "<br>"],
    correctans: "<b>",
  },
  {
    id: 4,
    question:
      " CSS stands for -",
    option: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None of the above"],
    correctans: "Cascading style sheets",
  },
  {
    id: 5,
    question:
      " The property in CSS used to change the background color of an element is -",
    option: ["bgcolor", "color", "background-color", "All of the above"],
    correctans: "background-color",
  },
  {
    id: 6,
    question:
      " The CSS property used to control the element's font-size is -",
    option: ["text-style", "text-size", "font-size", "None of the above"],
    correctans: "font-size",
  },
];

  const [ans, setAns] = useState({});
  const [countans, setCountans] = useState(0);

  const onChangeClick = (e) => {
    const { name, value } = e.target;
    setAns({ ...ans, [name]: value });
  };

  const handleClick = (e) => {


    e.preventDefault();
    let score = 0;

    questions.forEach((que) => {
      if (que.correctans === ans[que.id]) {
        score++;
      }
    });

    setCountans(score);
    localStorage.setItem("result", score);
    props.handleButton();
  };

  

  return (
    <Box style={{backgroundColor:props.pagebg,color:props.textclr}}>
    <Container  >
      <Paper elevation={3} style={{ padding: '2rem' ,backgroundColor:props.pagebg,color:props.textclr }}>
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Questions
        </Typography>
        {questions.map((que) => (
          <div key={que.id}>
            <Typography variant="subtitle1" gutterBottom>
             <h2> ({que.id}) {que.question} </h2>
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name={que.id}
                value={ans[que.id] || ''}
                onChange={onChangeClick}
              >
                {que.option.map((op) => (
                  <FormControlLabel
                    key={op}
                    value={op}
                    control={<Radio />}
                    label={op}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <hr />
          </div>
        ))}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-end"
          style={{ marginBottom: "10px" }}
        >
          <Button variant="contained" color="error" onClick={() => setAns({})} xs={12}>
            Reset
          </Button>
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
          
        </Grid>
      </Paper>
    </Container>
    </Box>
  );
}

export default Quiz;
























