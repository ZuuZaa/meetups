import Card from '../../ui/card';

const MeetupCard = (props) => {
  console.log("props",props)
  return (
    <li className="item" key={props.id} id={props.id}>
      <Card>
        <div className="image-wrapper">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="actions">
          <button>to favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupCard ;
