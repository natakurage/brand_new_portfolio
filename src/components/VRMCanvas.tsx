"use client"

import { useState, useEffect, useRef, memo, useCallback } from "react"
import { Canvas, useFrame, Vector3 } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { VRMLoaderPlugin } from "@pixiv/three-vrm"

import useWindowSize from "hooks/useWindowSize"
import Image from "next/image"

const Model = (
  { filename, rotates = false, onLoad, setProgress }
  : { filename: string, rotates?: boolean, onLoad?: () => void, setProgress?: (progress: number) => void }
) => {
  const [gltf, setGltf] = useState<GLTF>()

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
          onLoad?.()
        },
        // called as loading progresses
        (xhr) => {
          setProgress?.((xhr.loaded / xhr.total) * 100)
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
        },
        // called when loading has errors
        (error) => {
          console.log("An error happened")
          console.log(error)
        }
      )
    }
  }, [filename, gltf, onLoad, setProgress])

  return gltf ? <primitive object={gltf.scene} /> : null
}

const GltfSingleCanvas = (
  { vrmFilename, imgFilename, camPos, hasOrbit = false }
  : { vrmFilename: string, imgFilename: string, camPos: Vector3, hasOrbit?: boolean }
) => {
  const gltfCanvasParentRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (gltfCanvasParentRef.current?.offsetWidth) {
      setCanvasHeight(gltfCanvasParentRef.current.offsetWidth)
    }
  }, [windowSize])

  const makeLoadedTrue = useCallback(() => setLoaded(true), [setLoaded])
  const updateProgress = useCallback((n: number) => setProgress(n), [setProgress])

  return (
    <div
      ref={gltfCanvasParentRef}
      style={{ height: `${canvasHeight}px` }}
    >
      {
        clicked && (
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
            <Model
              filename={vrmFilename}
              onLoad={makeLoadedTrue}
              setProgress={updateProgress}
            />
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
        )
      }
      { !loaded && (
          <div
            onClick={() => setClicked(true)}
            className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-[#50FFDF11]"
          >
            <Image
              src={imgFilename}
              alt="Natakurage Portrait"
              fill
              priority
              className="not-prose object-contain"
            />
            <p className="text-neutral-50 bg-neutral-900 z-20 p-2 rounded">
              { clicked ? (progress.toFixed(2) + "% loaded") : "クリックして3Dモデルを表示" }
            </p>
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
