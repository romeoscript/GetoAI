import React, { useState } from 'react';
import { Send, Wand2, X, AlertCircle } from 'lucide-react';
import DisplayNewsletter from './DisplayNewsletter';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter what kind of newsletter you want to generate');
      return;
    }

    setIsGenerating(true);
    setError('');
    
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
      setGeneratedContent(data);
    } catch (err) {
      setError('Failed to generate newsletter. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
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

        {/* Content */}
        <div className="flex-grow overflow-auto">
          {error && (
            <div className="m-4 bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {!generatedContent ? (
            <div className="p-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32 bg-white"
                placeholder="Describe the newsletter you want to generate... (e.g., 'Create a tech newsletter about AI trends and recent developments')"
              />
            </div>
          ) : (
            <DisplayNewsletter content={generatedContent} />
          )}
        </div>

        {/* Footer */}
        {!generatedContent && (
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Generate Newsletter
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;