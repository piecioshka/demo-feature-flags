const featureFlags = {
    "enableSecretLink": true
};

export const isFeatureFlagEnabled = (name) => featureFlags[name];
export const getAll = () => featureFlags;
