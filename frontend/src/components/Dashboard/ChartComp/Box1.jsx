/* eslint-disable react/prop-types */

import StyleChartcss from './CSS/Chart.module.css' ; 

//* Component 

function Box1({DataBox1}) {


    return (
        <div className={StyleChartcss.MainBox1}>
            <div className="ContentBox1">
                {DataBox1}
            </div>
        </div>
    )
}

export default Box1
