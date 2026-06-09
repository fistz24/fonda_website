import { responses, FondaResponse } from "@/data/responses";

/**
 * Normalises a string: lowercase, strip punctuation, collapse spaces.
 */
function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Score a response against the user input.
 * Returns a number: higher = better match.
 */
function score(input: string, response: FondaResponse): number {
  const normalised = normalise(input);
  const words = new Set(normalised.split(" "));
  let total = 0;

  for (const keyword of response.keywords) {
    const normKw = normalise(keyword);
    // Exact phrase match scores highest
    if (normalised.includes(normKw)) {
      total += normKw.split(" ").length * 3; // multi-word phrases score more
    } else {
      // Partial: count individual keyword words found in input
      const kwWords = normKw.split(" ");
      for (const w of kwWords) {
        if (words.has(w) && w.length > 2) total += 1;
      }
    }
  }

  return total;
}

/**
 * Find the best matching response for a user message.
 * Falls back to the "fallback" entry if nothing scores above threshold.
 */
export function findResponse(input: string): FondaResponse {
  if (!input.trim()) return responses.find((r) => r.id === "fallback")!;

  const scored = responses
    .filter((r) => r.id !== "fallback")
    .map((r) => ({ response: r, score: score(input, r) }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0];

  // If the top score is above threshold, return it
  if (best && best.score >= 2) return best.response;

  // Otherwise return fallback
  return responses.find((r) => r.id === "fallback")!;
}

/**
 * Simulates a typewriter effect by resolving text word by word.
 * Returns the full string immediately for simplicity —
 * the ChatInterface handles the animation.
 */
export function getResponse(input: string): string {
  const match = findResponse(input);
  return match.response;
}

/**
 * Get follow-up suggestions for a given response id.
 */
export function getFollowUps(responseId: string): string[] {
  const match = responses.find((r) => r.id === responseId);
  return match?.followUps ?? [];
}

/**
 * Get both response and follow-ups together.
 */
export function getFullResponse(input: string): {
  text: string;
  followUps: string[];
  id: string;
} {
  const match = findResponse(input);
  return {
    text: match.response,
    followUps: match.followUps ?? [],
    id: match.id,
  };
}
