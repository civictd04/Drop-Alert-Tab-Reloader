fetch(
  'https://discordapp.com/api/webhooks/779141615545352212/aAUvAgC_sIqWGnrF4TwgfP2efUtWmhPmOsWETKLPByfj5uhWyS2vNrMx0aBn4-flGs-y',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Chuckles the Drop Bot',
      avatar_url:
        'https://pbs.twimg.com/profile_images/79570313/addictionsmall_400x400.jpg',
      content:
        'Hey @everyone:',
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      embeds: [
        {
          color: 11730954,
          author: {
            name: 'Chuckles the Drop Bot',
            url: 'https://twitter.com/civictd04',
            icon_url: 'https://pbs.twimg.com/profile_images/79570313/addictionsmall_400x400.jpg',
          },
          title: 'Drop Alert!',
          url: window.location.href,
          thumbnail: {
            url: imgUrl,
          },
          description: `Potential drop detected! <${window.location.href}>`,
        },
      ],
    }),
  }
);