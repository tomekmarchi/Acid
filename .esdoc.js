{
  "source": "./source",
  "destination": "./docs",
  "includes": ["\\.(js)$"],
  "excludes": ["\\.config\\.(js)$"],
  "access": ["public"],
  "autoPrivate": true,
  "unexportIdentifier": false,
  "undocumentIdentifier": true,
  "builtinExternal": true,
  "index": "./README.md",
  "package": "./package.json",
  "coverage": true,
  "includeSource": true,
  "test": {
    "type": "mocha",
    "source": "./test",
    "includes": ["Test\\.(js|es6)$"],
    "excludes": ["\\.config\\.(js|es6)$"]
  },
  "title": "Sentivate",
  "scripts": ["./source"],
  "plugins": [
    {"name": "plugin-name-or-file-path", "option": null}
  ],
  "manual": {
    "globalIndex": true,
    "index": "./docs/manual/index.md",
    "asset": "./docs/manual/asset",
    "overview": ["./docs/manual/overview.md"],
    "design": ["./docs/manual/design.md"],
    "installation": ["./docs/manual/installation.md"],
    "usage": ["./docs/manual/usage.md"],
    "tutorial": ["./docs/manual/tutorial.md"],
    "configuration": ["./docs/manual/configuration.md"],
    "example": ["./docs/manual/example.md"],
    "advanced": ["./docs/manual/advanced.md"],
    "faq": ["./docs/manual/faq.md"],
  },
  "lint": true,
  "experimentalProposal": {
    "classProperties": true,
    "objectRestSpread": true,
    "decorators": true,
    "doExpressions": true,
    "functionBind": true,
    "asyncGenerators": true,
    "exportExtensions": true,
    "dynamicImport": true
  }
}
