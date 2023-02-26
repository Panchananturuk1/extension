chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const pageContent = document.body.innerText;
      navigator.clipboard.writeText(pageContent);
    }
  });
});
