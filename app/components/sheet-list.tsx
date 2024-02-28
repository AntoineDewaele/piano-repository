import { PrismaClient } from "@prisma/client"

async function getSheets() {
    const prisma = new PrismaClient()
    return await prisma.sheets.findMany()
}
  
export default async function SheetList() {
    const sheets = await getSheets()
    return (
        <ul role="list" className="divide-y divide-gray-100">
        {sheets.map((sheet) => (
            <li key={sheet.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/piano-icon.jpg" alt="" />
                <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{sheet.title}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{sheet.author}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{sheet.level}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    <time dateTime={sheet.created_at.toDateString()}>{sheet.created_at.toDateString()}</time>
                </p>
            </div>
            </li>
        ))}
        </ul>
    )
}
  