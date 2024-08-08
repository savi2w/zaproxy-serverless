declare module "zaproxy" {
  export default class ZapClient {
    ascan: {
      scan: (target: string) => Promise<{ scan: string }>;
      status: (scan: string) => Promise<{ status: string }>;
    };
    core: {
      alerts: (target: string) => Promise<{ alerts: unknown[] }>;
    };
    spider: {
      results: (scan: string) => Promise<{ results: string[] }>;
      scan: (target: string) => Promise<{ scan: string }>;
      status: (scan: string) => Promise<{ status: string }>;
    };
  }
}
