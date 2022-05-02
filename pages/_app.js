import "./../styles/globals.css";
import React from "react";
import Header from "../components/header";
import Head from "next/head";
import {AnimatePresence} from "framer-motion";

const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
}
export default function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header/>
            <main>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >

                    <Component {...pageProps} />

                </AnimatePresence>

            </main>
        </React.Fragment>
    );
}
