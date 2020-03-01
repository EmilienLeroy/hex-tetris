import WallLeft from './WallLeft';
import WallRight from './WallRight';
import { useType, useChild, Vector } from '@hex-engine/2d';
import WallBottom from './WallBottom';

export default function Layout(width: number, height: number, center: Vector) {
    useType(Layout);

    useChild(() => {
        return WallLeft(width, height, center);
    })

    useChild(() => {
        return WallRight(width, height, center);
    })

    useChild(() => {
        return WallBottom(width, height, center);
    })
}