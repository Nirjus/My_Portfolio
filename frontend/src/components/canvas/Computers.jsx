import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./bmw_m6_gt3_2018/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="white" />
    
      <pointLight intensity={10} position={[0, 4, 0]} />

      <spotLight intensity={10} position={[0, 0.3, 3]} />
      <spotLight intensity={10} position={[4, 1, 0]} />
      <spotLight intensity={10} position={[3, 1, 3]} />
      <spotLight intensity={10} position={[3, 1, -3]} />
      <spotLight intensity={10} position={[-4, 1, 0]} />
      <spotLight intensity={10} position={[-3, 1, 3]} />
      <spotLight intensity={10} position={[-3, 1, -3]} />
      <spotLight intensity={10} position={[0, 1, -3]} />
    
      <primitive
        object={computer.scene}
        
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[2, 1]}
      camera={{ position: [20, 3, 5], fov: 21 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
         
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
