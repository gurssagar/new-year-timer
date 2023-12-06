import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../public/Animation.json";

const App = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
    };

    const { View } = useLottie(options);

    return <div className="no">{View}</div>;
};

export default App;