import { NextResponse } from "next/server";

async function GET() {
    return NextResponse.json({
        fruits: [ "apples", "grapes", "oranges"]
    })
}

export async function Post(request){
     const fruits = await request.json()

     return NextResponse.json(fruits)
     }