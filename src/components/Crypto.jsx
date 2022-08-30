import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cyptoApi";

const Crypto = ({ limit }) => {
  const count = limit ? 10 : 100;
  const [search, setSearch] = useState("");
  const [cryptos, setCryptos] = useState([]);
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search)
    );

    console.log(filterData);

    setCryptos(filterData);
  }, [cryptoList, search]);

  if (isFetching) {
    return "...Loading";
  }

  const { Title } = Typography;

  return (
    <>
      {!limit && (
        <>
          <Title className="crypto-title">All Coins</Title>
          <div className="search-crypto">
            <Input
              value={search}
              placeholder="Search Coin"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos &&
          cryptos.map((item) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.uuid}>
              <Link to={`/crypto/${item.uuid}`}>
                <Card
                  hoverable
                  extra={
                    <img
                      className="crypto-image"
                      src={item.iconUrl}
                      alt={item.name}
                    />
                  }
                  title={`${item.rank}. ${item.name}`}
                >
                  <p>Price: {millify(item.price)} $</p>
                  <p>Market Cap: {millify(item.marketCap)} $</p>
                  <p>Daily Change: {millify(item.change)} $</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Crypto;
