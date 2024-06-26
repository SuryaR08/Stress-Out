import React, { useState } from "react";
import "../css/chatbot.css";
import NavBar2 from "./NavBar2";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("advising");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    handleChatbotResponse(input);
    setInput("");
  };

  const handleChatbotResponse = (input) => {
    const listeningResponses = [
      {
        keywords: ["name", "who are you", "what are you"],
        response: "I am your personalized mental health support chatbot!",
      },
      {
        keywords: ["hi", "hello", "hey"],
        response: "Hey, How are you feeling today?",
      },
      {
        keywords: ["sad", "unhappy", "down", "depressed"],
        response:
          "I'm sorry to hear you're feeling this way. I'm here to listen.",
      },
      {
        keywords: ["angry", "mad", "furious"],
        response:
          "It's okay to feel angry. Want to talk more about what's bothering you?",
      },
      {
        keywords: ["anxious", "worried", "nervous"],
        response:
          "Anxiety can be tough. I'm here for you. What's on your mind?",
      },
      {
        keywords: ["lonely", "alone"],
        response: "Feeling lonely can be really hard. I'm here with you.",
      },
      {
        keywords: ["stressed", "overwhelmed"],
        response:
          "Stress can be overwhelming. Take your time to talk about it. I'm listening.",
      },
      {
        keywords: ["happy", "good"],
        response: "I'm glad to hear that! What's been going well for you?",
      },
      {
        keywords: ["confused", "lost"],
        response:
          "Feeling confused is okay. Can you tell me more about what's going on?",
      },
      {
        keywords: ["grateful", "thankful"],
        response:
          "It's wonderful to feel grateful. What are you thankful for today?",
      },
    ];

    const advisingResponses = [
      {
        keywords: ["hello", "hi", "hey"],
        response: "Hi there! How can I assist you today?",
      },
      {
        keywords: ["how are you", "how are you?"],
        response:
          "I am just a chatbot, but I'm here to help you. How are you feeling today?",
      },
      {
        keywords: ["name", "who are you", "what are you"],
        response: "I am your personalized mental health support chatbot!",
      },
      {
        keywords: ["sad", "depressed"],
        response:
          "I'm sorry you're feeling this way. It might help to talk to a friend or a mental health professional. Remember, it's okay to seek help.",
      },
      {
        keywords: ["anxious", "anxiety"],
        response:
          "Anxiety can be tough. Deep breathing exercises or mindfulness meditation might help. Have you tried these?",
      },
      {
        keywords: ["stress", "stressed"],
        response:
          "It sounds like you're stressed. Taking breaks and practicing relaxation techniques can be beneficial. Maybe try a short walk?",
      },
      {
        keywords: ["happy", "good"],
        response:
          "I'm glad to hear you're feeling good! Is there something specific that's making you happy today?",
      },
      {
        keywords: ["help", "support"],
        response:
          "I'm here to help. Please tell me more about what's on your mind.",
      },
      {
        keywords: ["lonely", "alone"],
        response:
          "Feeling lonely can be difficult. Reaching out to friends or joining online communities might help.",
      },
      {
        keywords: ["sleep", "insomnia"],
        response:
          "Having trouble sleeping? Maintaining a regular sleep schedule and avoiding screens before bed can improve sleep quality.",
      },
      {
        keywords: ["angry", "anger"],
        response:
          "Anger can be overwhelming. Try to take deep breaths and give yourself time to cool down before reacting.",
      },
      {
        keywords: ["exercise", "workout"],
        response:
          "Exercise can boost your mood and reduce stress. Even a short walk can make a difference!",
      },
      {
        keywords: ["food", "diet"],
        response:
          "Eating a balanced diet can impact your mental health. How are you eating lately?",
      },
      {
        keywords: ["mindfulness", "meditation"],
        response:
          "Mindfulness and meditation can help manage stress and anxiety. Would you like some resources on this?",
      },
      {
        keywords: ["thank you", "thanks"],
        response: "You're welcome! I'm here to help whenever you need me.",
      },
      {
        keywords: ["bye", "goodbye"],
        response: "Goodbye! Take care and reach out if you need any support.",
      },
      {
        keywords: ["panic", "panic attack"],
        response:
          "Panic attacks can be very scary. Try to find a safe space, sit down, and take slow, deep breaths.",
      },
      {
        keywords: ["overwhelmed", "overwhelming"],
        response:
          "Feeling overwhelmed is tough. Breaking tasks into smaller steps and taking breaks can help.",
      },
      {
        keywords: ["focus", "concentrate"],
        response:
          "If you're having trouble focusing, try taking short breaks, minimizing distractions, and setting small goals.",
      },
      {
        keywords: ["breathe", "breathing"],
        response:
          "Deep breathing can help calm your mind. Try inhaling slowly through your nose, holding for a few seconds, and exhaling through your mouth.",
      },
      {
        keywords: ["cry", "crying"],
        response:
          "It's okay to cry. Letting out your emotions can be very healing.",
      },
      {
        keywords: ["hope", "hopeless"],
        response:
          "It's important to hold onto hope, even when things feel tough. Talking to someone you trust can help.",
      },
      {
        keywords: ["grief", "loss"],
        response:
          "Grief is a natural response to loss. It's important to allow yourself to feel and process your emotions.",
      },
      {
        keywords: ["relationship", "relationships"],
        response:
          "Relationships can be challenging. Communication and setting boundaries can help improve them.",
      },
      {
        keywords: ["self-esteem", "confidence"],
        response:
          "Building self-esteem takes time. Try to focus on your strengths and celebrate small achievements.",
      },
      {
        keywords: ["therapy", "therapist"],
        response:
          "Therapy can be very helpful. A professional can provide support and strategies to manage your mental health.",
      },
      {
        keywords: ["purpose", "meaning"],
        response:
          "Finding purpose can be fulfilling. Engaging in activities you enjoy and helping others can give your life meaning.",
      },
    ];

    let response =
      "I'm sorry, I didn't understand that. Could you please elaborate?";

    const responses =
      mode === "listening" ? listeningResponses : advisingResponses;

    for (let i = 0; i < responses.length; i++) {
      const regex = new RegExp(responses[i].keywords.join("|"), "i");
      if (regex.test(input)) {
        response = responses[i].response;
        break;
      }
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "chatbot", text: response },
    ]);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "advising" ? "listening" : "advising"));
  };

  return (
    <div>
      <NavBar2 />
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span className="chatbot-mode">
            Current mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </span>
          <br />
          <button onClick={toggleMode}>
            Switch to {mode === "advising" ? "Listening" : "Advising"} Mode
          </button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
