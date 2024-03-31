import { Canvas, useFrame } from "@react-three/fiber"
import {useRef} from "react"
import "./App.css"

function App() {
  const Cube = ({position, size, color}) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
    })

    return (
      <mesh position={position}>
          <boxGeometry args={size}/>
          <meshBasicMaterial color={color}/>
        </mesh>
    )
  }

  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />

        <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} intensity={0.5}/>
        <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} intensity={0.5}/>

        <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]} intensity={0.5}/>
        <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]} intensity={0.5}/>
      </Canvas>
    </>
  )
}

export default App
 