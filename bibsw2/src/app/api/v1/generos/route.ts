import { NextResponse } from "next/server";

import dados from "@/db.json";

export async function GET() {
    return NextResponse.json({"mensagem" : "Gêneros"});
    return NextResponse.json(dados);

}