import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Pointer } from "@/components/pointer/Pointer";

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);
  const { x, y } = Pointer(ref);

  return (
    <>
      <Component {...pageProps} />
      <motion.div
        ref={ref}
        style={{
          x,
          y,
          width: 15,
          height: 15,
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          boxShadow: "0px 180px 200px rgba(0, 0, 0, 0.6), 0px 5px 10px rgba(0, 0, 0, 0.4)",
          background: "transparent",
        }}
      />
    </>
  );
}