document.addEventListener("DOMContentLoaded", function () {
  const subjects = document.querySelectorAll(".subject");

  subjects.forEach((subject) => {
    const savedState = localStorage.getItem(subject.id);
    if (savedState) subject.classList.add(savedState);

    subject.addEventListener("click", () => {
      subject.classList.remove("approved", "in-progress", "locked");

      if (!subject.dataset.state || subject.dataset.state === "locked") {
        subject.classList.add("approved");
        subject.dataset.state = "approved";
      } else if (subject.dataset.state === "approved") {
        subject.classList.add("in-progress");
        subject.dataset.state = "in-progress";
      } else {
        subject.classList.add("locked");
        subject.dataset.state = "locked";
      }

      localStorage.setItem(subject.id, subject.dataset.state);
    });
  });
});
