import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Layout from "@/components/layout/Layout";

import {
  Nunito_Sans,
  Frank_Ruhl_Libre,
  Andika,
  Shadows_Into_Light,
} from "next/font/google";

import useCartRehydrate from "@/hooks/useCartRehydrate"; // hydration hook

// Define fonts
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const frank = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-frank",
});
const andika = Andika({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-andika",
});
const shadows = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shadows",
});

function InnerApp({ Component, pageProps }: AppProps) {
  useCartRehydrate(); // ✅ restore cart once
  return <Component {...pageProps} />;
}

export default function App(props: AppProps) {
  return (
    <main
      className={`${nunito.variable} ${frank.variable} ${andika.variable} ${shadows.variable}`}
    >
      <Provider store={store}>
        <Layout>
          <InnerApp {...props} />
        </Layout>
      </Provider>
    </main>
  );
}

// // pages/_app.tsx
// // import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import type { NextPage } from "next";
// import { Provider } from "react-redux";
// import { store } from "@/store/store";
// import Layout from "@/components/layout/Layout";

// import {
//   Nunito_Sans,
//   Frank_Ruhl_Libre,
//   Andika,
//   Shadows_Into_Light,
// } from "next/font/google";

// import useCartRehydrate from "@/hooks/useCartRehydrate";

// const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
// const frank = Frank_Ruhl_Libre({
//   subsets: ["latin"],
//   variable: "--font-frank",
// });
// const andika = Andika({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-andika",
// });
// const shadows = Shadows_Into_Light({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-shadows",
// });

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   noLayout?: boolean;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout<any, any>;
// };

// export default function App({ Component, pageProps }: AppPropsWithLayout) {
//   return (
//     <Provider store={store}>
//       <MainLayoutWrapper Component={Component} pageProps={pageProps} />
//     </Provider>
//   );
// }

// type MainLayoutWrapperProps = {
//   Component: NextPageWithLayout;
//   pageProps: AppProps["pageProps"];
// };

// function MainLayoutWrapper({ Component, pageProps }: MainLayoutWrapperProps) {
//   useCartRehydrate();

//   if (Component.noLayout) {
//     return <Component {...pageProps} />;
//   }

//   return (
//     <main
//       className={`${nunito.variable} ${frank.variable} ${andika.variable} ${shadows.variable}`}
//     >
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </main>
//   );
// }
