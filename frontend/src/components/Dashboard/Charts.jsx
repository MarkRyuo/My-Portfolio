
//* Container of Chart Code 
//* Create Data of Chart with unique identifier
//* Use map method/function
//* Use jsx ()
    import Box1 from "./ChartComp/Box1"

    import { useState } from "react"

    function Charts() {

        const DataChart = {
            chartData: [{
                key : "D01",
                Label: "Box1"
            }]
        }
        
        const [Clicked, setClicked] = useState()


        return (
            <div>
                {DataChart.chartData.map((data) => (
                    <Box1 key={data.key} DataBox1={data.Label}/>
                ))}

                <button type="button">Click This</button>
            </div>
        )
    }

    export default Charts
