import { useState } from "react";

export default function Event(props) {
  const [open, setOpen] = useState("closed")
  
  function setContent() {
    return{__html: props.announcement.blurb}
  }

  let openDetails = (evt) => {
    evt.preventDefault()
    if(open === "closed") {
      setOpen("open")
    } else {
      setOpen("closed")
    }

  }

  return (
    <div id="event-container" className={open}>
      <h2>{props.announcement.title}</h2>
      {props.announcement.image && <img src={props.announcement.image} alt="" />}
      <div id="text-container" className={open} dangerouslySetInnerHTML={setContent()}></div>

      <button onClick={openDetails}>{open === "closed"? "Read More" : "Minimize"}</button>
    </div>
  );
}
