const featureFlags = {
    "enableSecretLink": false
};

export const isFeatureFlagEnabled = (name) => {
    return featureFlags[name];
};

export const getAll = () => featureFlags;
