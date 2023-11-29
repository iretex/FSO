const Content = (props) => {
    return (
        <div>
            {props.text}
            
            <p>
                has {props.points} votes
            </p>
        </div>
    )
}

export default Content