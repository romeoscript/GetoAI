import React from 'react';
import { Sparkles, ExternalLink, Bot } from 'lucide-react';

const MessageBubble = ({ children, type = 'ai' }) => (
  <div className={`flex gap-3 ${type === 'ai' ? '' : 'flex-row-reverse'} mb-6`}>
    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
      type === 'ai' ? 'bg-blue-100 text-blue-600' : 'bg-white border-2 border-blue-600'
    }`}>
      {type === 'ai' ? <Bot className="w-6 h-6" /> : <Sparkles className="w-5 h-5" />}
    </div>
    <div className={`flex flex-col gap-2 max-w-[80%] ${type === 'ai' ? '' : 'items-end'}`}>
      <div className={`rounded-2xl px-4 py-3 ${
        type === 'ai' 
          ? 'bg-white text-gray-800 shadow-sm' 
          : 'bg-blue-600 text-white'
      }`}>
        {children}
      </div>
    </div>
  </div>
);

const NewsletterContent = ({ content }) => (
  <div className="bg-gray-100 rounded-xl p-6 shadow-inner overflow-y-auto max-h-[70vh]">
    <div className="space-y-4">
      {/* Welcome Message */}
      <MessageBubble>
        <h2 className="font-bold text-lg mb-2">Welcome to Team Geto Weekly Digest!</h2>
        <p className="text-gray-600">
          {content.split('---')[1].trim()}
        </p>
      </MessageBubble>

      {/* Innovation of the Week */}
      <MessageBubble type="user">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <h3 className="font-semibold">Innovation of the Week</h3>
          </div>
          <p>{content.split('Innovation of the Week')[1].split('---')[0].trim()}</p>
        </div>
      </MessageBubble>

      {/* Machine Learning */}
      <MessageBubble>
        <div className="space-y-2">
          <h3 className="font-semibold">Key Advancements in Machine Learning</h3>
          <p>{content.split('Key Advancements in Machine Learning')[1].split('---')[0].trim()}</p>
          <div className="mt-2 text-sm text-blue-600 flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            <a href="https://www.bytedance.com" target="_blank" rel="noopener noreferrer">
              Learn more at ByteDance
            </a>
          </div>
        </div>
      </MessageBubble>

      {/* Deep Learning */}
      <MessageBubble type="user">
        <div className="space-y-2">
          <h3 className="font-semibold">Highlights from Deep Learning</h3>
          <p>{content.split('Highlights from Deep Learning')[1].split('---')[0].trim()}</p>
          <div className="mt-2 text-sm text-sky-100 flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
              Learn more at OpenAI
            </a>
          </div>
        </div>
      </MessageBubble>

      {/* Notable AI Innovations */}
      <MessageBubble>
        <div className="space-y-2">
          <h3 className="font-semibold">Notable AI Innovations</h3>
          <p>{content.split('Notable AI Innovations')[1].split('---')[0].trim()}</p>
        </div>
      </MessageBubble>

      {/* Closing Message */}
      <MessageBubble type="user">
        <p className="italic">
          Stay tuned for more updates on the rapidly evolving world of AI technologies. 
          Your insights could shape future innovations!
        </p>
        <div className="mt-2 text-sm text-sky-100">Written by The Team</div>
      </MessageBubble>
    </div>
  </div>
);

const DisplayNewsletter = ({ content }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4">
      <NewsletterContent content={content.newsletter.raw} />
    </div>
  );
};

export default DisplayNewsletter;