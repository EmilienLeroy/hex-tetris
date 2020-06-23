import { useType, useChild, Vector } from '@hex-engine/2d';
import Floor from './Floor';
import Wall from './Wall';

export default function Layout(width: number, height: number, center: Vector) {
    useType(Layout);    
    useChild(() => Floor(width, 25, new Vector(center.x, height - 8)));
    useChild(() => Wall(height, new Vector(center.x - 400, (height / 2) + 5)))
    useChild(() => Wall(height, new Vector(center.x + 400, (height / 2) + 5)))
}