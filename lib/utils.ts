import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "abdullah sidd",
  description = "19yo Software Engineer, India",
  image = "/socialphoto.webp",
  icons = [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.ico",
      href: "/logo.ico",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-dark.ico",
      href: "/logo-dark.ico",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: {
    media: string;
    url: string;
    href: string;
  }[];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@abdtriedcoding",
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN as string),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
