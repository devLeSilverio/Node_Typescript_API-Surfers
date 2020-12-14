import * as path from 'path';
import moduleAlias from 'module-alias';

//dirname-->onde estamos/depois volta 2 pastas e importa os arquivos
//resolve--busca o diretorio que queremos
const files = path.resolve(__dirname, '_/_');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
