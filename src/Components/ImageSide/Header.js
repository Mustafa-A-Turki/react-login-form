export default function Header ({icon, WebsiteIcon}) {
    return (
        <div>
            <a href="#">Website name <img src={WebsiteIcon} alt="Back to Website" width="94" height="94"/></a>
            <a href="#" >Back to Website <img src={icon} alt="Back to Website" width="24" height="24"/></a>
        </div>
    )
}
