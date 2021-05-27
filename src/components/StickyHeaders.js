// import { useState, useEffect, useRef, useCallback } from "react";

// const StickyHeader = (defaultSticky = false) => {
//     const [isSticky, setIsSticky] = useState(defaultSticky);
//     const aboutRef = useRef(null);

//     function getWindowDimensions() {
//         const { innerWidth: width, innerHeight: height } = window;
//         return {
//             width,
//             height
//         };
//     }
    
//     function useWindowDimensions() {
//         const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
//         useEffect(() => {
//             function handleResize() {
//                 setWindowDimensions(getWindowDimensions());
//             }
    
//             window.addEventListener('resize', handleResize);
//             return () => window.removeEventListener('resize', handleResize);
//         }, []);
    
//         return windowDimensions;
//     }

//     const topBound = useWindowDimensions().height + 105;

//     const bottomBound = useWindowDimensions().height - 45;

//     // console.log(topBound, bottomBound);
    

//     const toggleSticky = useCallback(
//         ({ top, bottom }, topBound, bottomBound) => {
//         if (top <= topBound && top > bottomBound) {
//             !isSticky && setIsSticky(true);
//         } else {
//             isSticky && setIsSticky(false);
//         }
//         },
//         [isSticky]
//     );

//     useEffect(() => {
//         const handleScroll = () => {
//             toggleSticky(aboutRef.current.getBoundingClientRect(), topBound, bottomBound);
//         };
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//         window.removeEventListener("scroll", handleScroll);
//         };
//     }, [toggleSticky]);

//     return { aboutRef, isSticky };
//     };

// export default StickyHeader;