const coins = ({ coinData }) => {
  console.log(coinData);
  //   props.map((coin) => <span>{coin.id}</span>);
};

export async function getStaticProps() {
  const res = await fetch("https://api.coinstats.app/public/v1/coins");
  const coins = await res.json();
  console.log(coins);
  return {
    props: {
      // coinData acts like a useEffect variable. It can be used anywhere on this component
      coinData: coins,
    },
  };
}

export default coins;
