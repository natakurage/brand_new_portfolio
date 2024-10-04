"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame, Vector3 } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { VRMLoaderPlugin } from "@pixiv/three-vrm"

import useWindowSize from "hooks/useWindowSize"
import Image from "next/image"

const Model = (
  { filename, rotates = false }
  : { filename: string, rotates?: boolean }
) => {
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
        filename,
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
  }, [gltf, filename])

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

const GltfSingleCanvas = (
  { vrmFilename, imgFilename, camPos, hasOrbit = false }
  : { vrmFilename: string, imgFilename: string, camPos: Vector3, hasOrbit?: boolean }
) => {
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
            <Model filename={vrmFilename} />
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
            className="relative w-full h-full flex justify-center items-center bg-[#50FFDF11]"
          >
            <Image
              src={imgFilename}
              alt="Natakurage Portrait"
              fill
              priority
              className="not-prose object-contain"
            />
            <p className="text-neutral-50 bg-neutral-900 z-10 p-2 rounded">クリックして3Dモデルを表示</p>
          </div>
        )
      }
    </div>
  )
}

export default function VRMCanvas(
  { vrmFilename, imgFilename } : { vrmFilename: string, imgFilename: string }
) {
  return (
    <GltfSingleCanvas
      vrmFilename={vrmFilename}
      imgFilename={imgFilename}
      camPos={[-0.2, 1, -6]}
      hasOrbit={true}
    />
  )
}
