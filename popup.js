document.getElementById("copy-button").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        const pageContent = document.body.innerText;
        navigator.clipboard.writeText(pageContent);
      }
    });
  });
});
