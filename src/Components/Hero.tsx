import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-[url('https://png.pngtree.com/png-vector/20220220/ourmid/pngtree-blue-connecting-network-world-map-design-png-image_4441519.png')] bg-cover bg-center bg-no-repeat relative">
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Main Content */}
            <div className="relative w-full flex flex-col justify-center items-center text-center text-white z-10 px-6">
                {/* Decorative Image */}
                <div className="absolute right-40 top-40 h-[250px] mix-blend-multiply w-[600px]">
                    {/* <img src="" alt="Population Visualization" /> */}
                </div>

                {/* Title */}
                <h1 className="text-6xl font-semibold font-display">
                    Community Dynamics
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl font-arsenal font-semibold mt-4">
                    VISUALIZING THE WORLD'S POPULATION
                </h2>

                {/* Description */}
                <p className="w-[60%] font-roboto text-lg mt-6 leading-relaxed">
                    "America’s landscape contrasts the relentless energy of cities like New York with 
                    the tranquil expanse of the Midwest. New York, a hub of finance, culture, and 
                    innovation, thrives on diversity and a fast-paced lifestyle, while the Midwest, 
                    known as the 'Heartland of America,' values stability, tight-knit communities, and 
                    a slower rhythm of life. Skyscrapers and crowded streets define the former, while 
                    open fields and small towns shape the latter. Despite their differences, both 
                    contribute to America’s rich identity, blending urban ambition with rural tradition 
                    to reflect the nation’s dynamic spirit."
                </p>

                {/* Key Statement */}
                <p className="font-bold text-lg mt-6">
                    Over the past 30 years, the scale of population change is hard to grasp. 
                    How do you even visualize 10 million people?
                </p>

                {/* Call to Action Button */}
                <button
                    className="mt-8 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 px-6 text-white font-medium text-lg shadow-md"
                    onClick={() => navigate("/map")}
                >
                    View Population
                </button>
            </div>
        </div>
    );
};

export default Hero;
