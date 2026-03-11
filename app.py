from web_flask import app

# Vercel requires the Flask instance to be available in this namespace
app = app

if __name__ == "__main__":
    app.run()
