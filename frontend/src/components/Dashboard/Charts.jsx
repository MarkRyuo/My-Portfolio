
//* Container of Chart Code 
//* Create Data of Chart 
//* 

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
                {DataChart.chartData.map((data) => (
                    <Box1 key={data.key} DataBox1={data.Label}/>
                ))}
            </div>
        )
    }

    export default Charts
