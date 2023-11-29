const Button = (props) => {
    return (
        <div>
            <button onClick={props.goodFeedback}>good</button>
            <button onClick={props.neutralFeedback}>neutral</button>
            <button onClick={props.badFeedback}>bad</button>
        </div>
    )
}

export default Button