import Link from "next/link";
import React from "react";
import FloatingCircles from "../components/floatingCircles";
import Layout from "../components/layout";

export default function IndexPage() {
    return (<Layout>
        <div className="bg-white relative overflow-hidden h-screen">
            {/*<div className="inset-0 bg-black opacity-10 absolute z-20">
            </div>*/}
            <FloatingCircles color="rgb(255 255 255)" style={{position: 'absolute', zIndex: 10}}>

            </FloatingCircles>

            <div
                className="container mx-auto px-6 md:px-12 relative z-20 flex items-center py-32 xl:py-40 absolute">
                <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span className="font-extrabold uppercase text-2xl text-gray-400">
                Exquisite
            </span>
                    <h1 className="font-bold text-5xl sm:text-5xl md:text-7xl text-gray-800 leading-tight mt-4" style={{textShadow:`0 0 .5em rgba(255,255,255,.4),
                        .1em 0 .15em rgba(0,0,0,.2),
                        .1em .3em .15em rgba(0,0,0,.2)`}}>
                        Let the Exquisiteness
                        <br/>
                        Envelop you
                    </h1>
                    <Link href="/gallery" scroll={false}>
                    <a href="/gallery"
                       className="block bg-gray-300 hover:bg-gray-400 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                        Give me money
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>);
}
