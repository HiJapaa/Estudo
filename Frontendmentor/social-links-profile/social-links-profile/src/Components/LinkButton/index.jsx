import './styles.css'

export default function LinkCard(props) {
    return (
        <a target='_blank' href={props.link}>{props.socialName}</a>
    )
}