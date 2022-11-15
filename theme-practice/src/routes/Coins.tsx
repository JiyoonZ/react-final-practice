import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {fetchCoins} from "../api";
import {Helmet} from "react-helmet";
import Toggler from "../Toggles";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isDarkAtom} from "../atoms";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  // 토글 함수
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  const {isLoading, data} = useQuery<ICoin[]>(["allCoins"], fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <Toggler onClick={toggleDarkAtom}>
          {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Toggler>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{name: coin.name, rank: coin.rank}}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.symbol}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      font-weight: 600;
    }
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;
export default Coins;
