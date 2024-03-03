export default async function sitemap() {
  let routes = ["", "/about", "/uses", "/work", "/anime", "/faqs"].map(
    (route) => ({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return routes;
}
