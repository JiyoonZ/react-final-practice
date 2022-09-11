import {useOutletContext} from "react-router";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart() {
  const {coinId} = useOutletContext<ChartProps>();
  const {isLoading, data} = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(`${coinId}`),
    {refetchInterval: 10000}
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                data?.map((price) => ({
                  x: price.time_open,
                  y: [price.open, price.high, price.low, price.close],
                })) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "rbga(0,0,0,0.5)",
            },
            grid: {show: false},
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
            },
            fill: {
              type: "gradient",
              gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `${Math.floor(value)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
