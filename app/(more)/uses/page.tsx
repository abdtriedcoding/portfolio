import Image from "next/image";

const usesPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16 dark:text-zinc-200">
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Uses</h1>
        Here's a list of software and hardware that I use on a regular basis.
        <br />
        <br />
        <p>
          Every once in a while someone asks me about my development environment
          or has questions about certain hardware. I thought it would be fun to
          list out everything I use here. Keep in mind, I change things around
          quite a bit, but I will try to keep this page updated. If I missed
          anything, please let me know.
        </p>
      </div>
      {/* <Image
        src="/dwm.png"
        className="rounded-md"
        width={1920}
        height={1080}
        alt="dwm"
      /> */}
      <h2 className="text-xl font-bold pb-8">OS</h2>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  );
};

export default usesPage;