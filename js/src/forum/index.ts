import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';

app.initializers.add('nearata/discord-widget', () => {
  extend(ForumApplication.prototype, 'mount', function () {
    const serverId = this.forum.attribute('nearataDiscordWidgetServerId');

    const elem = document.createElement('div');
    elem.classList.add('nearata-discord-widget');

    const elem1 = document.createElement('i');
    elem1.classList.add('fab', 'fa-discord');

    elem.append(elem1);

    const elem2 = document.createElement('iframe');

    elem2.src = `https://discord.com/widget?id=${serverId}&theme=dark`;
    elem2.width = '300';
    elem2.height = '450';
    elem2.setAttribute('allowtransparency', 'true');
    elem2.setAttribute('frameborder', '0');
    elem2.setAttribute('sandbox', 'allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts');

    const elem3 = document.createElement('div');
    elem3.classList.add('inner');

    elem3.append(elem2);

    elem.append(elem3);

    elem.addEventListener('click', function (e) {
      e.preventDefault();

      elem3.classList.toggle('active');
    });

    document.body.prepend(elem);
  });
});
