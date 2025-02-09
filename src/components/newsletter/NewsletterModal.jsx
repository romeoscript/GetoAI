import React, { useState, useRef, useEffect } from 'react';
import { Send, Wand2, X, AlertCircle } from 'lucide-react';
import DisplayNewsletter from './DisplayNewsletter';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter what kind of newsletter you want to generate');
      return;
    }

    setIsGenerating(true);
    setError('');
    
    // Add user message immediately
    setMessages(prev => [...prev, { type: 'user', content: prompt }]);
    
    try {
      const response = await fetch('https://ai-agent-newsletter.onrender.com/generate-newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: prompt
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate newsletter');
      }

      const data = await response.json();
      
      // Add AI response
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: data.newsletter.raw 
      }]);
      
      // Clear input after successful generation
      setPrompt('');
    } catch (err) {
      setError('Failed to generate newsletter. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-50 rounded-xl shadow-xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-800">Generate Newsletter</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-auto">
          {error && (
            <div className="m-4 bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="divide-y divide-gray-100">
            {messages.map((message, index) => (
              <div key={index} className={message.type === 'user' ? 'bg-gray-50' : 'bg-white'}>
                <DisplayNewsletter 
                  content={{ 
                    newsletter: { 
                      raw: message.content 
                    } 
                  }}
                  type={message.type}
                />
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
          <div className="flex gap-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none h-[100px] bg-white"
              placeholder="Describe the newsletter you want to generate... (e.g., 'Create a tech newsletter about AI trends and recent developments')"
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="h-[100px] px-6 bg-blue-600 text-white rounded-lg font-medium flex flex-col items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm">Generating...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span className="text-sm">Send</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;