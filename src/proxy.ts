import { spawn } from "child_process";

const getJavaBinary = () =>
  "/opt/lib/jvm/java-1.8.0-openjdk-1.8.0.265.b01-1.lambda2.0.1.x86_64/jre/bin/java";

const getProxyOptions = () => [
  "-Xmx1G",
  "-jar",
  "/opt/zap-2.9.0.jar",
  "-config",
  "api.key=Xi",
  "-daemon",
  "-dir",
  "/tmp/zaproxy",
  "-installdir",
  "/opt",
  "-newsession",
  "/tmp/zaproxy/newsession",
];

export const getStart = (): Promise<string> =>
  new Promise((resolve, reject) => {
    const proxy = spawn(getJavaBinary(), getProxyOptions(), {
      detached: true,
    });

    proxy.stderr.on("data", (data: Buffer) => reject(data.toString()));
    proxy.stdout.on("data", (data: Buffer) =>
      data.toString().includes("is now listening on")
        ? resolve(data.toString())
        : data
    );
  });
