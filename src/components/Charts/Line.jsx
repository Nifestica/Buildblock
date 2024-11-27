import {Line} from 'react-chartjs-2'
import { lineChartData } from './FakeData'
import { Chart as ChartJS, CategoryScale,
     LinearScale, PointElement,LineElement, 
      Title, Tooltip,
      Legend  } from 'chart.js'
    

      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      )

export const LineGraph =()=>{

const options = {};




    return ( <Line options={options} data={lineChartData} /> )
}