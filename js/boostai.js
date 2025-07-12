var options = {
  chatPanel: {
    header: {
      title: "Coco",
    },
    styling: {
      avatarShape: "rounded",
      avatarUrl:
        "https://ts3.mm.bing.net/th?id=OIP.LnbIqFPE4dWS11-oWzbBSAHaFB&pid=15.1",
      panelShape: "rounded",
      primaryColor: "#FF4700",
      fontFamily: "arial",
      pace: "slower",
      size: "large",
      chatBubbles: {
        userBackgroundColor: "#FFA988",
        vaBackgroundColor: "#E2D7D3",
      },

      buttons: {
        backgroundColor: "#FF6023",
        hoverBackgroundColor: "#FF8558",
      },
    },
    messageFeedback: {
      hide: true,
    },
    settings: {
      enableProactivityForSmallDevices: true,
      alwaysFullscreen: true,
    },
  },
};
var boost = window.boostInit("turesearch", options);

function openChat() {
  boost.chatPanel.show();
}
