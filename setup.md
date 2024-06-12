# Setup

Steps followed for the initial setup with Expo CLI.

Create a blank project with Expo CLI.

``` bash
npx create-expo-app@latest aora-rn --template blank@latest
```

CD into the created project and run the following command to install the dependencies.

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

On `package.json` modify the `"main"` entry point (was `"main": "expo/AppEntry.js"`):

``` json
{
  "main": "expo-router/entry"
}
```

Create `app` directory and `_layout.jsx` inside of it. For now, copy the contents of `App.js` into `_layout.jsx` and remove `App.js` from the root directory.

Deep Link scheme on `app.json` by adding the following line. This is used to deep link Expo and React Native applications.

``` json
{
  "scheme": "aora-rn"
}
```
