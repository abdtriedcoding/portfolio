export const TechStackIcons = () => {
  return (
    <div>
      <ul className="relative overflow-hidden grid grid-cols-4 grid-flow-dense py-8 px-4 gap-y-10 items-center justify-center list-none  bg-repeat">
        <li className="flex flex-row m-auto items-center justify-center rounded-half p-1 z-1 max-w-[3.5rem] bg-background">
          <a
            className="inline-block font-medium self-start text-secondary-txt transform transition hocus:text-primary-txt hocus:scale-110"
            title="Next.js"
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
          >
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              className="fill-inherit size-12"
              aria-hidden="true"
            >
              <path
                className="fill-current"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.4-.5 4.8-1.2L9.6 10.6v5.7H8.5V8.5h1.1l7.9 11.8c2.7-1.8 4.5-4.9 4.5-8.4C22 6.5 17.5 2 12 2zm3.5 13.2-1.2-1.8V8.5h1.2v6.7z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="flex flex-row m-auto items-center justify-center rounded-half p-1 z-1 max-w-[3.5rem] bg-background">
          <a
            className="inline-block font-medium self-start text-secondary-txt transform transition hocus:text-primary-txt hocus:scale-110"
            title="Tailwind CSS"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com/"
          >
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              className="fill-inherit size-12"
              aria-hidden="true"
            >
              <path
                className="fill-current"
                d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="flex flex-row m-auto items-center justify-center rounded-half p-1 z-1 max-w-[3.5rem] bg-background">
          <a
            className="inline-block font-medium self-start text-secondary-txt transform transition hocus:text-primary-txt hocus:scale-110"
            title="Vercel"
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/"
          >
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              className="fill-inherit size-12"
              aria-hidden="true"
            >
              <path className="fill-current" d="M1,21H23L12,2"></path>
            </svg>
          </a>
        </li>
        <li className="flex flex-row m-auto items-center justify-center rounded-half p-1 z-1 max-w-[3.5rem] bg-background">
          <a
            className="inline-block font-medium self-start text-secondary-txt transform transition hocus:text-primary-txt hocus:scale-110"
            title="View source code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            href={`${process.env.NEXT_PUBLIC_GITHUB}/portfolio`}
          >
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              className="fill-inherit size-12"
              aria-hidden="true"
            >
              <path
                className="fill-current"
                d="M12 2C6.3 2 1.8 6.6 1.8 12.2c0 4.5 2.9 8.4 7 9.7.5.1.7-.2.7-.5v-1.7c-2.9.7-3.5-1.3-3.5-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.2-.4-.5-1.5 0-2.8 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.8 0 3.9-2.4 4.8-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4.1-1.4 7-5.2 7-9.7C22.2 6.6 17.7 2 12 2z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
