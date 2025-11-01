import { Sparkles } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground">
        <Sparkles size={16} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="rounded-2xl px-4 py-3 bg-card border border-border shadow-soft">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow [animation-delay:0.2s]" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow [animation-delay:0.4s]" />
          </div>
        </div>
        <span className="text-xs text-muted-foreground px-2">AI is thinking...</span>
      </div>
    </div>
  );
};
