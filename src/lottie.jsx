import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../public/OuTfXsO6jm.json";

const App = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default App;