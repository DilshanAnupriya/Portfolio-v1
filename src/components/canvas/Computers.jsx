import { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,SpotLight,useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { i } from "framer-motion/client";

const Computers = ({isMobile}) => {

  const computor = useGLTF('./desktop_pc/scene.gltf');
  //const computor = useGLTF('./gaming_desktop_pc/scene.gltf');
  //  const computor = useGLTF('./imac_computer/scene.gltf');
 // const computor = useGLTF('./cavallo_purosangue/scene.gltf');
   //const computor = useGLTF('./medieval_house_stylized/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.8} groundColor="black"/> 
      <pointLight intensity={1}/> 
      <primitive 
        object={computor.scene} 
        scale={isMobile? 0.7:0.75} 
        position={isMobile? [0,-3,-2.2]:[0,-3.25,-1.5]} 
        rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  )
}


const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return(
    <Canvas frameloop="demand" shadows camera={{position:[20,3,5], fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile ={isMobile} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas;
