export default function Event(props) {
  
  function setContent() {
    return{__html: props.announcement.blurb}
  }

  return (
    <div>
      <h3>{props.announcement.title}</h3>
      {props.announcement.image && <img src={props.announcement.image} />}
      <div dangerouslySetInnerHTML={setContent()}></div>
    </div>
  );
}
