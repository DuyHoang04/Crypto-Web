import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cyptoApi";
import Crypto from "./Crypto";
import News from "./News";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading..."; // ko có là bị lỗi đó

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total Crypto" value={globalStats.total} />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Tap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/crypto">Show More</Link>
        </Title>
      </div>
      <Crypto limit={true} />
      {/* <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={2} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News limit /> */}
    </>
  );
};

export default HomePage;
