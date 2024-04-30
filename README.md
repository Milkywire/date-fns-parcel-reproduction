# Reproduction of date-fns & parcel issue building and running typescript code

## Working example

To showcase working example in plain javascript do the following:

1. In `index.html` uncomment script `./formatImport.js` alone
2. Run `npm run start`
3. Go to [localhost:8080](http://localhost:8080)
4. Dev server works perfectly
5. Run `npm run build`
6. Run `npm run start:prod`
7. Go to [localhost:8080](http://localhost:8080)
8. Prod server works perfectly

## Reproduce issue

To reproduce the issue do the following:

1. In `index.html` uncomment script `./formatImport.ts` alone
2. Run `npm run start`
3. Go to [localhost:8080](http://localhost:8080)
4. Dev server throws error runtime
5. Run `npm run build`
6. Build fails with error
7. In `index.html` uncomment script `./formatImportDate.ts` alone
8. Run `npm run start`
9. Go to [localhost:8080](http://localhost:8080)
10. Dev server throws error runtime
11. Run `npm run build`
12. Run `npm run start:prod`
13. Go to [localhost:8080](http://localhost:8080)
14. Prod server works perfectly
