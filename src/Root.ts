import {
  useType,
  useNewComponent,
  useChild,
  Canvas,
  Physics,
  Vector,
} from "@hex-engine/2d";
import Layout from './Layout';
import Base from './Blocks/Base';

export default function Root() {
  useType(Root);

  const canvas = useNewComponent(() => Canvas({ backgroundColor: "white" }));
  const physic = useNewComponent(() =>  Physics.Engine({gravity: new Vector(0, 0.1)}));

  canvas.fullscreen({ pixelZoom: 0.5 });

  const canvasCenter = new Vector(
    canvas.element.width / 2,
    canvas.element.height / 2
  );

  useChild(() => {
    return Layout(
      canvas.element.width / 3.5, 
      canvas.element.height - 10,
      canvasCenter,
    );
  });

  useChild(() => {
    return Base(
      new Vector(
        canvas.element.width / 2,
        10,
      ),
    )
  })
}
