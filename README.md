See: https://github.com/Shopify/react-native-skia/issues/3060

# Reproducing the problem

1. Install node v18.20.4 (or later version, probably not relevant) and yarn.

2. `yarn install`

3. `node index.js`

4. Get the following error

```
Error: Error: Enum ColorType does not have value 14 on React Native Web
    at getEnum (<snip>/headless-rn-skia/node_modules/@shopify/react-native-skia/lib/commonjs/skia/web/Host.js:49:11)
    at JsiSkImageFactory.MakeImage (<snip>/headless-rn-skia/node_modules/@shopify/react-native-skia/lib/commonjs/skia/web/JsiSkImageFactory.js:60:36)
    at file://<snip>/headless-rn-skia/index.js:17:34
```

# Notes

- Ideally this could be run even without React installed (it's supposed to be headless, and my use case doesn't need the JSX rendering...) but I had some trouble.
