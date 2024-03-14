export default function Hero() {
  return (
    <section className="container py-[20%]  md:py-[10%]">
      <div className=" ">
        <div className="flex justify-between mb-7">
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EuBHfYDXGG1FaGREsJbbP8qMMU7PFAuK1nefYMFbp52f&fixed=in"
            target="_blank"
          >
            <button className="transition-all hover:scale-110 border-4 border-black bg-[#FDF8E0] rounded-sm skew-x-6  text-black  text-[14px] md:text-xl px-3 md:px-5 py-1">
              Buy
            </button>
          </a>

          <a href="https://twitter.com/Sol_Whitehouse_ " target="_blank">
            <button className=" bg-[#FDF8E0] border-4 border-black transition-all hover:scale-110 -skew-x-6 rounded-sm text-black  text-[14px] md:text-xl px-3 md:px-5 py-1">
              TwittER
            </button>
          </a>
        </div>

        <div className="text-white flex justify-between">
          <a
            href="https://dexscreener.com/solana/EuBHfYDXGG1FaGREsJbbP8qMMU7PFAuK1nefYMFbp52f"
            target="_blank"
          >
            <button className="bg-[#FDF8E0] border-4 border-black transition-all hover:scale-110 skew-x-6 rounded-sm text-black  text-[14px] md:text-xl px-3 md:px-5 py-1">
              CHART
            </button>
          </a>

          <a href="https://t.me/WhiteHouse_SOL" target="_blank">
            <button className=" transition-all border-4 border-black hover:scale-110 -skew-x-6 rounded-sm bg-[#FDF8E0] text-black  text-[14px] md:text-xl px-3 md:px-5 py-1">
              TeleGRAM
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
