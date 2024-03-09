import Script from "next/script";

export const Analytics = () => {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <Script
          strategy="afterInteractive"
          async
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}`}
        />
      )}
    </>
  );
};
