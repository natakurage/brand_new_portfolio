"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

import { usePathname } from "next/navigation";

class Boid {
  pos: Vector3;
  vel: Vector3;
  power: number;
  range: number;
  maxWallAccel: number;

  constructor (
    pos: Vector3,
    vel: Vector3,
    power: number,
    range: number
  ) {
    this.pos = pos;
    this.vel = vel;
    this.power = power;
    this.range = range;
    this.maxWallAccel = 10;
  }

  get dir () {
    return this.vel.clone().normalize();
  }

  change_accel (boids: Boid[], sep: number, ali: number, coh: number, maxVel: number, width: number, depth: number, height: number) {
    this.vel.add(
      this.calc_accel(boids, sep, ali, coh).multiplyScalar(this.power)
      .add(this.calc_wall(width, depth, height).multiplyScalar(wallCoef))
    );
    if (this.vel.length() > maxVel) {
      this.vel.normalize();
      this.vel.multiplyScalar(maxVel);
    }
  }

  move () {
    this.pos.add(this.vel);
  }

  calc_accel (boids: Boid[], sep: number, ali: number, coh: number) {
    boids = boids.filter(boid => boid !== this);
    const distance = (boid: Boid) => boid.pos.clone().sub(this.pos).length();
    const nears = boids.filter(boid => distance(boid) < this.range);
    if (nears.length === 0) {
      return new Vector3(0, 0, 0);
    }
    const nearest = nears.reduce((prev, curr) => {
      if (distance(prev) < distance(curr)) return prev;
      else return curr;
    }, nears[0]);
    const separation_dir = (this.pos.clone().sub(nearest.pos)).normalize();
    const alignment_dir = (nearest.vel.clone().sub(this.vel)).normalize();
    const average_pos = boids.map((boid) => boid.pos).reduce((prev, curr) => {
      return prev.clone().add(curr);
    }, new Vector3(0, 0, 0)).divideScalar(boids.length);
    const cohesion_dir = (average_pos.sub(this.pos)).normalize();
    return separation_dir.multiplyScalar(sep).add(
      alignment_dir.multiplyScalar(ali).add(
        cohesion_dir.multiplyScalar(coh)
      )
    ).normalize();
  }

  calc_wall (width: number, depth: number, height: number) {
    const accel = new Vector3(0, 0, 0);
    if (this.pos.x < 0) {
      accel.add(new Vector3(-this.pos.x, 0, 0));
    }
    if (this.pos.x > width) {
      accel.add(new Vector3(width - this.pos.x, 0, 0));
    }
    if (this.pos.y < 0) {
      accel.add(new Vector3(0, -this.pos.y, 0));
    }
    if (this.pos.y > depth) {
      accel.add(new Vector3(0, depth - this.pos.y, 0));
    }
    if (this.pos.z < 0) {
      accel.add(new Vector3(0, 0, -this.pos.z));
    }
    if (this.pos.z > height) {
      accel.add(new Vector3(0, 0, height - this.pos.z));
    }
    if (accel.length() > this.maxWallAccel) {
      accel.normalize();
      accel.multiplyScalar(this.maxWallAccel);
    }
    return accel;
  }
}

// const power = 0.01
// const range = 200
// const maxVel = 10
// const wallCoef = 0.01

const power = 0.0001;
const range = 2;
const maxVel = 0.1;
const wallCoef = 0.0001;

const numBoids = 12;
// const power = 0.01
// const range = 1
// const maxVel = 0.2
// const wallCoef = 0.05

interface BoidsProps {
  sep: number
  ali: number
  coh: number
  freeze?: boolean
  width: number
  depth: number
  height: number
}

interface BoidProps {
  boid: Boid,
  index: number,
  width: number,
  depth: number,
  height: number,  
}

const SingleBoid = ({boid, width, depth, height}: BoidProps) => {
  const sphereRef = useRef<Mesh>(null);

  useEffect(() => {
    const realPos: Vector3 = boid.pos.clone().sub(new Vector3(width/2, depth/2, height/2));
    sphereRef.current?.position.set(realPos.x, realPos.y, realPos.z);
  }, [boid.pos, boid.pos.x, boid.pos.y, boid.pos.z, width, depth, height]);

  return (
    <Sphere
      ref={sphereRef}
      position={boid.pos}
      scale={[0.5,0.5,0.5]}
    >
      <meshStandardMaterial
        color="#382E38"
        roughness={0.4}
        transparent
        opacity={0.5}
      />
      <Sphere
        scale={[0.3,0.3,0.3]}
        position={boid.vel.clone().multiplyScalar(0.3 / maxVel)}
      >
        <meshStandardMaterial color="#ED5126" emissive="#ED5126" emissiveIntensity={1} />
      </Sphere>
    </Sphere>
  );
};
const Boids = ({sep, ali, coh, freeze = false, width, depth, height}: BoidsProps) => {
  const [boids, setBoids] = useState<Boid[]>(() => {
    const boidsTemp: Boid[] = [];
    for (let i = 0; i < numBoids; i++) {
      const pos = new Vector3(
        Math.random() * width,
        Math.random() * depth,
        Math.random() * height
      );
      const vel = new Vector3(
        0.02 * (Math.random() - 0.5),
        0.02 * (Math.random() - 0.5),
        0.02 * (Math.random() - 0.5)
      );
      boidsTemp.push(new Boid(pos, vel, power, range));
    }
    return boidsTemp;
  });

  useFrame(() => {
    if (!freeze) {
      const boidsTemp = [...boids];
      boidsTemp.map((boid) => {
        boid.change_accel(boidsTemp, sep, ali, coh, maxVel, width, depth, height);
        boid.move();
      });
      setBoids(boidsTemp);
    }
  });

  return (
    <>
      {
        boids.map((boid, index) => (
          <SingleBoid
            key={index}
            boid={boid}
            index={index}
            width={width}
            depth={depth}
            height={height}
          />
        ))
      }
    </>
  );
};

export const SketchComponent = () => {
  const gltfCanvasParentRef = useRef<HTMLDivElement>(null);
  const [freeze, setFreeze] = useState(false);
  const pathname = usePathname();

  const paramsMap = new Map<string, [number, number, number]>([
    ["about", [0, 0, 0]],
    ["works", [3, 10, 2]],
    ["policy", [1, 0, 50]],
    ["contact", [1, 0, 0]],
    ["secret", [1, 5, 0]],
  ]);

  const [separation, alignment, cohesion] = paramsMap.get(pathname.slice(1)) || [6, 1, 2];

  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    setFreeze(true);
  }

  return (
    <div
      ref={gltfCanvasParentRef}
      className="w-lvw h-lvh fixed z-[-1000] bg-gradient-to-b via-30% from-cyan-700 via-[#1A3752] to-[#020C15]"
    >
      <Canvas
        frameloop="always"
        camera={{ 
          fov: 20, near: 0.1, far: 300,
          position: [0, 30, 0],
        }}
        flat
      >
        <directionalLight position={[0, 1, 0]} intensity={10} color={"#FFFFFF"} />
        <Boids
          sep={separation}
          ali={alignment}
          coh={cohesion}
          freeze={freeze}
          width={7}
          depth={50}
          height={7}
        />
      </Canvas>
      <div
        className="fixed w-lvw h-lvh
          top-0 bottom-0 left-0 right-0
          bg-gray-950/40 backdrop-blur-md"
      />
    </div>
  );
};

export default SketchComponent;