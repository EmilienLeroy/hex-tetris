import { useType, useNewComponent, Geometry, Polygon, Vector, useDraw, Physics } from "@hex-engine/2d";

export default function Layout(width: number, height: number, position: Vector) {
    useType(Layout);

    const geometry = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(width, height)),
            position,
        });
    });

    useNewComponent(() => {
        return Physics.Body(geometry, { isStatic: true });
    })

    useDraw((context) => {
        context.strokeStyle = "grey";
        context.lineWidth = 25;
        geometry.shape.draw(context, "stroke");
    });
}