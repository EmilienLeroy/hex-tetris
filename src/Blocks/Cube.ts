import { useType, Vector, useChild, Physics } from "@hex-engine/2d";
import Base from './Base';

export default function Cube(position: Vector, frictionAir?: number) {
    useType(Cube);

    const base1 = useChild(() => Base(position.add(new Vector(25,25)), frictionAir));
    const base2 = useChild(() => Base(position.add(new Vector(-25,-25)), frictionAir));
    useChild(() => Base(position.add(new Vector(25,-25)), frictionAir));
    useChild(() => Base(position.add(new Vector(-25,25)), frictionAir));
    const constrainte = Physics.Constraint({
	    bodyA: base1.rootComponent.physic.body,
	    bodyB: base2.rootComponent.physic.body,
	    pointA: position,
	    pointB: position,
	    damping: 0.2, 
	    stiffness: 1.2
    })
}
