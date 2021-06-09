import React, { Suspense, useEffect, useState } from "react";

// components
import Slider from "../components/Slider/Slider";

// lazy pages
const About = React.lazy(() => import("./About"))

// laxy components
const Services = React.lazy(() => import("../components/Services"))

export default function Home() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll);
        })
    }, [])

    const handleScroll = function (event) {
        // let scrollTop = event.srcElement.body.scrollTop,
        //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

        setShow(true)
    }

    return (
        <div>
            <Slider />
            <Suspense fallback={<div></div>} >
                <Services />
                {
                    show ?
                        <About removeHeader={true} />
                        : null
                }
            </Suspense>
        </ div>
    )
}