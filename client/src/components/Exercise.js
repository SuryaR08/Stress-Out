import React, { useState } from "react";
import "../css/Exercise.css";
import NavBar2 from "./NavBar2.js";

const Exercise = () => {
  const emotions = ["Anger", "Anxiety", "Stress", "Sadness", "Happiness"];
  const exercises = {
    Anger: [
      {
        name: "Deep Breathing",
        compliment: "Great job on practicing deep breathing!",
        points: [
          "Take a deep breath in through your nose for 4 seconds.",
          "Hold your breath for 4 seconds.",
          "Exhale slowly through your mouth for 4 seconds.",
          "Repeat the process several times.",
        ],
      },
      {
        name: "Count to 10",
        compliment: "You're doing great with counting to 10!",
        points: [
          "Count slowly from 1 to 10.",
          "Focus on your breath as you count.",
          "Repeat the process until you feel calmer.",
        ],
      },
      {
        name: "Physical Activity",
        compliment: "Keep up the good work with physical activity!",
        points: [
          "Go for a brisk walk or run.",
          "Engage in a workout routine.",
          "Practice yoga or tai chi.",
          "Play a sport you enjoy.",
        ],
      },
      {
        name: "Visualization",
        compliment: "You're doing well with visualization!",
        points: [
          "Close your eyes and imagine a peaceful scene.",
          "Focus on the details, such as sounds, smells, and colors.",
          "Take deep breaths as you visualize the scene.",
          "Feel yourself becoming more relaxed and calm.",
        ],
      },
      {
        name: "Progressive Muscle Relaxation",
        compliment: "You're making progress with muscle relaxation!",
        points: [
          "Tense and relax each muscle group in your body, starting from your toes and working your way up to your head.",
          "Hold each tension for 5-10 seconds, then release and relax for 20-30 seconds.",
          "Focus on the sensation of relaxation as you release each muscle group.",
        ],
      },
    ],
    Anxiety: [
      {
        name: "Box Breathing",
        compliment: "Great job on practicing box breathing!",
        points: [
          "Inhale deeply through your nose for 4 seconds.",
          "Hold your breath for 4 seconds.",
          "Exhale slowly through your mouth for 4 seconds.",
          "Pause for 4 seconds before beginning the next cycle.",
          "Repeat the process several times.",
        ],
      },
      {
        name: "Grounding Techniques",
        compliment: "You're doing great with grounding techniques!",
        points: [
          "Name 5 things you can see around you.",
          "Identify 4 things you can touch.",
          "List 3 things you can hear.",
          "Identify 2 things you can smell.",
          "Name 1 thing you can taste.",
        ],
      },
      {
        name: "Mindfulness Meditation",
        compliment: "Keep up the good work with mindfulness meditation!",
        points: [
          "Find a quiet space to sit or lie down comfortably.",
          "Close your eyes and focus on your breath.",
          "Pay attention to the sensations of breathing in and out.",
          "When your mind wanders, gently bring your focus back to your breath.",
          "Continue for several minutes, gradually increasing the duration over time.",
        ],
      },
    ],
    Stress: [
      {
        name: "Progressive Muscle Relaxation",
        compliment: "You're doing well with progressive muscle relaxation!",
        points: [
          "Start by tensing the muscles in your toes for 5 seconds.",
          "Release the tension and allow the muscles to relax for 30 seconds.",
          "Move on to the muscles in your feet, calves, thighs, and so on, working your way up your body.",
          "Tense each muscle group for 5 seconds before releasing.",
          "Focus on the contrast between tension and relaxation.",
        ],
      },
      {
        name: "Journaling",
        compliment: "Great job on journaling your thoughts and feelings!",
        points: [
          "Set aside some time each day to write down your thoughts and feelings.",
          "Write freely without worrying about grammar or spelling.",
          "Explore your emotions and experiences in detail.",
          "Reflect on your entries periodically to gain insights and perspective.",
        ],
      },
      {
        name: "Nature Walk",
        compliment: "You're doing great with taking nature walks!",
        points: [
          "Find a nearby park, forest, or natural area.",
          "Take a leisurely walk while paying attention to your surroundings.",
          "Notice the sights, sounds, and smells of nature.",
          "Allow yourself to relax and enjoy the present moment.",
        ],
      },
    ],
    Sadness: [
      {
        name: "Gratitude Practice",
        compliment: "Great job on practicing gratitude!",
        points: [
          "Take a few moments each day to think about things you're grateful for.",
          "Write down at least three things you're grateful for.",
          "Reflect on why you're grateful for each item.",
          "Notice how gratitude affects your mood and perspective.",
        ],
      },
      {
        name: "Creative Expression",
        compliment: "You're doing well with creative expression!",
        points: [
          "Engage in a creative activity you enjoy, such as painting, drawing, writing, or crafting.",
          "Express your emotions through your chosen medium.",
          "Allow yourself to explore your feelings and experiences.",
          "Focus on the process rather than the end result.",
        ],
      },
      {
        name: "Self-Compassion Exercise",
        compliment: "Keep up the good work with practicing self-compassion!",
        points: [
          "Imagine yourself as a close friend or loved one.",
          "Think about how you would treat them with kindness and understanding.",
          "Extend the same compassion to yourself.",
          "Acknowledge your feelings without judgment.",
        ],
      },
    ],
    Happiness: [
      {
        name: "Random Acts of Kindness",
        compliment: "You're doing great with random acts of kindness!",
        points: [
          "Perform a small act of kindness for someone else, such as holding the door open, giving a compliment, or helping with a task.",
          "Notice the positive impact your actions have on others.",
          "Feel the sense of satisfaction and happiness that comes from helping others.",
        ],
      },
      {
        name: "Savoring Moments",
        compliment: "Great job on savoring moments of happiness!",
        points: [
          "Take time to fully experience moments of joy and happiness in your life.",
          "Pause and pay attention to the sights, sounds, and sensations around you.",
          "Express gratitude for the positive experiences you're enjoying.",
          "Create mental snapshots to remember these moments in the future.",
        ],
      },
      {
        name: "Mindful Appreciation",
        compliment: "You're doing well with mindful appreciation!",
        points: [
          "Set aside time each day to reflect on things you appreciate in your life.",
          "Focus on simple pleasures, such as a warm cup of coffee, a beautiful sunset, or a kind gesture from a friend.",
          "Notice how your perspective shifts as you cultivate gratitude and appreciation.",
        ],
      },
    ],
  };

  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedCompliment, setSelectedCompliment] = useState("");

  const handleEmotionSelection = (emotion) => {
    setSelectedEmotion(emotion);
    setSelectedExercises([]);
    setSelectedCompliment("");
  };

  const handleExerciseSelection = (exercise) => {
    const index = selectedExercises.indexOf(exercise.name);
    if (index !== -1) {
      setSelectedExercises(
        selectedExercises.filter((item) => item !== exercise.name)
      );
      setSelectedCompliment("");
    } else {
      setSelectedExercises([...selectedExercises, exercise.name]);
      setSelectedCompliment(exercise.compliment);
    }
  };

  return (
    <div className="main-container">
      <NavBar2 />
      <div className="exercise-container">
        <h2>Emotion Control Exercises</h2>
        <div className="emotion-list">
          <div className="emotion-scroll">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                onClick={() => handleEmotionSelection(emotion)}
                className={selectedEmotion === emotion ? "selected" : ""}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>
        {selectedEmotion && (
          <div className="exercise">
            <h3>{selectedEmotion}</h3>
            <div className="exercise-list">
              {exercises[selectedEmotion].map((exercise, index) => (
                <div key={index} className="exercise-item">
                  <input
                    type="checkbox"
                    id={`exercise-${index}`}
                    checked={selectedExercises.includes(exercise.name)}
                    onChange={() => handleExerciseSelection(exercise)}
                  />
                  <label htmlFor={`exercise-${index}`}>{exercise.name}</label>
                  <ul>
                    {exercise.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {selectedCompliment && (
              <div className="compliment-popup">
                <p>{selectedCompliment}</p>
              </div>
            )}
          </div>
        )}
      </div>
      d
    </div>
  );
};

export default Exercise;
