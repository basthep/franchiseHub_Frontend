import { useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Minimize2,
} from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! 👋 I'm your Franchise AI Assistant. I can help you find franchises, compare investments, understand ROI, and answer questions about franchise opportunities.",
    },
  ]);

  const [input, setInput] = useState("");

  // Loading state while Gemini is responding
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // =====================================================
  // AUTO SCROLL TO LATEST MESSAGE
  // =====================================================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // =====================================================
  // SEND MESSAGE TO GEMINI BACKEND
  // =====================================================
  const handleSend = async () => {
    const message = input.trim();

    // Don't send empty messages
    // Don't send another request while AI is responding
    if (!message || isLoading) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInput("");

    // Start loading
    setIsLoading(true);

    try {
      // Send message to your Express backend
      const response = await fetch(
        "http://localhost:5000/api/ai/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      // Try to parse backend response
      const data = await response.json();

      // Check if backend returned an error
      if (!response.ok) {
        throw new Error(
          data.message || "Failed to get AI response"
        );
      }

      // Check if Gemini returned a response
      if (!data.reply) {
        throw new Error("AI returned an empty response");
      }

      // Create AI message
      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply,
      };

      // Add AI response to chat
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      // Show friendly error message inside chatbot
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Sorry, I couldn't connect to the AI service right now. Please try again in a moment.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  // =====================================================
  // ENTER KEY
  // =====================================================
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
          ===================================================== */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Franchise AI"
          className="
            fixed
            bottom-6
            right-6
            z-[90]
            h-16
            w-16
            rounded-full
            bg-primary
            text-primary-foreground
            shadow-2xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-primary/30
          "
        >
          <Bot className="h-7 w-7" />

          {/* Online indicator */}
          <span
            className="
              absolute
              top-0
              right-0
              h-4
              w-4
              rounded-full
              bg-green-500
              border-2
              border-background
            "
          />
        </button>
      )}

      {/* =====================================================
          CHAT OVERLAY
          ===================================================== */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setIsOpen(false)}
        >
          {/* =================================================
              CHAT WINDOW
              ================================================= */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-2xl
              h-[650px]
              max-h-[90vh]
              bg-background
              rounded-2xl
              shadow-2xl
              overflow-hidden
              flex
              flex-col
              border
            "
          >
            {/* =================================================
                HEADER
                ================================================= */}
            <div
              className="
                bg-[image:var(--gradient-hero)]
                text-primary-foreground
                px-5
                py-4
                flex
                items-center
                justify-between
              "
            >
              {/* AI Information */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-primary-foreground/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Bot className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg">
                      Franchise AI
                    </h2>

                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div className="flex items-center gap-2 text-xs opacity-80">
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    {isLoading
                      ? "Thinking..."
                      : "AI Assistant"}
                  </div>
                </div>
              </div>

              {/* Close Buttons */}
              <div className="flex items-center gap-1">
                {/* Minimize */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    h-9
                    w-9
                    rounded-md
                    flex
                    items-center
                    justify-center
                    hover:bg-primary-foreground/10
                    transition
                  "
                  aria-label="Minimize chatbot"
                >
                  <Minimize2 className="h-5 w-5" />
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    h-9
                    w-9
                    rounded-md
                    flex
                    items-center
                    justify-center
                    hover:bg-primary-foreground/10
                    transition
                  "
                  aria-label="Close chatbot"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* =================================================
                MESSAGES
                ================================================= */}
            <div
              className="
                flex-1
                overflow-y-auto
                p-5
                space-y-4
                bg-background
              "
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[80%] ${
                      message.role === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`
                        h-8
                        w-8
                        rounded-full
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }
                      `}
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`
                        px-4
                        py-3
                        rounded-2xl
                        text-sm
                        leading-relaxed
                        whitespace-pre-wrap
                        break-words
                        ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }
                      `}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* =================================================
                  TYPING INDICATOR
                  ================================================= */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    {/* Bot avatar */}
                    <div
                      className="
                        h-8
                        w-8
                        rounded-full
                        bg-muted
                        text-foreground
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      "
                    >
                      <Bot className="h-4 w-4" />
                    </div>

                    {/* Typing bubble */}
                    <div
                      className="
                        px-4
                        py-3
                        rounded-2xl
                        rounded-bl-sm
                        bg-muted
                        flex
                        items-center
                        gap-1
                      "
                    >
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-muted-foreground
                          animate-bounce
                        "
                      />

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-muted-foreground
                          animate-bounce
                          [animation-delay:150ms]
                        "
                      />

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-muted-foreground
                          animate-bounce
                          [animation-delay:300ms]
                        "
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Auto scroll target */}
              <div ref={messagesEndRef} />
            </div>

            {/* =================================================
                INPUT AREA
                ================================================= */}
            <div className="border-t p-4 bg-background">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  placeholder={
                    isLoading
                      ? "AI is thinking..."
                      : "Ask about franchise opportunities..."
                  }
                  className="
                    flex-1
                    h-12
                    rounded-xl
                    border
                    bg-muted/30
                    px-4
                    text-sm
                    text-foreground
                    outline-none
                    focus:ring-2
                    focus:ring-primary
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="
                    h-12
                    w-12
                    rounded-xl
                    bg-primary
                    text-primary-foreground
                    flex
                    items-center
                    justify-center
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    hover:opacity-90
                    transition
                  "
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <div
                      className="
                        h-5
                        w-5
                        border-2
                        border-primary-foreground
                        border-t-transparent
                        rounded-full
                        animate-spin
                      "
                    />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-muted-foreground mt-2">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot; 
