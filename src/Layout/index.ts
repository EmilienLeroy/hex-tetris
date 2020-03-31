import { useType, useChild, Vector } from '@hex-engine/2d';
import Floor from './Floor';

export default function Layout(width: number, height: number, center: Vector) {
    useType(Layout);    
    useChild(() => Floor(width, 25, new Vector(center.x, height - 8)));
}