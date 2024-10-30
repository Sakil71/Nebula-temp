import {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesJs = () => {
    const [init, setInit] = useState(false);

    // Initialize the particles engine only once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const particlesLoaded = useCallback((container) => {
    //     console.log(container);
    // }, []);
    return (
        <div>
            {init && (
                <Particles
                    id="tsparticles"
                    // particlesLoaded={particlesLoaded}
                    options={{
                        particles: {                            
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: { enable: true, area: 100 },
                                value: 80,
                            },
                            opacity: { value: 0.5 },
                            shape: { type: "circle" },
                            size: { value: { min:2 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );
};

export default ParticlesJs;