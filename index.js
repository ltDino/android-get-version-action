const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

// versionCode — A positive integer [...] -> https://developer.android.com/studio/publish/versioning
const versionCodeRegexPattern = /(versionCode(?:\s|=)*)(.*)/;
// versionName — A string used as the version number shown to users [...] -> https://developer.android.com/studio/publish/versioning
const versionNameRegexPattern = /(versionName(?:\s|=)*)(.*)/;
const versionCode = ""
const versionName = ""

try {
    const gradlePath = core.getInput('gradlePath');
    console.log(`Gradle Path : ${gradlePath}`);

    fs.readFile( gradlePath, 'utf-8', function( err, data ) {

        versionCode = data.search( versionCodeRegexPattern )
        versionName = data.search( versionNameRegexPattern )

        core.setOutput( "versionCode", versionCode )
        core.setOutput( "versionName", versionName )
        console.log(`Get versionCode : ${versionCode}`);
        console.log(`Get versionName : ${versionName}`);
        
    });
} catch (error) {
  core.setFailed(error.message);
}