const featureFlags = {
    'secretLink': true,
    'specialFeature': true,
    'modernToast': false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => featureFlags[name] = status;
export const getAll = () => featureFlags;
