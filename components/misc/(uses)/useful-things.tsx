import { TechStackIcons } from "@/components/misc/(uses)/techstack-icons";
import { MyLogo } from "@/components/misc/(uses)/my-logo";

export const UsefulThings = () => {
  return (
    <section className="border-none">
      <EverydayTab />
      <SoftwareTab />
      <BrowserTab />
      <CodingTab />
      <WebsiteTab />
    </section>
  );
};

const EverydayTabData = [
  {
    key: "Laptop",
    desc: "Lenovo Legion 5 Pro running Arch Linux (btw!)",
  },
  {
    key: "Old Laptop",
    desc: "HP Laptop 15s running Ubuntu Server (yes, I kind of made it a homelab)",
  },
  {
    key: "Secondary Monitor",
    desc: "BenQ GW2283 (22 inch)",
  },
  {
    key: "Phone",
    desc: "OnePlus Nord CE 3 5G",
  },
  {
    key: "Earphones",
    desc: "OnePlus Nord Buds 2",
  },
  {
    key: "Smartwatch",
    desc: "Nope, I always prefer an analog one. I don't remember the exact model, but the one I currently have is from Fossil and was a birthday present.",
  },
  {
    key: "Backpack",
    desc: "Nothing fancy, just a generic one.",
  },
];

export const EverydayTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Everyday</h1>

      {EverydayTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const SoftwareTabData = [
  {
    key: "OS",
    desc: "Arch Linux",
  },
  {
    key: "Init System",
    desc: "systemd",
  },
  {
    key: "DNS",
    desc: "Cloudflare",
  },
  {
    key: "Window Manager",
    desc: "bspwm",
  },
  {
    key: "Terminal",
    desc: "Kitty",
  },
  {
    key: "Text Editor",
    desc: "Neovim",
  },
  {
    key: "Status Bars",
    desc: "Polybar",
  },
  {
    key: "Video Streaming",
    desc: "MPV + Jellyfin",
  },
  {
    key: "Music",
    desc: "MPD + NCMPCPP (and occasionally Spotify or YT Music)",
  },
  {
    key: "Notes",
    desc: "Neovim + Vimwiki",
  },
  {
    key: "Password Manager",
    desc: "GnuPG + pass",
  },
  {
    key: "Sync",
    desc: "Syncthing (Local), Mega, or Google Drive (Cloud)",
  },
];

export const SoftwareTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Software</h1>

      {SoftwareTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const BrowserTabData = [
  {
    desc: "Chromium Web Store",
  },
  {
    desc: "OneTab",
  },
  {
    desc: "Dark Reader",
  },
  {
    desc: "JSON Viewer",
  },
  {
    desc: "uBlock Origin",
  },
  {
    desc: "Video Playback Speed Controller",
  },
  {
    desc: "React Developer Tools",
  },
  {
    desc: "Sponsor Block",
  },
  {
    desc: "Unhook",
  },
  {
    desc: "Google Docs Offline",
  },
];

export const BrowserTab = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold py-8">Browser</h1>

        <div className="pb-5">
          I use <code>firefox-developer-edition</code> as my primary browser,
          and <code>ungoogled-chromium</code> as my secondary browser, along
          with following extensions:
        </div>
      </div>
      {BrowserTabData.map((data, i) => (
        <div key={i}>
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="dark:text-white">{i + 1}. </span>
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export const CodingTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Coding</h1>

      <div className="pb-5">
        I use Neovim for simple text edits or writing blogs, and VSCodium with
        Vim Extension ({""}
        <a
          href="https://gist.github.com/arnvgh/32e28c0d699a6685017a5e2ba606e1ab"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Settings
        </a>
        {""}) for web and most of my other projects, for python related stuff I
        use PyCharm cause of Pylance compalibitly issues with VSCodium.
      </div>

      <div>
        <span className="font-medium dark:text-white">Font: </span>
        <span className="text-zinc-600 dark:text-zinc-400">Jetbrains Mono</span>
      </div>
      <div>
        <span className="font-medium dark:text-white">Theme: </span>
        <span className="text-zinc-600 dark:text-zinc-400">Monokai Pro</span>
      </div>
    </div>
  );
};

export const WebsiteTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pt-8">Website</h1>
      <h1 className="text-sm font-bold py-5">Tech Stack</h1>
      <p>
        This website is created with Next.js, Tailwind CSS, Shadcn UI. It's
        hosted on Vercel. If you're curious, feel free to explore the source
        code on{" "}
        <a
          href={`${process.env.NEXT_PUBLIC_GITHUB}`}
          className="link"
          target="_blank"
        >
          GitHub
        </a>
        {""}.
      </p>
      <TechStackIcons />
      <h1 className="text-xl font-bold py-5">Logo</h1>
      My personal logo is designed by myself.
      <MyLogo />
    </div>
  );
};
