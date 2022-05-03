import Image from "./../components/image";
import Layout from "../components/layout";

export default function GalleryPage() {
    return (
        <Layout>
            <div
                class="container content-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mx-auto ">
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </div>
        </Layout>
    );
}
