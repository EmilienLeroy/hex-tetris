import { useType, useNewComponent, Geometry, Polygon, Vector, Physics, useDraw, Keyboard, useUpdate } from "@hex-engine/2d";

export default function Base(position: Vector) {
    useType(Base);

    const geometry = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(50,50)),
            position
        });
    });

    const keyboard = useNewComponent(Keyboard);

    useNewComponent(() => {
        return Physics.Body(geometry);
    });

    useUpdate(() => {
 
        if(keyboard.pressed.has('ArrowLeft')) {
            geometry.position.x = geometry.position.x - 10
        }
    })

    useDraw((context) => {
        context.fillStyle = "red";
        geometry.shape.draw(context, 'fill');
    });

    
}