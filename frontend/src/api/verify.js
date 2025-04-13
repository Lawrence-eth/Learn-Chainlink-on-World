import { verifyCloudProof } from '@worldcoin/idkit';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const proof = req.body;
    const app_id = import.meta.env.VITE_WORLD_ID_APP_ID;
    const action = import.meta.env.VITE_WORLD_ID_ACTION;

    const verifyRes = await verifyCloudProof(proof, app_id, action);

    if (verifyRes.success) {
      // Here you can add your own logic, like:
      // - Creating a user session
      // - Storing the verification in your database
      // - etc.
      return res.status(200).json(verifyRes);
    } else {
      return res.status(400).json(verifyRes);
    }
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({ error: 'Verification failed' });
  }
} 