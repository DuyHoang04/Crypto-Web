import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  console.log("COIN TIME: ", coinTimestamp);

  const data = {
    labels: coinTimestamp, //các mốc thời gian ở dưới - bắt buộc phải có
    datasets: [
      {
        label: "Price In USD", //chú thích biểu đồ
        data: coinPrice, // dữ liệu giá coin - bắt buộc phải có
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography level={2} className="chart-title">
          {coinName} Price Chart
        </Typography>
        <Col className="price-container">
          <Typography level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Typography>
          <Typography level={5} className="current-price">
            {coinName} Price: $ {currentPrice}
          </Typography>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
