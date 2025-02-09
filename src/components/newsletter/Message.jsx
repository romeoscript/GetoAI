import React, { useState } from 'react';
import { Copy, Check, User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Message = ({ content, type = 'ai' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-6 p-6 ${type === 'user' ? 'bg-gray-50' : 'bg-white'}`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        {type === 'user' ? (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow max-w-3xl space-y-4">
        <div className="prose prose-blue max-w-none">
          {type === 'user' ? (
            <p className="text-gray-800">{content}</p>
          ) : (
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                a: ({ children, href }) => (
                  <a href={href} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-200 pl-4 italic">{children}</blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">{children}</code>
                ),
                hr: () => <hr className="my-6 border-gray-200" />,
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>

        {/* Copy button */}
        {type === 'ai' && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;