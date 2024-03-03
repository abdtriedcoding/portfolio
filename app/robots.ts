export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
    host: `${process.env.NEXT_PUBLIC_DOMAIN},`,
  };
}
