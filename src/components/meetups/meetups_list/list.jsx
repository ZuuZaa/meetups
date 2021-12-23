import MeetupCard from "../meetup_item";

function MeetupsList(props) {
    return (
      <ul className="meetups-list">
        {props.meetups.map(meetup => (
          <MeetupCard
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  }
  
  export default MeetupsList ;

