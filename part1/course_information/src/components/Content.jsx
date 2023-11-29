const Part = (props) => {
    // console.log("Props from Part", console.log(props))
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
{/*           
            <Part part={props.part1} exercise={props.exercise1}/>
            <Part part={props.part2} exercise={props.exercise2}/>
            <Part part={props.part3} exercise={props.exercise3}/> */}
        </div>
    )
}

export default Content