# feature-flags-example

:ledger: Do you know how to use Feature Flags?

## Demo 🎉

<https://piecioshka.github.io/feature-flags-example/>

## Usage

```js
// feature-flags.js
const featureFlags = {
    "enableSecretLink": false
};

export const isFeatureFlagEnabled = (name) => featureFlags[name];
export const getAll = () => featureFlags;
```

```js
// any JavaScript file
...
if (isFeatureFlagEnabled('enableSecretLink')) {
    displaySecretLink();
}
...
```

## Resources

[Article by Martin Fowler](https://www.martinfowler.com/articles/feature-toggles.html)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
