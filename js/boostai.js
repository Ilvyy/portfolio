var options = {
  chatPanel: {
    header: {
      title: "Coco",
    },
    styling: {},
    messageFeedback: {
      hide: true,
    },
    settings: {
      enableProactivityForSmallDevices: true,
      alwaysFullscreen: false,
    },
  },
};
var boost = window.boostInit("turesearch", options);

function openChat() {
  boost.chatPanel.triggerAction(5281);
  boost.chatPanel.show();
}
