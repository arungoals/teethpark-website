import { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm the TeethPark AI Concierge. How can I help you today?", isUser: false }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
        setInput('');
        setIsLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';

            const response = await fetch(`${API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.details || `Server status: ${response.status}`);
            }

            const data = await response.json();
            const botResponse = data.response;

            setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            setMessages(prev => [...prev, {
                text: "My connection to the clinic is weak right now. Please call us at +91 94868 46534 for immediate help.",
                isUser: false,
                isError: true
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>TeethPark Assistant</h3>
                        <button onClick={toggleChat} className="close-btn">&times;</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && <div className="message bot typing">Thinking...</div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chatbot-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Ask about hours, services..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" disabled={isLoading}>Send</button>
                    </form>
                </div>
            )}
            <button className="chatbot-toggle" onClick={toggleChat} aria-label="Open AI Chatbot">
                🤖
            </button>
        </div>
    );
};

export default ChatBot;
