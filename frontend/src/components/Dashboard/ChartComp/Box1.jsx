/* eslint-disable react/prop-types */

import StyleChartcss from './CSS/Chart.module.css' ; 

//* Component 

function Box1({DataBox1}) {


    return (
        <div className="MainBox1" style={{border: "1px solid", width: "300px", height: "300px"}}>
            <div className="ContentBox1">
                {DataBox1}
            </div>
        </div>
    )
}

export default Box1
