# demo-feature-flags

🚁 Do you know how to use Feature Flags?

## Demo 🎉

<https://piecioshka.github.io/demo-feature-flags/>

## Usage

```js
// feature-flags.js
const featureFlags = {
  secretLink: true,
  specialFeature: true,
  modernToast: false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
```

```js
// any JavaScript file
...
if (isFeatureEnabled('secretLink')) {
    displaySecretLink();
}
...
```

## Resources

[Article by Martin Fowler](https://www.martinfowler.com/articles/feature-toggles.html)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
