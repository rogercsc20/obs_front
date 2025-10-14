export type ChatMessage = { role: 'user' | 'assistant'; content: string };

export async function sendMessage(message: ChatMessage): Promise<ChatMessage> {
  await new Promise(r => setTimeout(r, 300));
  return { role: 'assistant', content: 'This is a placeholder response from claudIA.' };
}

export async function searchLogs(query: string): Promise<any[]> {
  await new Promise(r => setTimeout(r, 200));
  return [];
}

export async function listIndices(): Promise<string[]> {
  await new Promise(r => setTimeout(r, 200));
  return ['us-east-1', 'eu-central-1'];
}
