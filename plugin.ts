// ${projectRoot}/plugin.ts

import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('body').append([
      '<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=YejPRoMWOl5OUBKZsCd1pA2p00jHEvXirjU1HBPkY_o"></script>',
    ]);
    return $;
  });
};
