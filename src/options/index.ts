const initialValue = `[
  {
    "baseUrl": "https://example.kibe.la",
    "color": "#ccc"
  }
]`;

const load = () => {
  const configElement = <HTMLTextAreaElement>(
    document.querySelector(".js-config")
  );
  chrome.storage.local.get("config").then(({ config }) => {
    if (config) {
      configElement.value = config;
    }
  });
  if (!configElement.value) {
    configElement.value = initialValue;
  }
  const button = document.querySelector(".js-save");
  const messageElement = <HTMLDivElement>document.querySelector(".js-message");
  button?.addEventListener("click", () => {
    try {
      const config = configElement.value;
      if (!config) {
        throw new Error("Require config");
      }
      chrome.storage.local.set({ config }).then(() => {
        messageElement.textContent = "Saved!";
        messageElement.classList.remove("message--failure");
        messageElement.classList.add("message--success");
        messageElement.classList.remove("hidden");
        configElement.value = config;
      });
    } catch {
      messageElement.textContent = "Fail to save!";
      messageElement.classList.remove("message--success");
      messageElement.classList.add("message--failure");
      messageElement.classList.remove("hidden");
    }
  });
};

load();
