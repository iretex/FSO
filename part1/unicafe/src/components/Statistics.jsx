const StatisticLine = (props) => {
    return (
        <div>{props.text} {props.value}</div>
    )
}
const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>
                <h2>statistics</h2>
                No feedback given
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>
                
                {/* <StatisticLine text="good" value = {props.good} />
                <StatisticLine text="neutral" value = {props.neutral} />
                <StatisticLine text="bad" value = {props.bad} />
                <StatisticLine text="all" value = {props.good+props.neutral+props.bad} />
                <StatisticLine 
                    text="average" 
                    value = {(props.good-props.bad)/(props.good+props.neutral+props.bad)} 
                />
                <StatisticLine 
                    text="positive" 
                    value = {`${props.good/(props.good+props.neutral+props.bad)*100} %`} 
                /> */}
                <table>
                    <tbody>
                        <tr>
                            <td>good</td>
                            <td>{props.good}</td>
                        </tr>
                        <tr>
                            <td>neutral</td>
                            <td>{props.neutral}</td>
                        </tr>
                        <tr>
                            <td>bad</td>
                            <td>{props.bad}</td>
                        </tr>
                        <tr>
                            <td>all</td>
                            <td>{props.good+props.neutral+props.bad} </td>
                        </tr>
                        <tr>
                            <td>average</td>
                            <td>{(props.good-props.bad)/(props.good+props.neutral+props.bad)}</td>
                        </tr>
                        <tr>
                            <td>positive</td>
                            <td>{`${props.good/(props.good+props.neutral+props.bad)*100} %`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statistics