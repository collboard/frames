import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Authors } from '../../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../../50-systems/ModuleStore/internalModules';
import { ShapeArt, ShapeName } from '../../../71-arts/50-ShapeArt';
import { TextArt } from '../../../71-arts/50-TextArt';
import { SCALE_PIXELS } from '../../../config';
import { PAPERS } from './config';

import { contributors, description, license, repository, version } from '../package.json';


for (const { name, size } of PAPERS) {
    internalModules.declareModule({
        manifest: {
            name: `Paper${name}Module`,
            title: { en: `Paper ${name}`, cs: `Papír ${name}` },
            categories: ['Template', 'Art', 'Productivity'],

            import { contributors, description, license, repository, version } from '../package.json';
            version,
            description,
            contributors,
            license,
            repository,
        },
        /* eslint-disable no-loop-func */
        async setup(systems) {
            const { exportSystem, virtualArtVersioningSystem } = await systems.request(
                'exportSystem',
                'virtualArtVersioningSystem',
            );
            const sizeInPixels = Vector.scale(size, SCALE_PIXELS.centimeter);
            const color = '#888888'; // TODO: Maybe color from DRAWING_COLORS

            const frame = new ShapeArt(ShapeName.Rectange, color, 1, sizeInPixels.half().scale(-1), sizeInPixels);

            return Registration.join(
                exportSystem.registerFrame(frame),
                virtualArtVersioningSystem
                    .createPrimaryOperation()
                    .newArts(
                        new TextArt(
                            name,
                            color,
                            20,
                            false,
                            false,
                            false,
                            'none',
                            sizeInPixels.half().scale(-1).add({ x: 10, y: 5 }),
                        ),
                        frame,
                    )
                    .persist(/* Note: This is a virtual operation but we want still to keep same API. */),
            );
        },
    });
}
