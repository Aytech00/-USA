import buy from "../../assets/buy.png";
import buy2 from "../../assets/x.png";
import buy3 from "../../assets/chat.png";
import buy4 from "../../assets/tel.png";

export default function Hero() {
  return (
    <section className="px-5 py-[20%]  md:py-[2%]">
      <div className=" ">
        <div className="flex justify-between mb-2">
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EuBHfYDXGG1FaGREsJbbP8qMMU7PFAuK1nefYMFbp52f&fixed=in"
            target="_blank"
          >
            <img src={buy} alt="" />
          </a>

          <a href="https://twitter.com/Sol_Whitehouse_ " target="_blank">
            <img src={buy2} alt="" />
          </a>
        </div>

        <div className="text-white flex justify-between">
          <a
            href="https://dexscreener.com/solana/EuBHfYDXGG1FaGREsJbbP8qMMU7PFAuK1nefYMFbp52f"
            target="_blank"
          >
            <img src={buy3} alt="" />
          </a>

          <a href="https://t.me/WhiteHouse_SOL" target="_blank">
            <img src={buy4} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
