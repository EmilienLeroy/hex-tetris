import { useType, useNewComponent, Geometry, Polygon, Vector, useDraw, Physics, useChild } from "@hex-engine/2d";

export default function WallRight(width: number, height: number, center: Vector) {
    useType(WallRight);

    const wallR = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(25, height)),
            position: new Vector(center.x + width / 2, center.y),
        });
    });

    useNewComponent(() => {
        return Physics.Body(wallR, { isStatic: true });
    })

    useDraw((context) => {
        context.fillStyle = "grey";
        wallR.shape.draw(context, "fill");
    });

    useDraw((context) => {
        context.fillStyle = "grey";
        wallR.shape.draw(context, "fill");
    });
}