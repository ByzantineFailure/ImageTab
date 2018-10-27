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
