# Quiz Application with Timer and Score Calculation

## Table of Contents
1. [Objective](#objective)
2. [Must Haves](#must-haves)
   - [UI](#ui)
   - [Timer and Score Calculation](#timer-and-score-calculation)
3. [Nice to Have](#nice-to-have)
4. [Readme First](#readme-first)
5. [Deliverables](#deliverables)
6. [Example JSON for Questions](#example-json-for-questions)

## Objective
Create a **Quiz Application** where users can select a category, answer multiple-choice questions with a timer, and receive a final score based on their correct answers. The code should be clean, maintainable, and follow best practices.

---

## Must Haves

### UI
- **Category Selection Page**: Users should be able to select a quiz category. Categories can be hardcoded into the frontend (e.g., "JavaScript Basics", "React Basics"). 
- **Quiz Page**:
  - After the user selects a category, the relevant questions should be loaded.
  - Display one question at a time with four multiple-choice options.
  - Implement a **10-second countdown timer** for each question. If the user doesn’t answer within the time limit, automatically move to the next question.
  - Users should be able to manually navigate to the next question before the timer expires using a "Next" button.
  - **UI Design**: The design of the UI should be similar to the provided design and prototype.
   - **Design**: [View Design](https://www.figma.com/design/om9TsmkGM6Y0gq8jImvgtG/Interview-Task-1?node-id=0-1&node-type=canvas&t=HGhicKQHgKivkLLz-0)
   - **Prototype**: [View Prototype](https://www.figma.com/proto/om9TsmkGM6Y0gq8jImvgtG/Interview-Task-1?node-id=1-581&node-type=canvas&t=ClLo84Txw6JWMhyr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

- **Score Calculation**:
  - After the last question is answered, calculate the final score.
  - Display the score and performance feedback (e.g., "Great job!" for a high score or "Keep practicing!" for a low score).
  - Provide the number of correct answers out of the total questions.

### Timer and Score Calculation
- **Timer Implementation**: Each question should have a **10-second timer**. If time runs out, automatically move to the next question.
- **Score Calculation**: The score should be based on correct answers. Display the score at the end of the quiz, showing:
  - Number of correct answers.
  - Number of unanswered questions.

---

## Nice to Have
- **Highlighting Correct/Incorrect Answers**: When a user selects an answer, it should be highlighted based on correctness (e.g., green for correct, red for incorrect), but no feedback should be shown after each question.

---

## Readme First
- **Minimize Third-Party Packages**: Try to use as few third-party packages as possible.
- **Code Quality**: Maintain clean, readable, and maintainable code. Use formatters and linters for consistency.
- **Framework Best Practices**: Follow best practices for your chosen framework or library.
- **Responsive Design**: Ensure that the quiz application is responsive and works across different screen sizes (mobile, tablet, desktop).

---

## Deliverables
- **README.md**: Your project should include a README file with the following sections:
  - **Getting Started**: The minimum steps and configurations needed to run the project. For example:

    ```bash
    # after cloning the repo
    npm install
    npm start
    ```

  - **Problem Statement**: A brief description of the task.
  - **Completed**: A section listing the tasks you have completed. It is okay if you don’t complete all tasks, but the ones you submit should be functional.

- **GitHub**: Push all of your code to a public GitHub repository and share the link.

- **Time Frame**: You will have 4 to 5 hours to complete the exercise.

---

## Example JSON for Questions

Here is an example of how to structure the quiz questions in JSON format:

```json
{
  "categories": [
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    }
  ]
}
