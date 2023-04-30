import ZapClient from "zaproxy";

import * as proxy from "./proxy";
import * as scanner from "./scanner";

/**
 * In order to everything work you should
 * also define the ZAP-API-Key in the ZapClient
 */

export const handler = async () => {
  const options = {
    client: new ZapClient(),
    startTime: Date.now(),
    target: "https://my-target.com",
  };

  await proxy.getStart();
  await scanner.getSpider(options);

  return scanner.getActive(options);
};
