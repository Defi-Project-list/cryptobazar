import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ chartData, type, chartDays, setChartDays }) => {
  const coinLabels = chartData.map((item) => {
    const date = new Date(item[0]);
    return date.toLocaleDateString();
  });
  const coinData = chartData.map((item) => {
    return item[1];
  });

  const data = {
    labels: coinLabels,
    datasets: [
      {
        data: coinData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${chartDays} Days ${type} Chart`,
        font: {
          size: "20",
          weight: "bold",
        },
      },
    },
  };
  return (
    <>
      <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem] align-middle">
        <span className="text-yellow-600 text-3xl">|</span>
        <span className="">{type} Chart</span>
      </h1>
      <div className="bg-white rounded-md shadow-md p-[2rem] mb-[2rem]">
        <div className="flex justify-end items-center p-[1rem] ">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <button
              className={`${
                chartDays === 7
                  ? "bg-gray-700 text-white px-[1rem] py-[.5rem] border-r-2 border-gray-400 "
                  : "bg-gray-200 text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400"
              }`}
              onClick={() => setChartDays(7)}
            >
              7 days
            </button>
            <button
              className={`${
                chartDays === 14
                  ? "bg-gray-700 text-white text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400 "
                  : "bg-gray-200 text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400"
              }`}
              onClick={() => setChartDays(14)}
            >
              14 days
            </button>
            <button
              className={`${
                chartDays === 30
                  ? "bg-gray-700 text-white text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400 "
                  : "bg-gray-200 text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400"
              }`}
              onClick={() => setChartDays(30)}
            >
              30 days
            </button>
            <button
              className={`${
                chartDays === 90
                  ? "bg-gray-700 text-white text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400 hidden sm:inline-block"
                  : "bg-gray-200 text-sm px-[.7rem] py-[.5rem] border-r-2 border-gray-400 hidden sm:inline-block"
              }`}
              onClick={() => setChartDays(90)}
            >
              90 days
            </button>
            <button
              className={`${
                chartDays === 180
                  ? "bg-gray-700 text-white text-sm px-[.7rem] py-[.5rem] hidden sm:inline-block"
                  : "bg-gray-200 text-sm px-[.7rem] py-[.5rem] hidden sm:inline-block"
              }`}
              onClick={() => setChartDays(180)}
            >
              180 days
            </button>
          </div>
        </div>
        <div className="grid place-items-center overflow-x-auto">
          <Line options={options} data={data} height="400" width="1000" />
        </div>
      </div>
    </>
  );
};

export default CoinChart;
