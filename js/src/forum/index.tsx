import { extend } from "flarum/common/extend";
import ForumApplication from "flarum/forum/ForumApplication";
import app from "flarum/forum/app";

app.initializers.add("nearata/discord-widget", () => {
  extend(ForumApplication.prototype, "mount", function () {
    const serverId = this.forum.attribute("nearataDiscordWidgetServerId");

    const element = document.createElement("div");

    document.body.appendChild(element);

    m.mount(element, {
      oninit: () => {
        this.active = false;
      },
      view: () => {
        return (
          <div
            class="nearata-discord-widget"
            onclick={(e: any) => (this.active = !this.active)}
          >
            <i class="fab fa-discord"></i>
            <div class={`inner ${this.active ? "active" : ""}`}>
              <iframe
                src={`https://discord.com/widget?id=${serverId}&theme=dark`}
                width="300"
                height="450"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </div>
        );
      },
    });
  });
});
