import { useType, useNewComponent, Geometry, Polygon, Vector, useDraw, Physics, useChild } from "@hex-engine/2d";

export default function WallLeft(width: number, height: number, center: Vector) {
    useType(WallLeft);

    const wallL = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(25, height)),
            position: new Vector(center.x - width / 2, center.y),
        });
    });

    useNewComponent(() => {
        return Physics.Body(wallL, { isStatic: true });
    })

    useDraw((context) => {
        context.fillStyle = "grey";
        wallL.shape.draw(context, "fill");
    });
}