const discordwh = () => {
  fetch(
    'REPLACE_THIS_WHOLE_STRING_WITH_YOUR_WEBHOOK_URL',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
}