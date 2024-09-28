
//* Container of Chart Code 
//* Create Data of Chart with unique identifier
//* Use map method/function
//* Use jsx ()
    import Box1 from "./ChartComp/Box1"

    function Charts() {

        const DataChart = {
            chartData: [{
                key : "D01",
                Label: "Box1"
            }]
        }

        return (
            <div>
                {/* {DataChart.chartData.map((data) => (
                    <Box1 key={data.key} DataBox1={data.Label}/>
                ))} */}

                <button type="button" onClick={(data) => (
                    <Box1 key={data.key} DataBox1={data.Label} />
                )}></button>
            </div>
        )
    }

    export default Charts
