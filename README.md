See: https://github.com/Shopify/react-native-skia/issues/3060

# Reproducing the problem

1. Install node v18.20.4 (or later version, probably not relevant) and yarn.

2. `yarn install`

3. `node index.js`

4. Get the following error

```
Error: TypeError: Cannot read properties of undefined (reading 'value')
    at Object.toWireType (<snip>/headless-rn-skia/node_modules/canvaskit-wasm/bin/full/canvaskit.js:230:506)
    at Object.write (<snip>/headless-rn-skia/node_modules/canvaskit-wasm/bin/full/canvaskit.js:223:383)
    at Object.toWireType (<snip>/headless-rn-skia/node_modules/canvaskit-wasm/bin/full/canvaskit.js:224:135)
    at Object._MakeImage (<snip>/headless-rn-skia/node_modules/canvaskit-wasm/bin/full/canvaskit.js:186:8)
    at a.MakeImage (<snip>/headless-rn-skia/node_modules/canvaskit-wasm/bin/full/canvaskit.js:66:125)
    at JsiSkImageFactory.MakeImage (<snip>/headless-rn-skia/node_modules/@shopify/react-native-skia/lib/commonjs/skia/web/JsiSkImageFactory.js:57:34)
    at file://<snip>/headless-rn-skia/index.js:17:34
```

# Notes

- Ideally this could be run even without React installed (it's supposed to be headless, and my use case doesn't need the JSX rendering...) but I had some trouble.
