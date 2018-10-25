browser.contextMenus.create({
  title: 'Open image in new tab',
  contexts: ['image'],
  onclick: (info, tab) => {
    browser.tabs.create({
      url: info.srcUrl,
    }); 
  },
});
