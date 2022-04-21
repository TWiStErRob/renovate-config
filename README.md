# renovate-config
Configuration files for renovatebot installed in [repositories](https://github.com/TWiStErRob?tab=repositories).

## Naming
Note: this repository is called `renovate-config` so it'll be [picked up automatically by Renovate](https://docs.renovatebot.com/config-presets/#organization-level-presets).

# Installation
 1. Add repository to [Renovate GitHub app installation](https://github.com/settings/installations/24636554).
 2. Wait for "Configure Renovate" onboarding PR.
 3. It should automatically pick up [local>TWiStErRob/renovate-config](default.json)
 4. Move `/renovate.json` to `/.github/renovate.json`.
 5. Commit and push to `renovate/configure` branch.
 6. Review, configure as necessary and merge PR.

# Development
IntelliJ IDEA has json-schema validation and auto-complete support, so it the recommended editor.

Each file should have this line as the first one to trigger automatic setup when opening files:
```json
"$schema": "https://docs.renovatebot.com/renovate-schema.json",
```
## Local Testing
```shell
npm install
npm run renovate
```

## Integration Testing
Hack around in [renovate-config-test](https://github.com/TWiStErRob/renovate-config-test).

# Documentation
 * [How to reference files](https://docs.renovatebot.com/config-presets/#github)
 * [Doc of default presets](https://docs.renovatebot.com/presets-config/)
 * [Source of default presets](https://github.com/renovatebot/renovate/blob/main/lib/config/presets/internal/)
 * renovatebots' own configuration
   * Base config: [renovatebot/.github/default.json](https://github.com/renovatebot/.github/blob/main/default.json)
   * Onboarding config: [renovatebot/.github/renovate-config.json](https://github.com/renovatebot/.github/blob/main/renovate-config.json)
   * Main repo: [renovatebot/renovate/renovate.json](https://github.com/renovatebot/renovate/blob/main/renovate.json)
   * Docs: [renovatebot/renovate.github.io/renovate.json](https://github.com/renovatebot/renovatebot.github.io/blob/main/renovate.json)
