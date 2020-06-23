import { useType, Vector, useChild } from "@hex-engine/2d";
import Base from './Base';

export default function Cube(position: Vector, frictionAir?: number) {
    useType(Cube);
    useChild(() => Base(position, frictionAir));
    useChild(() => Base(position, frictionAir));
    useChild(() => Base(position, frictionAir));
    useChild(() => Base(position, frictionAir));
}