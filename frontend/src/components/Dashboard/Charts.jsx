

    // * Pag-lalagyan ng Chart Code 

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
                <Box1 key={DataChart} DataBox1={DataChart.chartData}/>
            </div>
        )
    }

    export default Charts
