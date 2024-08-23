import Image from "next/image";
import Link from "next/link";

const Playground = () => {
  return (
    <div className="w-full px-4 md:px-10 flex flex-col gap-8 mt-10 bg-slate-50 py-10 md:py-16 justify-center">
      <div className="flex items-center">
        <span className="text-black text-2xl font-normal tracking-tightest">
          view my
        </span>
        <span className="text-black text-2xl font-bold tracking-tightest ml-1">
          playground
        </span>
        <span
          className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full relative"
          style={{ bottom: "-0.1em" }}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex-1">
          <p className="text-black text-4xl md:text-5xl font-normal tracking-tightest leading-tight">
            a content that defines me in every aspect mention{" "}
            <span className="font-bold">designer</span>
            <span className="ml-1 inline-block w-3 h-3 md:w-4 md:h-4 bg-black rounded-full align-middle" />
          </p>

          <div className="mt-8">
            <Link
              href="/works"
              className="text-black text-3xl font-normal flex items-center group tracking-tightest"
            >
              view playground{" "}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
            <div className="w-56 h-px mt-2 bg-black"></div>
          </div>
        </div>

        <div className="relative w-full h-[192px] md:h-[236px] md:w-[540px] flex-shrink-0">
          <Image
            src="/images/placeholder.png"
            alt="Experience Image"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
        </div>
      </div>

      <hr className="border-t border-[#BABABA] w-full my-8 md:my-10" />
    </div>
  );
};

export default Playground;
