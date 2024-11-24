// pages/_app.tsx
import type { AppProps } from "next/app";
import { CacheProvider } from "../components/common/contexts/CacheProvider";
import "./globals.css"; // Import global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <Component {...pageProps} />
    </CacheProvider>
  );
}
