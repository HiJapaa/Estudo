import LinkCard from "../LinkButton";
import ProfileCard from "../ProfileCard";

import './styles.css'

export default function Card() {
    return (
        <div className="card">
            <ProfileCard
                imgURL='\src\assets\img\avatar-jessica.jpeg'
                imgAlt='Imagem de perfil'
                name='Jessica Randall'
                location='London, United Kingkdom'
                bio='"Front-end developer and avid reader"'
            />
            <div className="links">
                <LinkCard link="https://github.com/HiJapaa" socialName="GitHub" />
                <LinkCard link="https://www.frontendmentor.io/profile/HiJapaa" socialName="Frontend Mentor" />
                <LinkCard link="https://www.linkedin.com/in/jeef-wellin-bb116b262/" socialName="LinkedIn" />
                <LinkCard socialName="Twitter" />
                <LinkCard link="https://www.instagram.com/jeef.is.enough/" socialName="Instagram" />
            </div>
        </div>
    )
}