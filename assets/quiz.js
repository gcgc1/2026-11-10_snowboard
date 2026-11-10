/* ============================================================
   Snowboarding Fundamentals — reusable quiz widget.
   No framework, no build step. Drop into any lesson with:

     <div class="quiz" data-quiz>
       <div class="quiz-q" data-answer="b">
         <p class="quiz-prompt">Question text?</p>
         <div class="quiz-opts">
           <button class="quiz-opt" data-opt="a">Option A</button>
           <button class="quiz-opt" data-opt="b">Option B</button>
           ...
         </div>
         <p class="quiz-explain" hidden>Why the answer is what it is.</p>
       </div>
       ...
       <p class="quiz-score" hidden></p>
     </div>

   Clicking an option locks the question, marks right/wrong, reveals
   the explanation, and reports a running score at the end.
   ============================================================ */

(function () {
  "use strict";

  function init(root) {
    var questions = Array.prototype.slice.call(root.querySelectorAll(".quiz-q"));
    var scoreEl = root.querySelector(".quiz-score");
    var answered = 0;
    var correct = 0;

    questions.forEach(function (q) {
      var answer = q.getAttribute("data-answer");
      var explain = q.querySelector(".quiz-explain");
      var opts = Array.prototype.slice.call(q.querySelectorAll(".quiz-opt"));

      opts.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (q.classList.contains("is-answered")) return;
          q.classList.add("is-answered");

          var right = btn.getAttribute("data-opt") === answer;

          opts.forEach(function (b) {
            b.disabled = true;
            if (b.getAttribute("data-opt") === answer) b.classList.add("is-correct");
          });
          if (right) {
            correct += 1;
          } else {
            btn.classList.add("is-wrong");
          }

          if (explain) explain.hidden = false;

          answered += 1;
          if (answered === questions.length && scoreEl) {
            scoreEl.hidden = false;
            scoreEl.textContent =
              "Score: " + correct + " / " + questions.length +
              (correct === questions.length
                ? " — nailed it. Move on."
                : " — re-read the ones you missed before you ride.");
            scoreEl.classList.add(correct === questions.length ? "is-good" : "is-mixed");
          }
        });
      });
    });
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-quiz]"), init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
