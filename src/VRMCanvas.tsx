import { FC, useState, useEffect, useRef } from "react"
import { Canvas, useFrame, Vector3 } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { VRMLoaderPlugin } from "@pixiv/three-vrm"

import useWindowSize from "hooks/useWindowSize"

const Model = ({rotates = false}: {rotates?: boolean}) => {
  const [gltf, setGltf] = useState<GLTF>()
  const [progress, setProgress] = useState<number>(0)

  useFrame(() => {if (rotates) {gltf?.scene.rotateY(0.05)}})

  useEffect(() => {
    if (!gltf) {
      const loader = new GLTFLoader()
      loader.register((parser) => {
        return new VRMLoaderPlugin(parser)
      })

      loader.load(
        "/ナタクラゲ2.1_edit.vrm",
        (tmpGltf) => {
          setGltf(tmpGltf)
          console.log("loaded")
        },
        // called as loading progresses
        (xhr) => {
          setProgress((xhr.loaded / xhr.total) * 100)
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
        },
        // called when loading has errors
        (error) => {
          console.log("An error happened")
          console.log(error)
        }
      )
    }
  }, [gltf])

  return (
    <>
      {gltf ? (
        <primitive object={gltf.scene} />
      ) : (
        <Html center>{progress} % loaded</Html>
      )}
    </>
  )
}

const GltfSingleCanvas = ({camPos, hasOrbit = false} : {camPos: Vector3, hasOrbit?: boolean}) => {
  const gltfCanvasParentRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (gltfCanvasParentRef.current?.offsetWidth) {
      setCanvasHeight(gltfCanvasParentRef.current.offsetWidth)
    }
  }, [windowSize])

  return (
    <div
      ref={gltfCanvasParentRef}
      style={{ height: `${canvasHeight}px` }}
    >
      {
        clicked ? (
          <Canvas
            frameloop="always"
            camera={{ 
              fov: 20, near: 0.1, far: 300,
              position: camPos,
              rotation: [190 * 2 * Math.PI / 360, 0, Math.PI]
            }}
            flat
          >
            <directionalLight position={[0, -1, 0]} intensity={2} color={"#FFFFFF"} />
            <Model />
            <boxGeometry />
            {
              hasOrbit ? (
                <>
                  <OrbitControls
                    target={[0, 1, 0]}
                    enableZoom={true}
                    enablePan={false}
                    enableDamping={false}
                  />
                  <gridHelper />
                </>
              ) :(
                <></>
              )
            }
          </Canvas>
        ) : (
          <div
            onClick={() => setClicked(true)}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#50FFDF11"
            }}
          >
            <p>クリックして3Dモデルを表示</p>
          </div>
        )
      }
    </div>
  )
}

// const DoubleCanvas: FC = () => {
//   return (
//     <div style={{display: "flex", justifyContent: "space-around"}}>
//       <GltfSingleCanvas camPos={[-0.2, 1.7, -5]} />
//       <GltfSingleCanvas camPos={[0.2, 1.7, -5]} />
//     </div>
//   )
// }

const VRMCanvas: FC = () => {
  return (
    <GltfSingleCanvas camPos={[-0.2, 1, -6]} hasOrbit={true} />
  )
}

export default VRMCanvas
