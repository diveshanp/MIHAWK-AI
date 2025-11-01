import { Button } from "@/components/ui/button";
import { Lightbulb, Calculator, BookOpen, Sparkles } from "lucide-react";

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  {
    icon: BookOpen,
    text: "Explain quantum computing in simple terms",
  },
  {
    icon: Calculator,
    text: "Help me solve a math problem",
  },
  {
    icon: Lightbulb,
    text: "Give me creative project ideas",
  },
  {
    icon: Sparkles,
    text: "Brainstorm marketing strategies",
  },
];

export const QuickSuggestions = ({ onSuggestionClick }: QuickSuggestionsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-slide-up">
      {suggestions.map((suggestion, index) => {
        const Icon = suggestion.icon;
        return (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 px-4 justify-start text-left hover:bg-secondary hover:shadow-soft transition-smooth group"
            onClick={() => onSuggestionClick(suggestion.text)}
          >
            <Icon className="mr-3 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" size={20} />
            <span className="text-sm">{suggestion.text}</span>
          </Button>
        );
      })}
    </div>
  );
};
