import React, { useState, useContext, useRef, useEffect } from 'react';
import { getGroqCompletion } from '../lib/groq';
import { DutyPlanContext } from '../context/DutyPlanContext';
import { sampleUsers } from '../data/sampleUsers';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dutyPlanContext = useContext(DutyPlanContext);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  if (!dutyPlanContext) return null;

  const { dutyPlan, updateShift } = dutyPlanContext;

  const tools = [
    {
      type: 'function' as const,
      function: {
        name: 'update_employee_shift',
        description: "Update an employee's shift or status for a specific date. Status codes: K=Sick, U=Vacation, FB=Training. For regular shifts, use 'HH:MM-HH:MM' format.",
        parameters: {
          type: 'object',
          properties: {
            employee_username: {
              type: 'string',
              description: 'The username of the employee (e.g., "anna", "tom").',
            },
            date: {
              type: 'string',
              description: 'The date for the shift in YYYY-MM-DD format.',
            },
            status: {
              type: 'string',
              description: "The new status or shift time (e.g., 'K', 'U', '09:00-17:00').",
            },
          },
          required: ['employee_username', 'date', 'status'],
        },
      },
    },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const systemPrompt = `You are a helpful assistant for a daycare manager. Your task is to manage the employee duty plan.
      - Today's date is ${new Date().toISOString().split('T')[0]}.
      - Available employees are: ${sampleUsers.filter(u => u.role === 'teacher').map(u => u.username).join(', ')}.
      - The current duty plan is provided below in JSON format.
      - When asked to make a change, use the 'update_employee_shift' tool.
      - When asked a question, answer based on the provided duty plan data.
      - Be concise and friendly.
      Current Duty Plan:
      ${JSON.stringify(dutyPlan)}`;

    try {
      const response = await getGroqCompletion(systemPrompt, input, tools);
      const { finish_reason, message: assistantMessage } = response.choices[0];

      if (finish_reason === 'tool_calls' && assistantMessage.tool_calls) {
        const toolCall = assistantMessage.tool_calls[0];
        const functionName = toolCall.function.name;
        const args = JSON.parse(toolCall.function.arguments);

        if (functionName === 'update_employee_shift') {
          updateShift(args.employee_username, args.date, { status: args.status });
          const confirmation: Message = { role: 'assistant', content: `Ok, I've updated ${args.employee_username}'s schedule for ${args.date}.` };
          setMessages(prev => [...prev, confirmation]);
        }
      } else {
        const responseMessage: Message = { role: 'assistant', content: assistantMessage.content || "I'm not sure how to respond to that." };
        setMessages(prev => [...prev, responseMessage]);
      }
    } catch (error) {
      console.error('Groq API error:', error);
      const errorMessage: Message = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: 400, height: 500, display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '8px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ padding: '0.5rem 1rem', background: '#10b981', color: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
        <h3 style={{ margin: 0 }}>🤖 AI Assistant</h3>
      </div>
      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            background: msg.role === 'user' ? '#3b82f6' : '#e5e7eb',
            color: msg.role === 'user' ? 'white' : 'black',
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            maxWidth: '80%',
          }}>
            {msg.content}
          </div>
        ))}
        {isLoading && <div style={{ alignSelf: 'flex-start' }}>...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ padding: '1rem', borderTop: '1px solid #ccc', display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading} style={{ padding: '0.5rem 1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;