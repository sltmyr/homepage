## personal homepage

My simple homepage at [sultemeyer.com](https://sultemeyer.com). Built with gatsby, deployed to github pages.

#### Deployment

1. `gatsby build`
2. `mv public docs`, the github pages source folder has to be called docs
3. `echo "sultemeyer.com" >> docs/CNAME`
4. `git push`, site is served from `docs` folder on master branch
