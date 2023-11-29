const Summary = (props) => {
    return (
        <div>
            <h1>
                Anecdote with the most votes
            </h1>
            {props.text}
            <p>
                has {props.points} votes
            </p>
        </div>
    )
}

export default Summary