 const questions = document.querySelectorAll('.ques');
    const answers = document.querySelectorAll('.answer');

    questions.forEach((question, index) => {
      question.addEventListener('click', () => {
        // Close all others
        answers.forEach((ans, i) => {
          if (i !== index) {
            ans.classList.remove('open');
            questions[i].classList.remove('active');
          }
        });

        // Toggle current
        answers[index].classList.toggle('open');
        question.classList.toggle('active');
      });
    });