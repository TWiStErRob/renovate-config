const fs = require('fs');
const configFilePath = "P:\\projects\\workspace\\net.twisterrob.gradle\\.github\\renovate.json";
const configFileText = fs.readFileSync(configFilePath, "utf8");
module.exports = {
	// https://docs.renovatebot.com/self-hosted-configuration/#dryrun
	// values: "extract" (deps), "lookup" (updates), "full" (PRs).
	"dryRun": "full",
	// https://docs.renovatebot.com/self-hosted-configuration/#platform
	"platform": "github",
	// Necessary to allow running `gradle wrapper` commands on my computer.
	// https://docs.renovatebot.com/self-hosted-configuration/#exposeallenv
	"exposeAllEnv": true,

	// Cannot use this because it forcefully logs JSON which is hard to read as a human.
	// Use LOG_LEVEL=debug and LOG_FORMAT= instead and redirect manually to a file.
//	// https://docs.renovatebot.com/self-hosted-configuration/#logfile
//	"logFile": "renovate.log",
//	// https://docs.renovatebot.com/self-hosted-configuration/#logfilelevel
//	"logFileLevel": "debug",
//	// DOES NOTHING: https://docs.renovatebot.com/examples/self-hosting/#logging
//	"logFormat": "text",

	// Command line: --print-config
	// https://docs.renovatebot.com/configuration-options/#printconfig
	"printConfig": true,

	// Command line: last parameter in form of user/repo
	// https://docs.renovatebot.com/self-hosted-configuration/#repositories
	"repositories": [
		{"repository": "TWiStErRob/net.twisterrob.gradle"},
	],

	// Reduce noise:
	// > INFO: Unknown platform, skipping changelog fetching. (repository=TWiStErRob/renovate-config-test)
	// >       "sourceUrl": "https://cs.android.com/androidx/platform/frameworks/support",
	// >       "hostType": null
	// https://docs.renovatebot.com/configuration-options/#fetchreleasenotes
	"fetchReleaseNotes": "off",

	// Renovate cannot run on a specific branch of a specific repo:
	// https://github.com/renovatebot/renovate/discussions/16108
	// Not even with `baseBranches` + `useBaseBranchConfig` as of version 32.190.4.
	// We cannot use "useBaseBranchConfig", because takes a diff of master + branch,
	// which doesn't allow for even basic manipulation of the config (e.g. remove an ignore).
	// https://github.com/renovatebot/renovate/discussions/13036#discussioncomment-1781815
//	// https://docs.renovatebot.com/configuration-options/#basebranches
//	"baseBranches": ["renovate_fix"],
//	// Note: https://github.com/renovatebot/renovate/issues/17635
//	"useBaseBranchConfig": "merge",

	// This ignores the config that's in the repository.
	"requireConfig": "ignored",
	// Wrapping it in force is necessary, because otherwise the `ignorePaths` from the extended base config is used,
	// rather than from the loaded JSON. REPORT this sounds like a bug.
	"force": {
		// This loads a local file instead.
		...JSON.parse(configFileText)
	}
};
