// const fs = require('fs');
// const file = JSON.parse(fs.readFileSync("default.json", "utf8"));
module.exports = {
	"dryRun": "full",
	"platform": "github",

	// Command line: --print-config
//	"printConfig": true,

	// Command line: last parameter in form of user/repo
//	"repositories": [
//		{"repository": "TWiStErRob/renovate-config-test"},
//	],

	// Reduce noise:
	// > INFO: Unknown platform, skipping changelog fetching. (repository=TWiStErRob/renovate-config-test)
	// >       "sourceUrl": "https://cs.android.com/androidx/platform/frameworks/support",
	// >       "hostType": null
	"fetchReleaseNotes": false,
//	...file
};
