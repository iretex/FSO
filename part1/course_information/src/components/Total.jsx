const Total = (props) => {
    return (
        <div>
            {/* Number of exercises {props.exercise1 + props.exercise2 + props.exercise3} */}
            {/* Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises} */}
            Number of exercises {
            props.course.parts[0].exercises 
            + props.course.parts[1].exercises 
            + props.course.parts[2].exercises
            }
        </div>
    )
}

export default Total