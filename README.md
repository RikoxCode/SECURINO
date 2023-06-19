# SECURION

A versatile Discord bot built with [Discord.js](https://discord.js.org/) for your server.

## Features

- **Dynamic Command Handling**: The bot uses the `djs-commander` library to handle commands dynamically, allowing for easy command creation and management.
- **Command Validation**: The `validations` directory provides a convenient way to define and enforce command input validations.
- **Customizable**: The bot's behavior and features can be extended by adding new commands, events, and validations to the respective directories.
- **Intuitive Configuration**: The bot utilizes environment variables defined in the `.env` file to configure important settings such as the Discord bot token and server ID.
- **Dependency Management**: The bot checks for required Node modules during startup and provides feedback on missing modules for easy installation.


## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/discord-bot.git
   ```


2. Install dependencies:
   ```
   npm install
   ```


3. Configer the bot

    Rename `.env.example` to `.env` and update the required configuration values.


4. Start the bot
    
    Start with nodemon
    ```
    npm run dev
    ```

    Start with Node
    ```
    npm run start
    ```



## Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.