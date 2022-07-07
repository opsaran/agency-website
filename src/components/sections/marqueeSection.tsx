import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <Marquee gradientColor={[0, 0, 0]} className={"marquee-wrapper"}>
            <div className="slider-wrapper">
                <img
                    src={"/shopify.png"}
                    width={44}
                    height={50}
                    alt="shopify"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/wordpress.png"}
                    width={50}
                    height={50}
                    alt="wordpress"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/nextjs.png"}
                    width={100}
                    height={50}
                    alt="nextjs"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/webflow.png"}
                    width={199}
                    height={50}
                    alt="webflow"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/reactjs.png"}
                    width={56}
                    height={50}
                    alt="reactjs"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/nodejs.png"}
                    width={82}
                    height={50}
                    alt="nodejs"
                />
            </div>
            <div className="slider-wrapper">
                <img
                    src={"/figma.png"}
                    width={33}
                    height={50}
                    alt="figma"
                />
            </div>
        </Marquee>
    )
}

export default MarqueeSection;