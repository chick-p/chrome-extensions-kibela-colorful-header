type Config = {
  baseUrl: string;
  color: string;
};
{
  const restoreConfig = () => {
    const key = "config";
    return new Promise<string>((resolve) => {
      chrome.storage.local.get(key, (items) => {
        const config = items[key];
        if (config) {
          resolve(items[key]);
        }
      });
    });
  };
  (async () => {
    const header = document.querySelector<HTMLDivElement>(".headerNavigation");
    if (header) {
      const configStr: string = await restoreConfig();
      const config: Array<Config> = JSON.parse(configStr);
      const c = config.find((c: Config) =>
        window.location.origin.startsWith(c.baseUrl),
      );
      if (c) {
        header.style.backgroundColor = c.color;
      }
    }
  })();
}
