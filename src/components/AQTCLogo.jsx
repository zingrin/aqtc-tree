import { GiPineTree } from "react-icons/gi";

const AQTCLogo = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center relative">
      {/* Top: Tree icons + AQTC text */}
      <div className="flex items-center gap-2 relative z-10">
        {/* Tree icons tightly packed */}
        <div className="flex text-green-700 text-2xl leading-none tracking-tight -mr-1">
          <GiPineTree className="-mr-2" />
          <GiPineTree className="-mr-2" />
          <GiPineTree />
        </div>

        {/* AQTC Text with only Q wrapped */}
        <h1 className="text-4xl font-bold text-black">
          A
          <span className="inline-block mx-1">Q</span>
          TC
        </h1>
      </div>

      {/* Full underline from tree to end of AQTC */}
      <div className="absolute left-0 right-0 top-10 flex justify-center">
        <div className="w-[260px] h-1 bg-green-700 rounded-sm"></div>
      </div>

      {/* Bottom tagline */}
      <p className="text-xs font-bold leading-tight text-black uppercase mt-3 z-10">
        American Quality <br />
        Tree Care, LLC.
      </p>
    </div>
  );
};

export default AQTCLogo;
