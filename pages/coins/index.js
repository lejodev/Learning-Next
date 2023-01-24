const coinsList = ({ coinsData }) => {
  const coins = coinsData.coins;
  return (
    <div>
      {coins.map((coin) => {
        console.log(coin.id);
        return (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.coinstats.app/public/v1/coins");
  const coins = await res.json();
  // console.log(coins);
  return {
    props: {
      // coinsData acts like a useEffect variable. It can be used anywhere on this component
      coinsData: coins,
    },
  };
}

export default coinsList;
