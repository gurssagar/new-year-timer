import { useState, useEffect } from 'react';
import '../public/Galaksinos-RpOle.ttf';
import App from './lottie.jsx';
const countTime = () => {
    const calcTime = () => {
        const currentDate = new Date();
        const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
        const timeDifference = newYearDate - currentDate;

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calcTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calcTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="main">
            <div>

            </div>
            <div>
            <div>
                <h2 className="heading">COUNTDOWN TO 2024!</h2>
                <div id="start">
                    <div className="test">Coming</div>
                <div className="time">
                    <p className="extra">Days</p>
                    <p className="ele">{`${timeLeft.days}`}</p>
                </div>
                <div className="time">
                    <p className="extra">Hours</p>
                    <p className="ele">{`${timeLeft.hours}`}</p>

                </div>
                <div className="time">
                    <p className="extra">Mins</p>
                    <p className="ele">{`${timeLeft.minutes}`}</p>

                </div>
                <div className="time">
                    <p className="extra">Secs</p>
                    <p className="ele">{`${timeLeft.seconds}`}</p>
                </div>
                    <div className="test">Soon</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default countTime;