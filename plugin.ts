// ${projectRoot}/plugin.ts

import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    // eslint-disable-next-line no-sparse-arrays
    // $('body').append([
    //   '<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=YejPRoMWOl5OUBKZsCd1pA2p00jHEvXirjU1HBPkY_o"></script>',
    //   ,
    //   '<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=YejPRoMWOl5OUBKZsCd1pA2p00jHEvXirjU1HBPkY_o&cl=ffffff&w=a"></script>'
    // ]);
    return $;
  });
};
