# feature-flags-example

:ledger: Do you know how to use Feature Flags?

## Demo 🎉

<https://piecioshka.github.io/feature-flags-example/>

## Explanation

```js
const featureFlags = {
    "enableSecretLink": false
};

export const isFeatureFlagEnabled = (name) => {
    return featureFlags[name];
};

export const getAll = () => featureFlags;
```

```js
// any-file.js
...
if (isFeatureFlagEnabled('enableSecretLink')) {
    displaySecretLink();
}
...
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
