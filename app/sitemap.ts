export default async function sitemap() {
  let routes = [
    "",
    "/about",
    "/skills",
    "/uses",
    "/work",
    "/movies",
    "/faqs",
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
