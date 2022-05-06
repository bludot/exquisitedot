import Price from "./../components/price";
import Layout from "../components/layout";

export default function PricingPage() {
    return (
        <Layout>
            <div
                className="place-content-center  md:space-y-0 md:space-x-4 flex flex-col xs:flex-col md:flex-row sm:space-x-0 space-y-8 items-center mx-16 my-32">
                <Price name="Standard" price="$1"
                       items={[
                           "Standard Dot",
                           "Support my cause",
                           "Best ranking",
                           "Good feelings",
                       ]}
                       unsupported={[
                           "Muffins",
                           "Cupcakes",
                       ]}/>
                <Price
                    name="Exquisite"
                    price="$100"
                    special
                    items={[
                        "Exquisite Dot",
                        "Support my cause",
                        "Best ranking",
                        "Good feelings",
                        "Thinner wallet"
                    ]}
                    unsupported={[
                        "Muffins",
                        "Cupcakes",
                    ]}
                />
                <Price name="Contributer" price="$10" items={[
                    "Standard Dot",
                    "Support my cause",
                    "Best ranking",
                    "Good feelings",
                ]}
                unsupported={[
                    "Muffins",
                    "Cupcakes",
                ]}/>
            </div>
        </Layout>
    );
}
