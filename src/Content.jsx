import MapPinFillIcon from 'remixicon-react/MapPinFillIcon'
import "./Content.css"

export default function Content() {
    return(
        <main className="main">
            <div className="main--content">

                <Location 
                    img="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTsuFKRtPG6PpoE9DcO8Ka2sPLgalwAwNYWx2XrIBaJfGX7mrpHZMtuby6-2-mKm0W0achPGuGtyYEPUFZcy_n3g2E6e2xlGQQ2ltLxZ2E"
                    country="Greece"
                    url="https://maps.app.goo.gl/tYBU2sdvMfZHKkXA6"
                    location="Katerini"
                    date="July 2018"
                    details="Paralia Katerini, a popular resort town in Greece, sits along the shores of the Aegean Sea. Known for its sandy beaches, vibrant nightlife, and proximity to Mount Olympus, it's a favored tourist destination."
                />

                <Location 
                    img="https://images.unsplash.com/photo-1597302269737-ec3fb62fbc76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    country="Italy"
                    url="https://maps.app.goo.gl/6qBcENny9jU6MZfa7"
                    location="Dolomites"
                    date="Jun 2021"
                    details="The Dolomites, in northern Italy, boast stunning alpine landscapes with distinctive, jagged peaks. A UNESCO World Heritage site, it's a haven for outdoor enthusiasts, offering hiking, skiing, and picturesque villages."
                />

                <Location 
                    img="https://lh5.googleusercontent.com/p/AF1QipOJmW0mXLsBBuPF9KD_725C5WNoT-dcpVdMWpY=w540-h312-n-k-no"
                    country="Greece"
                    url="https://maps.app.goo.gl/AvyXtUC5TSRGEsYT8"
                    location="Mount Olympus"
                    date="Aug 2023"
                    details="Mount Olympus, Greece's highest peak at 2,917 meters, is legendary in Greek mythology as the dwelling place of the gods. Majestic and rugged, it attracts hikers, myth enthusiasts, and nature lovers."
                />

                <Location 
                    img="https://lh3.googleusercontent.com/p/AF1QipNoSZ-xTGD_1I5y6RxUns2xzCGBiEmzmxve25OI=s680-w680-h510"
                    country="Romania"
                    url="https://maps.app.goo.gl/1qbGv5ANy5nL8e128"
                    location="Bujdoso Ski Resort"
                    date="January 2024"
                    details="Bujdoso Ski Resort in Romania, adjacent to a serene forest, boasts two thrilling sliding roads. With modern amenities and cozy accommodations, it offers a perfect winter retreat amidst picturesque alpine landscapes."
                />

            </div>
        </main>
    )
}

function Location(props){
    return(
        <div className="content--box">
            <img src={props.img} alt="photo" className="content--img" />
            <div className="content--details">
                <div className="content--location">
                    <MapPinFillIcon className="content--icon" size="20px" color="red" />
                    <p className="content--country">{props.country}</p>
                    <a href={props.url} className="content--link">View on Google Maps</a>
                </div>
                <h3 className="content--title">{props.location}</h3>
                <h5 className="content--date">{props.date}</h5>
                <p className="content--text">{props.details}</p>
            </div>
        </div>
    )
}