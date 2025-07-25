var options = {
  chatPanel: {
    header: {
      title: "Coco",
    },
    styling: {
      avatarShape: "rounded",
      avatarUrl:
        "docs/assets/images/Mental_health_bloem1.png",
      primaryColor: "#A98AB0",
      chatBubbles:{
        userBackgroundColor: "#C6E9EA",
      },
      buttons:{
        backgroundColor: "#6C6D6D",
      }

    },
    messageFeedback: {
      hide: true,
    },
    settings: {
      requestFeedback: false,
      startTriggerActionId: 5281,
      authStartTriggerActionId: 5281,
      enableProactivityForSmallDevices: true,
      alwaysFullscreen: false,
    },
  },
};
var boost = window.boostInit("turesearch", options);

function openChat() {
  boost.chatPanel.show();
}
