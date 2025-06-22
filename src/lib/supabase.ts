import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function connectUser(walletAddress: string) {
  const { data, error } = await supabase
    .from('users')
    .upsert([{ wallet_address: walletAddress, role: 'user' }], { onConflict: ['wallet_address'] })
    .select();
  if (error) throw error;
  return data;
}

export async function submitAgent(agentData: { name: string, description: string, category: string, creatorId: string, ipfsHash: string }) {
  const { data, error } = await supabase
    .from('agents')
    .insert([{ 
      name: agentData.name,
      description: agentData.description,
      category: agentData.category,
      creator_id: agentData.creatorId,
      ipfs_hash: agentData.ipfsHash,
      status: 'active',
      trust_score: 50,
      usage_count: 0
    }])
    .select();
  if (error) throw error;
  return data;
} 