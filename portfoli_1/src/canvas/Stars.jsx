import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 1.5}));
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
    
    return (
      <group rotation={[10, 100, Math.PI /4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='rgb(160, 160, 160)'
            size={0.0011}
            sizeAttenuation={true}
            depthWrite={false}
            />
        </Points>
      </group>
    );
};
const StarsCanvas = () => {
      const sty = {
          width : '100%',
          height : '100%',
          position : 'absolute',
          top : 0,
          left : 0,
          zIndex : '-1',
      }
    return (
      <div style={sty}>
        <Canvas camera={{ position: [0, 1   , 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
  
          <Preload all />
        </Canvas>
      </div>
    );
  };
   export default StarsCanvas;