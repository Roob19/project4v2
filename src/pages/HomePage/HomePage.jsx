export const HomePage = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <br></br>
            { props.user ? <span>Welcome {props.user.name}</span> : '' }
        </div>
    )
}