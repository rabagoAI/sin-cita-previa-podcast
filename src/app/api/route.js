import { NextResponse } from 'next/server'
import { getRssFeed } from '@/lib/getRssFeed'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    try {
        const episodes = await getRssFeed(url)
        return NextResponse.json(episodes)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: 500 })
    }
}
