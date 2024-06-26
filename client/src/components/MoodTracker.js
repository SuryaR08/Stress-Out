import React, { useState } from "react";
import "../css/MoodTracker.css";
import Navbar2 from "./NavBar2";

function MoodTracker() {
  const [moods, setMoods] = useState([{ emotion: "", rating: "" }]);
  const [advice, setAdvice] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filledMoods = moods.filter((mood) => mood.emotion && mood.rating);
    const moodTrack = filledMoods.map((mood) => ({
      date: new Date().toLocaleDateString(),
      emotion: mood.emotion,
      rating: parseInt(mood.rating),
    }));

    console.log("Mood tracked successfully!", moodTrack);

    const newAdvice = provideAdvice(moodTrack);

    setAdvice(newAdvice);

    setMoods([{ emotion: "", rating: "" }]);
  };

  const provideAdvice = (moods) => {
    let advice = "";

    moods.forEach(({ emotion, rating }) => {
      switch (emotion) {
        case "Amusement":
          advice +=
            rating >= 7
              ? "Enjoy the moment! Embrace the joy and laughter around you."
              : "Feeling amused? Take a break and engage in activities that bring you joy.";
          break;
        case "Anxiety":
          advice +=
            rating <= 4
              ? "Feeling anxious? Remember to breathe deeply and practice mindfulness."
              : "If anxiety persists, consider seeking support from friends, family, or a professional.";
          break;
        case "Awe":
          advice +=
            rating >= 7
              ? "Embrace the wonder and beauty of the world around you!"
              : "Feeling awe-inspired? Take time to appreciate the small miracles in life.";
          break;
        case "Awkwardness":
          advice +=
            rating <= 4
              ? "Feeling awkward? Remember, it's okay to laugh it off and embrace your quirks!"
              : "Embrace the awkwardness! It's a sign that you're stepping out of your comfort zone.";
          break;
        case "Boredom":
          advice +=
            rating <= 4
              ? "Feeling bored? Explore new hobbies or activities to spice up your day."
              : "Use boredom as an opportunity for creativity! Try something new and exciting.";
          break;
        case "Calmness":
          advice +=
            rating >= 7
              ? "Enjoy the tranquility of the present moment. Embrace the peace within you."
              : "Practice mindfulness and gratitude to cultivate inner peace and serenity.";
          break;
        case "Confusion":
          advice +=
            rating <= 4
              ? "Feeling confused? Take a step back and break down the problem into smaller, manageable tasks."
              : "Embrace the confusion! It's a sign that you're challenging yourself and growing.";
          break;
        case "Craving":
          advice +=
            rating <= 4
              ? "Feeling cravings? Identify the underlying cause and find healthier alternatives to satisfy them."
              : "Indulge in moderation! Treat yourself to your cravings while maintaining balance.";
          break;
        case "Disgust":
          advice +=
            rating <= 4
              ? "Feeling disgusted? Surround yourself with positivity and things that uplift your spirits."
              : "Use disgust as a catalyst for change! Take steps to address the source of your discomfort.";
          break;
        case "Empathetic pain":
          advice +=
            rating >= 7
              ? "Embrace your empathy and offer support to those in need. Your compassion makes a difference!"
              : "Practice self-care while supporting others. Set boundaries to protect your emotional well-being.";
          break;
        case "Entrancement":
          advice +=
            rating >= 7
              ? "Allow yourself to be captivated by the beauty of the world around you. Immerse yourself fully in the experience!"
              : "Feeling entranced? Take a moment to appreciate the magic and wonder of life.";
          break;
        case "Envy":
          advice +=
            rating <= 4
              ? "Feeling envious? Shift your focus from comparison to appreciation. Celebrate your own successes and blessings."
              : "Use envy as motivation! Channel it into positive action towards your goals.";
          break;
        case "Excitement":
          advice +=
            rating >= 7
              ? "Embrace the thrill of excitement! Use it as fuel to pursue your passions and dreams."
              : "Feeling excited? Channel that energy into productive activities and pursue what excites you!";
          break;
        case "Fear":
          advice +=
            rating <= 4
              ? "Feeling fearful? Remember that courage is not the absence of fear but the ability to act in spite of it."
              : "Face your fears head-on! Take small steps to confront and overcome what scares you.";
          break;
        case "Horror":
          advice +=
            rating <= 4
              ? "Feeling horrified? Take a deep breath and remind yourself that it's just a temporary feeling."
              : "Embrace the thrill of horror! Dive into a scary movie or book and enjoy the adrenaline rush.";
          break;
        case "Interest":
          advice +=
            rating >= 7
              ? "Explore your interests and passions with enthusiasm! Dive deep into topics that captivate your curiosity."
              : "Feeling interested? Dive deeper! Explore new facets of the subject that intrigue you.";
          break;
        case "Joy":
          advice +=
            rating >= 7
              ? "Embrace the joy and happiness within you! Share your smile with the world and spread positivity."
              : "Feeling joyful? Cultivate gratitude and savor the simple pleasures that bring you happiness.";
          break;
        case "Nostalgia":
          advice +=
            rating >= 7
              ? "Reflect on cherished memories and embrace the nostalgia! Revisit old photos or songs that bring back fond moments."
              : "Feeling nostalgic? Take a trip down memory lane and reminisce about the good times.";
          break;

        case "Sadness":
          advice +=
            rating <= 4
              ? "Feeling sad? Allow yourself to feel your emotions and reach out for support when needed."
              : "Embrace your sadness as part of the human experience. Remember that it's okay not to be okay.";
          break;
        case "Satisfaction":
          advice +=
            rating >= 7
              ? "Celebrate your achievements and successes! Acknowledge your hard work and bask in the glow of satisfaction."
              : "Feeling satisfied? Reflect on your accomplishments and take pride in your progress.";
          break;

        case "Sympathy":
          advice +=
            rating >= 7
              ? "Show empathy and compassion towards others in their time of need. Your support can make a meaningful difference."
              : "Feeling sympathetic? Offer a listening ear and words of comfort to those who are going through a tough time.";
          break;
        case "Triumph":
          advice +=
            rating >= 7
              ? "Celebrate your victories and triumphs! Acknowledge your resilience and perseverance in overcoming challenges."
              : "Feeling triumphant? Take pride in your accomplishments and use them as motivation for future success.";
          break;
        default:
          advice += "Keep up the good work! You're doing great!";
          break;
      }
    });

    if (advice === "") {
      advice = "Keep up the good work! You're doing great!";
    } else {
      advice += "Remember, it's okay to seek help if you need it.";
    }

    return advice;
  };

  const handleMoodChange = (index, field, value) => {
    const newMoods = [...moods];
    newMoods[index][field] = value;
    setMoods(newMoods);
  };

  const addMoodField = () => {
    setMoods([...moods, { emotion: "", rating: "" }]);
  };

  return (
    <div>
      <Navbar2 />
      <div className="mood-tracker-container">
        <h2>Mood Tracker</h2>
        <form onSubmit={handleFormSubmit}>
          {moods.map((mood, index) => (
            <div key={index} className="mood-entry">
              <div>
                <label htmlFor={`emotion-${index}`}>Emotion:</label>
                <select
                  id={`emotion-${index}`}
                  value={mood.emotion}
                  onChange={(e) =>
                    handleMoodChange(index, "emotion", e.target.value)
                  }
                >
                  <option value="">Select Emotion</option>
                  <option value="Admiration">Admiration</option>
                  <option value="Adoration">Adoration</option>
                  <option value="Aesthetic appreciation">
                    Aesthetic appreciation
                  </option>
                  <option value="Amusement">Amusement</option>
                  <option value="Anxiety">Anxiety</option>
                  <option value="Awe">Awe</option>
                  <option value="Awkwardness">Awkwardness</option>
                  <option value="Boredom">Boredom</option>
                  <option value="Calmness">Calmness</option>
                  <option value="Confusion">Confusion</option>
                  <option value="Craving">Craving</option>
                  <option value="Disgust">Disgust</option>
                  <option value="Empathetic pain">Empathetic pain</option>
                  <option value="Entrancement">Entrancement</option>
                  <option value="Envy">Envy</option>
                  <option value="Excitement">Excitement</option>
                  <option value="Fear">Fear</option>
                  <option value="Horror">Horror</option>
                  <option value="Interest">Interest</option>
                  <option value="Joy">Joy</option>
                  <option value="Nostalgia">Nostalgia</option>
                  <option value="Sadness">Sadness</option>
                  <option value="Satisfaction">Satisfaction</option>
                  <option value="Sympathy">Sympathy</option>
                  <option value="Triumph">Triumph</option>
                </select>
              </div>
              <div>
                <label htmlFor={`rating-${index}`}>Rating (1-10):</label>
                <select
                  id={`rating-${index}`}
                  value={mood.rating}
                  onChange={(e) =>
                    handleMoodChange(index, "rating", e.target.value)
                  }
                >
                  <option value="">Select Rating</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={addMoodField}>
            Add Another Emotion
          </button>
          <button type="submit">Submit</button>
        </form>
        {advice && (
          <div className="advice-container">
            <h3>Advice:</h3>
            <p>{advice}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <div className="footer-text">
          <p>Created by Surya</p>
        </div>
        <div className="social-icons">
          <a
            className="Github_logo"
            href="https://github.com/SuryaR08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon Github_logo"></div>
            <span>GitHub</span>
          </a>
          <a
            className="Linkedin_logo"
            href="https://www.linkedin.com/in/suryar08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon Linkedin_logo"></div>
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MoodTracker;
