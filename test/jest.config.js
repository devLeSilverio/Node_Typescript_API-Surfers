const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

//sobrescrevendo chaves
module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    //roda antes de rodar os testes
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    //entra na pasta pega todos os arquivos e entra em todos que tiverem .ts
    testMatch: ['<rootDir>/test/**/*.test.ts'],
  },
};
