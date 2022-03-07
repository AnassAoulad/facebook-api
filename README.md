## Before to start

:book: NodeJs : 16.14.0

## How to start

1. Clone the repo

```
$ git clone
```

1. Install the modules
```
$ yarn install

or

$ npm install
```

3. Inizialise database
```
# Apply migrationn
$ npx prisma migrate dev

# Create content in database
$ yarn prisma db seed

or

$ npm prisma db seed

```
4. Run the API
```
$ yarn dev

or

$ npm run dev
```
