import Image from "./../../components/image";
import Layout from "../../components/layout";
import images from './../../data/available.json'
import {FixedSizeGrid as Grid} from 'react-window';
import {useEffect, useRef, useState} from "react";


const Row = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
        <Image
        key={columnIndex*rowIndex}
        src={images[images.length - columnIndex*(rowIndex+1)]}
    /></div>
);

export default function GalleryPage() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth-70)
        setHeight(window.innerHeight-92-32)
    })
    return (
        <Layout>
            <div
                className="container content-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mx-auto my-32">
                <Grid
                    columnCount={5}
                    columnWidth={300}

                    rowCount={1000}
                    rowHeight={400}
                    height={height}
                    itemCount={1000}
                    itemSize={images.length}
                    width={width}
                >
                    {Row}
                </Grid>


            </div>
        </Layout>
    );
}
