import Link from "next/link";
import React from "react";
import FloatingCircles from "../components/floatingCircles";
import Layout from "../components/layout";

export default function IndexPage() {
    return (<Layout>
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <div className="inset-0 bg-black opacity-25 absolute z-20">
            </div>
            <FloatingCircles color="rgb(49 46 129)" style={{position: 'absolute', zIndex: 10}}>

            </FloatingCircles>

            <div
                className="container mx-auto px-6 md:px-12 relative z-20 flex items-center py-32 xl:py-40 absolute">
                <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span className="font-bold uppercase text-yellow-400">
                Exquisite
            </span>
                    <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
                        Let the Exquisitness
                        <br/>
                        Envelop you
                    </h1>
                    <Link href="/gallery" scroll={false}>
                    <a href="/gallery"
                       className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                        Give me money
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>);
}
