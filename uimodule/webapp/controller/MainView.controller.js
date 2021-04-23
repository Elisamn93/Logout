sap.ui.define(["com/myorg/LogApp/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.myorg.LogApp.controller.MainView", {
      onLogout: function () {
      //sap.m.URLHelper.redirect("/logout.html", false);
      //window.location.replace('/do/logout');
      window.location.href = '/logout';
    },
     onLogout2: function () {
      //sap.m.URLHelper.redirect("/logout.html", false);
      //window.location.replace('/do/logout');
      window.location.replace('/logout');
		}
    });
});
