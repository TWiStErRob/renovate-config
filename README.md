# renovate-config
Configuration files for renovatebot installed in [repositories](https://github.com/TWiStErRob?tab=repositories).

# Development
IntelliJ IDEA has json-schema validation and auto-complete support, so it the recommended editor.

Each file should have this line as the first one to trigger automatic setup when opening files:
```
"$schema": "https://docs.renovatebot.com/renovate-schema.json",
```

# Documentation
 * How to reference files: https://docs.renovatebot.com/config-presets/#github
 * Default presets: https://docs.renovatebot.com/presets-config/
 * Source of default presets: https://github.com/renovatebot/renovate/blob/main/lib/config/presets/internal/
 * renovatebots' own configuration
   * Base config: https://github.com/renovatebot/.github/blob/main/default.json
   * Onboarding config: https://github.com/renovatebot/.github/blob/main/renovate-config.json
   * Main repo: https://github.com/renovatebot/renovate/blob/main/renovate.json
   * Docs: https://github.com/renovatebot/renovatebot.github.io/blob/main/renovate.json
