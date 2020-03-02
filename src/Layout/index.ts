import { useType, useChild, Vector } from '@hex-engine/2d';
import WallFactory from './WallFactory';

export default function Layout(width: number, height: number, center: Vector) {
    useType(Layout);

    const wallLeft = WallFactory(25, height, new Vector(center.x - width / 2, center.y));
    const wallRight = WallFactory(25, height, new Vector(center.x + width / 2, center.y));
    const wallBottom = WallFactory(width, 25, new Vector(center.x, height - 8));
    
    useChild(() => wallLeft());
    useChild(() => wallRight());
    useChild(() => wallBottom())
}