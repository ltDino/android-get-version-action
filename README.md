# android-get-version-action
## How to create JavaScript github-action project like this

https://docs.github.com/cn/actions/creating-actions/creating-a-javascript-action

## Inputs

## `gradlePath`

**Required** Default `"app/build.gradle"`.

## Outputs

## `versionCode`

The versionCode we greeted you.

## `versionName`

The versionName we greeted you.

## Example usage
```
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Get Android version
        id: test
        uses: ltDino/android-get-version-action@v1.0
        with:
          gradlePath: app/build.gradle # or app/build.gradle.kts 
      - name: Get the output
        run: |
          echo "The versionCode was ${{ steps.test.outputs.versionCode }}"
          echo "The versionName was ${{ steps.test.outputs.versionName }}"
```
