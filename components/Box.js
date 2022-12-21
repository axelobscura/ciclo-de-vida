import React, { useRef, useState } from 'react';

export default function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [rotation, setRotaion] = useState(1)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      rotation={[Math.PI / 1, 1, rotation]}
      ref={ref}
      scale={clicked ? 1 : 3.5}
      //onClick={(event) => click(!clicked)}
      onClick={() => setRotaion(rotation + 1)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'gray' : 'orange'} />
    </mesh>
  );
}