import dynamic from "next/dynamic";
import p5Types from "p5";
import styles from "@/styles/Boid.module.css";

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

class Boid {
  p5: p5Types;
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  power: number;
  range: number;
  maxWallAccel: number;

  constructor (
    p5: p5Types,
    pos: p5Types.Vector,
    vel: p5Types.Vector,
    power: number,
    range: number
  ) {
    this.p5 = p5;
    this.pos = pos;
    this.vel = vel;
    this.power = power;
    this.range = range;
    this.maxWallAccel = 10;
  }

  get dir () {
    return this.vel.copy().normalize()
  }

  change_accel (boids: Array<Boid>, sep: number, ali: number, coh: number) {
    this.vel.add(
      this.calc_accel(boids, sep, ali, coh).mult(this.power)
      .add(this.calc_wall().mult(0.01))
    )
  }

  move () {
    this.pos.add(this.vel);
  }

  draw () {
    const dr = Math.min(20 * this.vel.mag(), 40);
    const dp = this.dir.mult(dr);
    const dx = dp.x;
    const dy = dp.y;
    this.p5.push();
    this.p5.noStroke();
    const numSteps0 = 10;
    const maxRadius0 = 200;
    for (let i = 0; i < numSteps0; i++) {
      this.p5.fill(80, 255, 223, 255 * i / numSteps0);
      this.p5.circle(this.pos.x, this.pos.y, (numSteps0 - i) / numSteps0 * maxRadius0);
    }
    const numSteps1 = 20;
    const maxRadius1 = 70;
    for (let i = 0; i < numSteps1; i++) {
      this.p5.fill(255, 80, 223, 255 * i / numSteps1);
      this.p5.circle(this.pos.x + dx, this.pos.y + dy, (numSteps1 - i) / numSteps1 * maxRadius1);
    }
    this.p5.pop();
  }

  calc_accel (boids: Array<Boid>, sep: number, ali: number, coh: number) {
    boids = boids.filter(boid => boid !== this);
    const distance = (boid: Boid) => boid.pos.copy().sub(this.pos).mag();
    const nears = boids.filter(boid => distance(boid) < this.range);
    if (nears.length === 0) {
      return this.p5.createVector(0, 0);
    }
    const nearest = nears.reduce((prev, curr) => {
      if (distance(prev) < distance(curr)) return prev;
      else return curr;
    }, nears[0])
    const separation_dir = (this.pos.copy().sub(nearest.pos)).normalize();
    const alignment_dir = (nearest.vel.copy().sub(this.vel)).normalize();
    const average_pos = boids.map((boid) => boid.pos).reduce((prev, curr) => {
      return prev.copy().add(curr);
    }, this.p5.createVector(0, 0)).div(boids.length);
    const cohesion_dir = (average_pos.sub(this.pos)).normalize();
    return separation_dir.mult(sep).add(
      alignment_dir.mult(ali).add(
        cohesion_dir.mult(coh)
      )
    ).normalize();
  }

  calc_wall () {
    const accel = this.p5.createVector(0, 0);
    if (this.pos.x < 0) {
      accel.add(this.p5.createVector(-this.pos.x, 0));
    }
    if (this.pos.x > this.p5.width) {
      accel.add(this.p5.createVector(this.p5.width - this.pos.x, 0));
    }
    if (this.pos.y < 0) {
      accel.add(this.p5.createVector(0, -this.pos.y));
    }
    if (this.pos.y > this.p5.height) {
      accel.add(this.p5.createVector(0, this.p5.height - this.pos.y));
    }
    if (accel.mag() > this.maxWallAccel) {
      accel.normalize();
      accel.mult(this.maxWallAccel);
    }
    return accel;
  }
}

const power = 0.01;
const range = 200;
const numBoids = 12;
let boids: Array<Boid> = [];

export const SketchComponent = (props: {sep: number, ali: number, coh: number}) => {

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < numBoids; i++) {
      const pos = p5.createVector(
        Math.random() * p5.width,
        Math.random() * p5.height
      );
      const vel = p5.createVector(
        2 * (Math.random() - 0.5),
        2 * (Math.random() - 0.5)
      );
      boids.push(new Boid(p5, pos, vel, power, range));
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(0, 9, 23);
    boids.forEach(boid => {
      boid.change_accel(boids, props.sep, props.ali, props.coh)
      boid.move();
      boid.draw();
    })
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <>
      <Sketch
        className={styles.boidCanvas}
        setup={setup}
        draw={draw}
        windowResized={windowResized}
      />
      <div className={styles.over}></div>
    </>
  );
};

export default SketchComponent;