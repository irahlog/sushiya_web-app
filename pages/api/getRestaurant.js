// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
  *[_type == "restaurant"][0]{
    ...,
    associatedMenuItemCategories[]->{
     ...,
     associatedMenuItems[] -> {
        ...,
        associatedModifiers[]->
     }
   }
}
`;

export default async function handler(req, res) {
  const restaurant = await sanityClient.fetch(query);

  res.status(200).json({ restaurant });
}
