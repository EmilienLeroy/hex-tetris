import { useType, useNewComponent, Geometry, Polygon, Vector, useDraw, Physics, useChild } from "@hex-engine/2d";

export default function WallBottom(width: number, height: number, center: Vector) {
    useType(WallBottom);

    const wallB = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(width, 25)),
            position: new Vector(center.x, height - 8),
        });
    });

    useNewComponent(() => {
        return Physics.Body(wallB, { isStatic: true });
    })

    useDraw((context) => {
        context.fillStyle = "grey";
        wallB.shape.draw(context, "fill");
    });
}