import { NextRequest, NextResponse } from "next/server";
import { FONDA_SYSTEM_PROMPT } from "@/data/fondaContext";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
  const useAnthropic = !!process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "No API key configured. Add ANTHROPIC_API_KEY or OPENAI_API_KEY to your .env.local file.",
      },
      { status: 500 }
    );
  }

  if (useAnthropic) {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "messages-2023-12-15",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5",
        max_tokens: 1024,
        system: FONDA_SYSTEM_PROMPT,
        stream: true,
        messages,
      }),
    });

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader) return controller.close();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") {
                controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
                continue;
              }
              try {
                const parsed = JSON.parse(data);
                if (parsed.type === "content_block_delta") {
                  const text = parsed.delta?.text ?? "";
                  const openAiFormat = JSON.stringify({
                    choices: [{ delta: { content: text } }],
                  });
                  controller.enqueue(
                    new TextEncoder().encode(`data: ${openAiFormat}\n\n`)
                  );
                }
                if (parsed.type === "message_stop") {
                  controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
                }
              } catch {}
            }
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  // Fallback: OpenAI
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      stream: true,
      messages: [{ role: "system", content: FONDA_SYSTEM_PROMPT }, ...messages],
    }),
  });

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
