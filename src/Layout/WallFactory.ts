import { useType, useNewComponent, Polygon, Vector, Physics, useDraw, Geometry } from "@hex-engine/2d"

export default function WallFactory(width: number, height: number, position: Vector) {
    return function Wall() {
        useType(Wall);

        const wall = useNewComponent(() => {
            return Geometry({
                shape: Polygon.rectangle(new Vector(width, height)),
                position,
            });
        });
    
        useNewComponent(() => {
            return Physics.Body(wall, { isStatic: true });
        })
    
        useDraw((context) => {
            context.fillStyle = "grey";
            wall.shape.draw(context, "fill");
        });
    }    
}