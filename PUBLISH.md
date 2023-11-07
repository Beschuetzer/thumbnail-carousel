### Configuring .npmrc

- (`https://www.youtube.com/watch?v=XHQi5a0TmMc` around 33 mins)
- cd to home directory (~ for unix-based and c:/users/USER_NAME_HERE)
- make `.npmrc` (`touch` on unix-based and `New-Item` for Powershell)
- create an access token in github account for this package (`https://github.com/settings/tokens/new` => `Tokens(classic)` with `write:packages` permission)
- configure `.npmrc`:
    ```
    registry=https://registry.npmjs.org/
    @GIT_USERNAME_HERE:registery=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
    ```
- run `npm publish --access public` in project root