import Script from "next/script";
import React from "react";

const AdScript = ({ pid }: { pid: string }) => {
  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
      crossOrigin="anonymous"
    />
  );
};

export default AdScript;
