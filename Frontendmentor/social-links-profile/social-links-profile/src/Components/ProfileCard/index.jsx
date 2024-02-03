import './styles.css'

export default function ProfileCard(props) {
    return (
        <div>
            <img src={props.imgURL} alt={props.imgAlt} />
            <h2>{props.name}</h2>
            <h4>{props.location}</h4>
            <p>{props.bio}</p>
        </div>
    )
}