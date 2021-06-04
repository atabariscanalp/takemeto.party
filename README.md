<a href="https://takemeto.party"><p align="center">
<img height=100 src="./assets/takemeto-party.svg"/>

</p></a>
<p align="center">
  <strong>Reveal your inner DJ 🎧</strong>
</p>

<h3 align="center">
  <a href="https://github.com/atabariscanalp/takemeto.party/blob/dev/CONTRIBUTING.md">Contribute</a>
</h3>

---

## Branches

- dev -> pr this branch for everything
- prod -> don't touch, this is what's running in prod

## Contributions

Takemeto.party is open to contributions, but I recommend creating an issue or replying in a comment to let me know what you are working on first that way we don't overwrite each other.

Please read [CONTRIBUTING.md](https://github.com/atabariscanalp/takemeto.party/blob/dev/CONTRIBUTING.md) for details on this project.

## Code of Conduct

Please read [CODE_OF_CONDUCT.md](https://github.com/atabariscanalp/takemeto.party/blob/dev/CODE_OF_CONDUCT.md) for details on our code of conduct.

## How to run locally

> **NOTE:** Right now I don't know what to do with env variables like GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET, so for a short time use your own variables. I'll take care of it in a short time.


First clone the project to a local directory.

>For front end next app
```
cd paris
```
Install packages
```
yarn install
```
To start the server
```
yarn dev
```

>For back end express app
```
cd berlin
```
Install packages
```
npm install
```
Create your .env file and enter your Google oauth api credentials
```
touch .env
```
```
DATABASE_URL=your_postgres_database_url
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```
Run the back end server
```
npm run dev
```

## Attribution

For logo we use <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
