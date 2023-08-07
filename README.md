
# Automated Testing with Selenium and JavaScript

This project demonstrates automated testing using Selenium and JavaScript. It includes examples of automating the following scenarios:

1. Facebook Login and Post
2. Google Search "Best QA Engineering Practices"

## Prerequisites

Before running the tests, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Node.js package manager
- [Chrome Browser](https://www.google.com/chrome/) - Web browser

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/selenium-javascript-automation.git
```

2. Navigate to the project directory:

```bash
cd selenium-javascript-automation
```

3. Install project dependencies:

```bash
npm install
```

## Usage

1. Open the `config.js` file and update the `username` and `password` variables with your Facebook credentials.

2. Run the automated test script:

```bash
node facebookAutomation.js
```

The script will:

- Open a Chrome browser window.
- Navigate to Facebook.
- Log in using the provided credentials.
- Make a post "I Kill Bugs!" on the Facebook profile.
- Open Google and search for "best QA Engineering practices".
- Close the browser.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).