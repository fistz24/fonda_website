"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFullResponse } from "@/lib/matcher";

const SUGGESTED_PROMPTS = [
  "Why is your background so diverse?",
  "Show your best projects.",
  "Tell me about Chime.",
  "Why consulting?",
  "What industries have you worked in?",
  "What motivates you?",
];

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  displayContent: string; // what's currently shown (for typewriter)
  followUps?: string[];
  done: boolean;
}

const TYPING_SPEED_MS = 8; // ms per character — lower = faster

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const typeMessage = useCallback((id: string, fullText: string, followUps: string[]) => {
    let charIndex = 0;
    setIsTyping(true);

    const tick = () => {
      charIndex++;
      const slice = fullText.slice(0, charIndex);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === id
            ? {
                ...m,
                displayContent: slice,
                done: charIndex >= fullText.length,
                followUps: charIndex >= fullText.length ? followUps : [],
              }
            : m
        )
      );

      if (charIndex < fullText.length) {
        typingRef.current = setTimeout(tick, TYPING_SPEED_MS);
      } else {
        setIsTyping(false);
      }
    };

    typingRef.current = setTimeout(tick, TYPING_SPEED_MS);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, []);

  const handleSubmit = useCallback(
    (text?: string) => {
      const value = text ?? input.trim();
      if (!value || isTyping) return;

      setInput("");
      setShowGreeting(false);

      // Add user message
      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: value,
        displayContent: value,
        done: true,
      };

      // Get response immediately (no network call)
      const { text: responseText, followUps, id: responseId } = getFullResponse(value);

      const assistantId = crypto.randomUUID();
      const assistantMsg: Message = {
        id: assistantId,
        role: "assistant",
        content: responseText,
        displayContent: "",
        followUps: [],
        done: false,
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);

      // Small delay before typing starts — feels more natural
      setTimeout(() => {
        typeMessage(assistantId, responseText, followUps);
      }, 300);
    },
    [input, isTyping, typeMessage]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Render markdown-lite: bold **text**, line breaks, bullet-like paragraphs
  const renderContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      // Bold: **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line === "") return <br key={i} />;
      return (
        <span key={i} className="block">
          {parts}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-8 pb-4">
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
              >
                <p className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
                  Hi, I&apos;m Fonda.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  I&apos;ve worked across consulting, venture capital,
                  entrepreneurship, fintech, and consumer brands. Every chapter
                  taught me a different piece of how businesses work.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  What would you like to explore?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Messages */}
          <div className="space-y-6">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "flex flex-col",
                  msg.role === "user" ? "items-end" : "items-start"
                )}
              >
                {msg.role === "user" ? (
                  <div className="bg-muted text-foreground rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-sm text-sm">
                    {msg.displayContent}
                  </div>
                ) : (
                  <div className="max-w-xl w-full">
                    <div className="text-sm text-foreground leading-relaxed space-y-1">
                      {renderContent(msg.displayContent)}
                      {/* Cursor while typing */}
                      {!msg.done && (
                        <span className="inline-block w-0.5 h-4 bg-foreground/50 ml-0.5 animate-pulse align-middle" />
                      )}
                    </div>

                    {/* Follow-up suggestions — appear when done typing */}
                    <AnimatePresence>
                      {msg.done && msg.followUps && msg.followUps.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex flex-wrap gap-2 mt-4"
                        >
                          {msg.followUps.map((prompt) => (
                            <button
                              key={prompt}
                              onClick={() => handleSubmit(prompt)}
                              disabled={isTyping}
                              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              {prompt}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Thinking indicator — shows briefly before typing starts */}
            {isTyping && messages[messages.length - 1]?.displayContent === "" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-1 items-center pl-0.5"
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse-dot"
                    style={{ animationDelay: `${d * 0.16}s` }}
                  />
                ))}
              </motion.div>
            )}
          </div>

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Suggested prompts — only on greeting screen */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-3"
          >
            <div className="max-w-2xl mx-auto flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSubmit(prompt)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all duration-150"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input bar */}
      <div className="px-4 pb-6 pt-2">
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-end gap-2 bg-muted rounded-2xl px-4 py-3 border border-border focus-within:border-foreground/20 transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything…"
              rows={1}
              disabled={isTyping}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none max-h-32 leading-relaxed disabled:opacity-60"
              style={{ scrollbarWidth: "none" }}
            />
            <button
              onClick={() => handleSubmit()}
              disabled={!input.trim() || isTyping}
              className={cn(
                "shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all",
                input.trim() && !isTyping
                  ? "bg-foreground text-background hover:opacity-80"
                  : "bg-muted-foreground/20 text-muted-foreground cursor-not-allowed"
              )}
            >
              <ArrowUp size={14} />
            </button>
          </div>
          <p className="text-center text-[11px] text-muted-foreground/50 mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
