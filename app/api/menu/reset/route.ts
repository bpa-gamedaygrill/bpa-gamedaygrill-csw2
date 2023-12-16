import MenuItems from "../../../menuitems.json";
import db from "../../../../libs/prisma/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try {
        const deleteAllItems = await db.menuItem.deleteMany();
        for (let item of MenuItems.items) {
            const newItem = await db.menuItem.create({
                data: {
                    itemName: item.itemName,
                    itemPrice: item.itemPrice,
                    itemDescription: item.itemDescription,
                    imageUrl: item.imageUrl,
                    isVegetarian: item.isVegetarian,
                    type: item.type
                }
            })
        }
        return new NextResponse("Success", { status: 200 })
    } catch(error) {
        console.log('[RESET_MENUITEM_POST]', error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}