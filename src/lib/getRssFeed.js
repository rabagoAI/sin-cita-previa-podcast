import Parser from 'rss-parser'

const parser = new Parser()

export async function getRssFeed(url) {
    try {
        const feed = await parser.parseURL(url)

        return feed.items.map(item => ({
            id: item.guid || item.link,
            title: item.title,
            description: item.contentSnippet || item.itunes?.summary || '',
            date: new Date(item.pubDate).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }),
            duration: item.itunes?.duration || '00:00',
            image: item.itunes?.image || feed.image?.url || '/images/default-episode.jpg',
            audioUrl: item.enclosure?.url,
            link: item.link
        }))
    } catch (error) {
        console.error('Error fetching RSS feed:', error)
        return []
    }
}
