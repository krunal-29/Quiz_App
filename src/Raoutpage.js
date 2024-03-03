import React from 'react'
import Form from './Form'
import Quiz from './Quiz';
import Report from './Report';

 function Raoutpage(props) {
  if (props.page == 1) {
    return   <Form handleButton={props.handleButton} pagebg={props.pagebg} textclr={props.textclr} mode={props.mode}/>
  }
  else if (props.page == 2){
    return <Quiz  handleButton={props.handleButton} pagebg={props.pagebg} textclr={props.textclr} />
  }
  else if (props.page == 3){
    return <Report  handleButton={props.handleButton} pagebg={props.pagebg} textclr={props.textclr} />
  }
}
export default Raoutpage;