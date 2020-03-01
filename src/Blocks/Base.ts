import { useType, useNewComponent, Geometry, Polygon, Vector, Physics, useDraw } from "@hex-engine/2d";

export default function Base(position: Vector) {
    useType(Base);

    const geometry = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(50,50)),
            position,
        });
    });

    useNewComponent(() => {
        return Physics.Body(geometry);
    });

    useDraw((context) => {
        context.fillStyle = "red";
        geometry.shape.draw(context, 'fill');
    })
}