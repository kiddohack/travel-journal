import "./Header.css"
import EarthLineIcon from 'remixicon-react/EarthLineIcon'

export default function Header() {
    return(
        <div className="header">
            <div className="header--content">
                <EarthLineIcon className="header--icon" size={35} />
                <p className="header--text">my travel journal.</p>
            </div>
        </div>
    )
}

