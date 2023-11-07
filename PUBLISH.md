### Configuring .npmrc

- (`https://www.youtube.com/watch?v=XHQi5a0TmMc` around 33 mins)
- cd to home directory (~ for unix-based and c:/users/USER_NAME_HERE)
- make `.npmrc` (`touch` on unix-based and `New-Item` for Powershell)
- run `npm login` (login using your npm username)
- run `npm publish --access public` in project root
- see `https://medium.com/@davidagood/how-to-create-and-publish-a-scoped-npm-package-you-package-from-scratch-30c5802b2df0` for details on converting your npm account to an org and publishing publicly to that