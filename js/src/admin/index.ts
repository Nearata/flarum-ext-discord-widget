import app from "flarum/admin/app";

app.initializers.add("nearata/discord-widget", () => {
  app.extensionData.for("nearata-discord-widget").registerSetting({
    setting: "nearata-discord-widget.admin.discord-id",
    type: "text",
    label: app.translator.trans("nearata-discord-widget.admin.server_id"),
    help: app.translator.trans("nearata-discord-widget.admin.server_id_help"),
  });
});
