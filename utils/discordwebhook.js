const discordwh = () => {
  fetch(
    'https://discordapp.com/api/webhooks/779141615545352212/aAUvAgC_sIqWGnrF4TwgfP2efUtWmhPmOsWETKLPByfj5uhWyS2vNrMx0aBn4-flGs-y',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
}