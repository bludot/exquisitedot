import Price from "./../components/price";
import Layout from "../components/layout";

export default function PricingPage() {
    return (
        <Layout>
            <div
                className="place-content-center sm:space-x-0 sm:space-y-8 md:space-y-0 md:space-x-4 flex flex-col xs:flex-col sm:flex-row items-center mx-16 my-32">
                <Price name="Standard" price="$1"/>
                <Price
                    name="Exquisite"
                    price="$100"
                    special
                    items={[
                        "All illimited components",
                        "Own custom Tailwind styles",
                        "Unlimited Templates",
                        "Free premium dashboard",
                        "Best ranking",
                        "Premium svg",
                        "Good feelings",
                        "Thinner wallet"
                    ]}
                    unsupported={["My wife"]}
                />
                <Price name="Contributer" price="$10"/>
            </div>
        </Layout>
    );
}
