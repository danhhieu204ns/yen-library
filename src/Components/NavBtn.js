import "./NavBtn.css"

const NavBtn = (props) => {
    return (
        <div className = "nav-btn">
            <a href="">
                {props.title}
            </a>
        </div>
    )
}

export default NavBtn;