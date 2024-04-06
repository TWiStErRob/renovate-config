# renovate-config
Configuration files for renovatebot installed in [repositories](https://github.com/TWiStErRob?tab=repositories).

## Naming
 * This repository is called `renovate-config` so it'll be [picked up automatically by Renovate](https://docs.renovatebot.com/config-presets/#organization-level-presets).
 * The shared config preset is called `default.json` as that's the [only supported name](https://docs.renovatebot.com/config-presets/).
 * `default.json5` is the actual preset referenced from `default.json`, so that I can use JSON5 features.

# Installation
 1. Add repository to [Renovate GitHub app installation](https://github.com/settings/installations/24636554).
 2. Wait for "Configure Renovate" onboarding PR.
 3. It should automatically pick up [local>TWiStErRob/renovate-config](default.json)
 4. Commit and push to `renovate/configure` branch.
 5. Review, configure as necessary and merge PR.

# Development
IntelliJ IDEA has json-schema validation and auto-complete support, so it the recommended editor.

Each file should have this as the first property to trigger automatic setup when opening files:
```json
{
   "$schema": "https://docs.renovatebot.com/renovate-schema.json"
}
```
## Local Testing
This will pick up `config.js` and will do a dry-run.

```shell
# Make sure the latest version is installed from package.json.
npm install
# Make sure renovate can read the repositories.
set RENOVATE_TOKEN=ghp_...
# Edit config.js as necessary, mostly repositories and configFilePath.
# Set up logging (see config.js for more info, why.)
set LOG_LEVEL=debug
# Execute renovate on any repository (public or private).
npm run renovate > renovate.log
```

<details><summary>ghp_...</summary>

Where `ghp_...` is a Personal Access Token generated at https://github.com/settings/tokens.
 * add `user:email` scope to reduce warnings
 * add `repo` scope for accessing private repositories

   <details><summary><code>--token</code> vs <code>set RENOVATE_TOKEN</code></summary>
   
   It's possible to pass the token on command line too:
   ```shell
   npm run renovate -- --token ghp_...
   ```
   but `npm run` will echo the command line so renovate.log will contain the key. 
   To prevent this, use `set RENOVATE_TOKEN=ghp_...` instead.
   
   </details>

</details>

## Integration Testing
This means running Renovate on a repository where the configuration is hosted in the repository, and the [Renovate app](https://github.com/apps/renovate) will process everything.

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
