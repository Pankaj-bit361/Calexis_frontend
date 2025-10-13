import { useState } from "react";
import Navbar from "../../common/Navbar";

import ScrollSlider from "./components/ScrollPage";

const Home = () => {
    const [scrollPosition] = useState(0);

    return (
        <div className="relative">
            <Navbar scrollPosition={scrollPosition} />
            <ScrollSlider />
        </div>
    );
};

export default Home;
