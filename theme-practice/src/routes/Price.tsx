import {useOutletContext} from "react-router";
import styled, {keyframes} from "styled-components";
interface PriceProps {
  tickersData: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}
function Price() {
  const {tickersData} = useOutletContext<PriceProps>();
  return (
    <Container>
      <Title>
        💸 Current Price : {tickersData.quotes.USD.price.toFixed(0)}
      </Title>
      <Ratio>(% : change ratio)</Ratio>
      <Wrapper>
        <TitleBox>Peak 1H</TitleBox>
        <InfoBox>{tickersData.quotes.USD.percent_change_1h} %</InfoBox>
      </Wrapper>
      <Wrapper>
        <TitleBox>Peak 24H</TitleBox>
        <InfoBox>{tickersData.quotes.USD.percent_change_24h} %</InfoBox>
      </Wrapper>
      <Wrapper>
        <TitleBox>Peak 1week</TitleBox>
        <InfoBox>{tickersData.quotes.USD.percent_change_7d} %</InfoBox>
      </Wrapper>
      <Wrapper>
        <TitleBox>Peak 1month</TitleBox>
        <InfoBox>{tickersData.quotes.USD.percent_change_30m} %</InfoBox>
      </Wrapper>
      <Wrapper>
        <TitleBox>Peak 1year</TitleBox>
        <InfoBox>{tickersData.quotes.USD.percent_change_1y} %</InfoBox>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  height: 400px;
`;
const Title = styled.h1`
  font-size: 30px;
`;
const FadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin: 8px 0 20px 0;
  width: 440px;
  animation: ${FadeAnimation} 0.5s ease-in;
`;
const TitleBox = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  width: 130px;
  height: 40px;
  border-radius: 12px;
  opacity: 0.7;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
const InfoBox = styled(TitleBox)`
  width: 310px;
  font-size: 20px;
`;
const Ratio = styled.div`
  text-align: end;
  font-weight: 200;
`;
export default Price;
