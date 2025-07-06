self.addEventListener('fetch', event => {
  if (!navigator.onLine) {
    event.respondWith(
      new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Offline</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #fff;
              height: 100vh;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              color: #333;
            }
            .msg {
              max-width: 300px;
            }
            h1 {
              font-size: 1.5rem;
              margin-bottom: 10px;
            }
            p {
              font-size: 1rem;
            }
          </style>
        </head>
        <body>
          <div class="msg">
            <h1>📡 No Internet Connection</h1>
            <p>Please reconnect to continue the verification.</p>
          </div>
        </body>
        </html>
      `, { headers: { 'Content-Type': 'text/html' } })
    );
  }
});
