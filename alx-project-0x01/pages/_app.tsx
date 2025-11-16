import type { AppProps } from "next/app";
import "@/alx-project-0x01/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


