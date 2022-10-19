import data from './data.json';


export function getProductsByCategory(category:any, subcategory:any) {
    const products = data.filter((product:any) => product.category === category && product.subcategory=== subcategory);
    return products;
  }
  
  export default function handler(req:any, res:any) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
      const products = getProductsByCategory(req.query.category, req.query.subcategory);
      res.status(200).json(products);
    }
  }