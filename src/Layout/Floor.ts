import { useType, useNewComponent, Polygon, Vector, Physics, useDraw, Geometry } from "@hex-engine/2d"

export default function Floor(width: number, height: number, position: Vector) {
    useType(Floor);
    const floor = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(width, height)),
            position,
        });
    });

    useNewComponent(() => {
        return Physics.Body(floor, { isStatic: true });
    })

    useDraw((context) => {
        context.fillStyle = "grey";
        floor.shape.draw(context, "fill");
    });
}    
