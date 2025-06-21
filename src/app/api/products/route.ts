import { NextRequest, NextResponse } from "next/server";
import path from "path";
import {promises as fs} from "fs";

const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');

export async function GET() {
    try {
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const products = JSON.parse(fileContents);
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description, price, category, inStock, image } = body;

    // Basic validation
    if (!name || typeof price !== 'number' || !image) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Read existing data
    const json = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(json);

    // Create new product
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      description,
      price,
      category,
      inStock,
      image
    };

    products.push(newProduct);

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf-8');

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error writing to file:', error);
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
  }
}