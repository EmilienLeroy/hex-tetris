import { useType, useNewComponent, Geometry, Polygon, Vector, Physics, useDraw, Keyboard, useUpdate } from "@hex-engine/2d";

export default function Base(position: Vector) {
    useType(Base);
    const move = new Vector(0, 0);
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
            move.subtractXMutate(10);
        }

        if(keyboard.pressed.has('ArrowRight')) {
            move.addXMutate(10);
        }

        geometry.position.addXMutate(move.x);
    })

    useDraw((context) => {
        
        context.fillStyle = "red";
        geometry.shape.draw(context, 'fill');
    });

    
}