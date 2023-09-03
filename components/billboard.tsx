import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-5xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-10">
            {data?.label}
          </div>
          <div className="absolute w-full h-full bg-white blur-3xl opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default Billboard;
