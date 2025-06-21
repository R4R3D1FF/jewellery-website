import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '');

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid or missing ID' }, { status: 400 });
    }

    const fileData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData);

    const index = products.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Remove product from array
    const removedProduct = products.splice(index, 1)[0];

    // Save updated list
    await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf-8');

    return NextResponse.json({ message: 'Deleted', product: removedProduct }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}