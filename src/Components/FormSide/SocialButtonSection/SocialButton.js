export default function SocialButton ({link, icon, title}) {
    return (
        <a href={link} ><img src={icon} alt={title} width="24" height="24"/>{title}</a>
    )
}