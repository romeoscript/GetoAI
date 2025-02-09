import React, { useState } from 'react';
import { Send, Wand2, X, AlertCircle } from 'lucide-react';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter what kind of newsletter you want to generate');
      return;
    }

    setIsGenerating(true);
    setError('');
    
    try {
      const response = await fetch('https://ai-agent-newsletter.onrender.com/generate_newsletter/', {
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
      setGeneratedContent(data.generated_content || data.response || '');
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
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Create Your Newsletter</h2>
            <p className="text-gray-600">Generate engaging content in seconds</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32"
              placeholder="Describe the newsletter you want to generate... (e.g., 'Create a tech newsletter about AI trends and recent developments')"
            />
          </div>

          {generatedContent && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Generated Newsletter</h3>
              <div className="text-gray-700 whitespace-pre-wrap">{generatedContent}</div>
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
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
      </div>
    </div>
  );
};

export default NewsletterModal;