browser.contextMenus.create({
  title: 'Open image in new tab',
  contexts: ['image'],
  onclick: (info, tab) => {
    browser.tabs.create({
      active: false,
      index: tab.index + 1,
      url: info.srcUrl,
    }); 
  },
});

browser.browserAction.onClicked.addListener(tab => {
  browser.windows.getCurrent({populate: true}, currentWindow => {
    if (!currentWindow.tabs) {
      return;
    }
    const urls = currentWindow.tabs
      .map(tab => tab.url).join('\n');
    
    const copyTarget = document.createElement('textarea');
    copyTarget.value = urls;
    document.body.appendChild(copyTarget);

    copyTarget.focus();
    copyTarget.select();

    try {
      document.execCommand('copy', false, null);
    } catch (err) {
      alert(err);
    }
    
    document.body.removeChild(copyTarget);
  });
});
