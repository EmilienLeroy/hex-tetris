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
        if(other.entity && other.entity.name == 'Floor') {
            isOnFloor = true;
        }
    })

    useUpdate(() => {
	const y = physic.body.velocity.y;

        if(keyboard.pressed.has('ArrowLeft') && !isOnFloor) {   
            physic.setVelocity(new Vector(-10, y));
        }

        if(keyboard.pressed.has('ArrowRight') && !isOnFloor) {
            physic.setVelocity(new Vector(10, y));
        }

    })

    useDraw((context) => {
        context.fillStyle = color;
        geometry.shape.draw(context, 'fill');
    });

    
}
