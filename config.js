const fs = require('fs');
module.exports = {
	// https://docs.renovatebot.com/self-hosted-configuration/#dryrun
	// values: "extract" (deps), "lookup" (updates), "full" (PRs).
	"dryRun": "full",
	// https://docs.renovatebot.com/self-hosted-configuration/#platform
	"platform": "github",

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
	"fetchReleaseNotes": false,

	// Cannot use "useBaseBranchConfig" because takes a diff of master + branch,
	// which doesn't allow for even basic manipulation of the config (e.g. remove an ignore).
//	// https://github.com/renovatebot/renovate/discussions/13036#discussioncomment-1781815
//	// https://docs.renovatebot.com/configuration-options/#basebranches
//	"baseBranches": ["renovate_fix"],
//	// Note: https://github.com/renovatebot/renovate/issues/17635
//	"useBaseBranchConfig": "merge",
	// This ignores what's in the repository and uses the file we loaded instead.
	"requireConfig": "ignored",
	...JSON.parse(fs.readFileSync("P:\\projects\\workspace\\net.twisterrob.gradle\\.github\\renovate.json", "utf8"))
};
