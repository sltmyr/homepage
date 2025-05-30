# Personal homepage

My simple homepage at [sultemeyer.com](https://sultemeyer.com). Built with Astro, deployed to github pages.

## Deployment

1. `pnpm build`
2. `mv dist docs`, the github pages source folder has to be called docs
3. `echo "sultemeyer.com" >> docs/CNAME`
4. `git push`, site is served from `docs` folder on main branch
