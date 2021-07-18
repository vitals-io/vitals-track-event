# Vitals-track-events

Library with helpers functrion for trasck and register events and error on Backend and sentry both.

## Init sentry

Class constructuror:

1. Need a Sentry key for start event tracking
2. Vitals installation option (scope)

### Publish

NB: Nel file "tsconfig.json" è stata aggiunta la seguente proprietà per fare generare eventuali Types mancanti:

```json
{
  "emitDeclarationOnly": false,
  "declaration": true
}
```

NB: Nel file "package.json" per librerie NodeJs è stato necessario specificare quanto segue (per poterr pubblicare la cartella dist):

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "directories": {
    "dist": "./dist"
  }
}
```

**Action per pubblicazione:**
npx np or npm publish for publish a package update.
