import React from "react";
import { StyleSheet } from 'react-native';
import { StatusBar, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Physics } from "./Systems";
import { Box, Ball } from "./Renderers";
import Matter from "matter-js";

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

const App = (props) => {

  const WALL_WIDTH = 10;
  const BALL_SIZE = 15;
  const SPEED = 10;

  const perfectProperty = {
    friction: 0,
    frictionAir: 0,
    restitution: 1,
    frictionStatic: 0,
    inertia: Infinity
  }
  const staticPerfectProperty = {
    isStatic: true, ...perfectProperty
  }

  const { width, height } = Dimensions.get("window");

  const engine = Matter.Engine.create({enableSleeping: false});
  const world = engine.world;
  engine.gravity.y = 0; // Constante de gravité

  const ball = Matter.Bodies.circle(width / 2, height - (height / 3), BALL_SIZE / 2, perfectProperty);

  Matter.Body.setVelocity(ball, { x: 10, y: -7 })
  Matter.Events.on(engine, 'beforeUpdate', ev => {
    Matter.Body.setVelocity(ball, Matter.Vector.mult(ball.velocity, SPEED / ball.speed))
  })

  const wallRight = Matter.Bodies.rectangle(width - WALL_WIDTH / 2, height / 2, WALL_WIDTH, height, staticPerfectProperty);
  const wallLeft = Matter.Bodies.rectangle(WALL_WIDTH / 2, height / 2, WALL_WIDTH, height, staticPerfectProperty);
  const floor = Matter.Bodies.rectangle(width / 2, height - WALL_WIDTH / 2 - 45, width, WALL_WIDTH, staticPerfectProperty);
  const ceiling = Matter.Bodies.rectangle(width / 2, WALL_WIDTH / 2, width, WALL_WIDTH, staticPerfectProperty);

  const racket = Matter.Bodies.rectangle(width / 2, height - height / 5, width / 5, WALL_WIDTH, staticPerfectProperty);
  Matter.Events.on(engine, 'beforeUpdate', ev => {
    Matter.Body.setPosition(racket, { x: mouse.position.x, y: racket.position.y })
  })

  let bricks = []
  for (let x = 100; x <= width - 100; x += 50) {
    for (let y = 100; y < height - 200; y += 30) {
      let brick = Matter.Bodies.rectangle(x, y, 45, 20, staticPerfectProperty)
      bricks.push(brick)
    }
  }

  Matter.World.add(world, [ball, wallRight, wallLeft, ceiling, floor, racket]);
  //Matter.World.addConstraint(world, constraint);

  return (
    <GameEngine
      systems={[Physics]}
      entities={{
        physics: { engine: engine, world: world },
        ball: { body: ball, size: BALL_SIZE, color: "#f00", renderer: Ball },
        wallRight: { body: wallRight, size: [WALL_WIDTH, height], color: "#000", renderer: Box },
        wallLeft: { body: wallLeft, size: [WALL_WIDTH, height], color: "#000", renderer: Box },
        floor: { body: floor, size: [width, WALL_WIDTH], color: "#000", renderer: Box },
        ceiling: { body: ceiling, size: [width, WALL_WIDTH], color: "#000", renderer: Box },
        racket: {body: racket, size: [width / 5, WALL_WIDTH], color: "#000", renderer: Box}
      }}
    >
      <StatusBar hidden={true} />
    </GameEngine>
  );
};

export default App;

const styles = StyleSheet.create({
  board: {
    borderWidth: 3,
    marginTop: 25
  },
  ball: {
    borderRadius: 50,
    width: 15,
    height: 15,
    backgroundColor: '#f00'
  },
  coords: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  }
});