document.addEventListener('DOMContentLoaded', function() {
  var openTabBtn = document.getElementById('openTabBtn');

  openTabBtn.addEventListener('click', function() {
    var inputValue = document.getElementById('inputUrl').value;
    var constructedUrl = 'https://grafana.com/docs/agent/next/flow/reference/components/' + inputValue;

    chrome.tabs.create({ url: constructedUrl });
  });
});

