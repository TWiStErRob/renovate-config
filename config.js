// const fs = require('fs');
// const file = JSON.parse(fs.readFileSync("default.json", "utf8"));
module.exports = {
	// https://docs.renovatebot.com/self-hosted-configuration/#dryrun
	// values: "extract" (deps), "lookup" (updates), "full" (PRs).
	"dryRun": "full",
	// https://docs.renovatebot.com/self-hosted-configuration/#platform
	"platform": "github",

	// https://docs.renovatebot.com/self-hosted-configuration/#logfile
	"logFile": "renovate.log",
	// https://docs.renovatebot.com/self-hosted-configuration/#logfilelevel
	"logFileLevel": "debug",

	// Command line: --print-config
	// https://docs.renovatebot.com/configuration-options/#printconfig
	"printConfig": true,

	// https://github.com/renovatebot/renovate/discussions/13036#discussioncomment-1781815
	// https://docs.renovatebot.com/configuration-options/#basebranches
	"baseBranches": ["renovate_fix"],
	// Note: https://github.com/renovatebot/renovate/issues/17635
	"useBaseBranchConfig": "merge",

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
//	...file
};
