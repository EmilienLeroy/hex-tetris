import { 
    useType,
    useNewComponent, 
    Geometry, 
    Polygon, 
    Vector, 
    Physics, 
    useDraw, 
    Keyboard, 
    useUpdate 
} from "@hex-engine/2d";

export default function Base(position: Vector, frictionAir: number = 1) {
    useType(Base);
    let color: string = 'red';
    let isOnFloor: boolean = false;
    const move = new Vector(0, 0);
    const geometry = useNewComponent(() => {
        return Geometry({
            shape: Polygon.rectangle(new Vector(50,50)),
            position
        });
    });

    const keyboard = useNewComponent(Keyboard);

    const physic = useNewComponent(() => {
        return Physics.Body(geometry, { frictionAir });
    });

    physic.onCollision((other) => {
        color = 'blue';
        if(other.entity) {
            isOnFloor = true;
        }
    })

    useUpdate(() => {
        if(keyboard.pressed.has('ArrowLeft') && !isOnFloor) {
            move.subtractXMutate(50);
        }

        if(keyboard.pressed.has('ArrowRight') && !isOnFloor) {
            move.addXMutate(50);
        }

        geometry.position.addXMutate(move.x);
    })

    useDraw((context) => {
        context.fillStyle = color;
        geometry.shape.draw(context, 'fill');
    });

    
}