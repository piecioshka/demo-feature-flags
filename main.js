function createSecretLink() {
    const $link = document.createElement('a');
    $link.textContent = 'Secret Link';
    $link.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    return $link
}

function displaySecretLink() {
    const $link = createSecretLink();
    document.body.append($link);
}

function displayAllFeatureFlags(flags) {
    const $pre = document.createElement('pre');
    $pre.style.background = '#eee';
    $pre.textContent = JSON.stringify(flags, null, 4);
    document.body.append($pre);
}

async function main() {
    const { isFeatureFlagEnabled, getAll } = await import('./feature-flags.js');

    displayAllFeatureFlags(getAll());

    if (isFeatureFlagEnabled('enableSecretLink')) {
        displaySecretLink();
    }
}

main();
