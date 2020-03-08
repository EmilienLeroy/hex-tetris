import { useType, useChild, Vector } from '@hex-engine/2d';
import Wall from './Wall';

export default function Layout(width: number, height: number, center: Vector) {
    useType(Layout);    
    useChild(() => Wall(25, height, new Vector(center.x - width / 2, center.y)));
    useChild(() => Wall(25, height, new Vector(center.x + width / 2, center.y)));
    useChild(() => Wall(width, 25, new Vector(center.x, height - 8)))
}