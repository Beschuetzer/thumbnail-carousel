### Using the workflow
- update the [package.json](package.json) version number
- update the [CHANGELOG](CHANGELOG.md) to document the changes
- add a tag `git tag vX.X.X`
- push the tag and check the workflow called `Publish Package`.  It will likely fail.  If so, check the [npm page](https://www.npmjs.com/package/react-thumbnail-carousel) to verify the version was published.

### Simple way to publish

- run `npm run publish` (username is `beschuetzerman`)

### Configuring .npmrc

- (`https://www.youtube.com/watch?v=XHQi5a0TmMc` around 33 mins)
- cd to home directory (~ for unix-based and c:/users/USER_NAME_HERE)
- make `.npmrc` (`touch` on unix-based and `New-Item` for Powershell)
- run `npm login` (login using your npm username)
- run `npm publish --access public` in project root
- see `https://medium.com/@davidagood/how-to-create-and-publish-a-scoped-npm-package-you-package-from-scratch-30c5802b2df0` for details on converting your npm account to an org and publishing publicly to that
