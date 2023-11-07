### Configuring .npmrc

- (`https://www.youtube.com/watch?v=XHQi5a0TmMc` around 33 mins)
- cd to home directory (~ for unix-based and c:/users/USER_NAME_HERE)
- make `.npmrc` (`touch` on unix-based and `New-Item` for Powershell)
- create an access token in github account for this package (`https://github.com/settings/tokens/new` => `Tokens(classic)` with `write:packages` permission)
- configure `.npmrc`:
    ```
    registry=https://registry.npmjs.org/
    @GIT_ORG_NAME_HERE:registery=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
    ```
- run `npm adduser` (use a username from the org)
- run `npm publish --access public` in project root
- see `https://medium.com/@davidagood/how-to-create-and-publish-a-scoped-npm-package-you-package-from-scratch-30c5802b2df0` for details on converting your npm account to an org and publishing publicly to that