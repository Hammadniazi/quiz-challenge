# Quiz Challenge

An interactive web-based quiz application built with HTML, CSS, and JavaScript. Test your general knowledge with 10 engaging questions!

## Features

- **Interactive Quiz Interface**: Clean and user-friendly design
- **10 General Knowledge Questions**: Covering various topics
- **Instant Feedback**: See correct/incorrect answers immediately
- **Score Tracking**: Get your final score at the end
- **Play Again**: Restart the quiz anytime

## Live Link

[Live Link](https://quiz-challengez.netlify.app/)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/Hammadniazi/quiz-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz-challenge
   ```

3. Open `index.html` in your web browser:

   ```bash
   open index.html
   ```

   Or simply double-click the `index.html` file.

4. Start the quiz and answer the questions!

## Project Structure

```
quiz-challenge/
│
├── index.html      # Main HTML file
├── index.css       # Styling
├── script.js       # Quiz logic and functionality
└── README.md       # Project documentation
```

## How It Works

1. **Start**: The quiz automatically loads the first question
2. **Answer**: Click on one of the four answer options
3. **Feedback**: Correct answers turn green, incorrect ones turn red
4. **Next**: Click "Next" to move to the next question
5. **Score**: At the end, see your total score
6. **Replay**: Click "Play Again" to restart the quiz

## Customization

Want to add your own questions? Edit the `questions` array in `script.js`:

```javascript
const questions = [
  {
    question: "Your question here?",
    answer: [
      { test: "Option 1", correct: false },
      { test: "Option 2", correct: true },
      { test: "Option 3", correct: false },
      { test: "Option 4", correct: false },
    ],
  },
  // Add more questions...
];
```

## License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hammad Niazi**

- GitHub: [@Hammadniazi](https://github.com/Hammadniazi)

## Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Hammad Niazi
