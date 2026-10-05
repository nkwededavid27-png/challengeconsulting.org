import { useEffect, useState } from "react";

function Counter({ label, target, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [target, duration]);

    return (
        <div className="flex flex-col items-center p-4">
            <span className="text-8xl font-extrabold text-[#000033]">{count}</span>
            <span className="text-lg text-[#000033] font-bold">{label}</span>
        </div>

    );
}

export default function StatsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  m-2  bg-gray-200 p-2 rounded-4xl lg:m-10 gap-6 text-center">
            <Counter label="Clients +" target={160} duration={5000} />
            <Counter label="Services" target={15} duration={9000} />
            <Counter label="Trained students +" target={100} duration={4000} />
            <Counter label="Subscribers " target={5000} duration={3000} />
        </div>
    );
}

