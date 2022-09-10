const BASE_URL = `https://api.coinpaprika.com/v1`;
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((resp) => resp.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((resp) => resp.json());
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((resp) => resp.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000); // 현재 시간을 초로 나타냄
  const startDate = endDate - 60 * 60 * 23 * 7 * 1; // 현재 시간에서 1주 -1 시간에
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((resp) => resp.json());
}
