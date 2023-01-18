import ZapClient from "zaproxy";

import * as config from "./config";
import * as utils from "./utils";

type ScanOptions = {
  client: ZapClient;
  startTime: number;
  target: string;
};

export const getActive = async (options: ScanOptions) => {
  const { scan } = await options.client.ascan.scan(options.target);

  const getStatus = async (): Promise<string> => {
    await utils.getSleep(config.getSleepTime());

    const { status } = await options.client.ascan.status(scan);
    if (status.includes("100")) {
      return status;
    }

    return utils.getElapsedTime(options.startTime) <= config.getActiveTime()
      ? getStatus()
      : status;
  };

  await getStatus();

  return options.client.core.alerts(options.target);
};

export const getSpider = async (options: ScanOptions) => {
  const { scan } = await options.client.spider.scan(options.target);

  const getStatus = async (): Promise<string> => {
    await utils.getSleep(config.getSleepTime());

    const { status } = await options.client.spider.status(scan);
    if (status.includes("100")) {
      return status;
    }

    return utils.getElapsedTime(options.startTime) <= config.getSpiderTime()
      ? getStatus()
      : status;
  };

  await getStatus();

  return options.client.spider.results(scan);
};
