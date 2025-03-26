import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb.js";
import { AlphaType, ColorType } from "@shopify/react-native-skia/lib/commonjs/skia/types/index.js";
import { getSkiaExports } from "@shopify/react-native-skia/lib/commonjs/headless/index.js";

(async () => {
    try {
        await LoadSkiaWeb();
        const { Skia } = getSkiaExports();
        
        // Create a simple 2x2 grayscale image with some test data
        const WIDTH = 2;
        const HEIGHT = 2;
        const BYTES_PER_PIXEL = 1;
        const BYTES_PER_ROW = BYTES_PER_PIXEL * WIDTH;
        const testData = new Uint8Array([0, 255, 255, 0]);
        
        const image = Skia.Image.MakeImage(
            {
                alphaType: AlphaType.Opaque,
                // XXX: at runtime, this is 14
                // but CanvasKit.ColorType.Gray_8 is 13
                colorType: ColorType.Gray_8,
                height: HEIGHT,
                width: WIDTH,
            },
            Skia.Data.fromBytes(testData),
            BYTES_PER_ROW
        );

        // Verify the image was created successfully
        if (image) {
            console.log('Successfully created Skia image!');
            console.log('Image dimensions:', image.width(), 'x', image.height());
        } else {
            console.error('Failed to create Skia image');
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();