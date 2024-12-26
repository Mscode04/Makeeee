const resolutions = [
    "Exercise regularly", "Eat healthier meals", "Drink more water daily",
    "Save more money", "Pay off debt", "Read more books",
    "Learn a new skill or hobby", "Spend more time with family and friends",
    "Travel to a new place", "Sleep earlier and improve sleep quality",
    "Start a journal or diary", "Declutter and organize your space",
    "Quit smoking", "Reduce screen time", "Volunteer for a cause",
    "Practice gratitude daily", "Learn a new language", "Cook more homemade meals",
    "Meditate regularly", "Improve time management skills", "Start a side hustle",
    "Focus on career growth", "Reduce alcohol consumption", "Stop procrastinating",
    "Get regular health check-ups", "Improve posture", "Take up gardening",
    "Spend more time outdoors", "Practice self-care more often", "Reduce stress with mindfulness",
    "Learn to play a musical instrument", "Use social media less", "Keep a budget and track expenses",
    "Create and stick to a workout plan", "Spend less on unnecessary items", "Work on personal relationships",
    "Attend workshops or courses", "Donate to charity", "Adopt a pet", "Avoid gossiping and negativity",
    "Create a morning routine", "Reduce energy consumption at home", "Write a book or blog",
    "Master public speaking", "Learn coding or a new tech skill", "Focus on sustainable living",
    "Start a gratitude jar", "Develop a positive mindset", "Watch less TV or streaming platforms",
    "Spend more quality time alone"
  ];

  function generateResolutions() {
    const count = parseInt(document.getElementById("resolutionCount").value);
    const selectedResolutions = [];
    while (selectedResolutions.length < count) {
      const randomIndex = Math.floor(Math.random() * resolutions.length);
      const resolution = resolutions[randomIndex];
      if (!selectedResolutions.includes(resolution)) {
        selectedResolutions.push(resolution);
      }
    }

    const resolutionList = document.getElementById("resolutionList");
    resolutionList.innerHTML = selectedResolutions.map(res => <li>${res}</li>).join("");
  }