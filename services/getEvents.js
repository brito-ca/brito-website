import { EVENTS_API_URL } from '@/constants/app'

const getEvents = async (data) => {
    const results = await fetch(EVENTS_API_URL)
    const result = await results.json()

    const events = result.map((item) => {
        return {
            id: item.id,
            title: item.title.rendered,
            description: item.acf.short_description,
            link: item.acf.event_url,
            day: item.acf.date.slice(6),
            date: new Date(
                Date.UTC(
                    item.acf.date.slice(0, 4),
                    item.acf.date.slice(4, 6) - 1,
                    item.acf.date.slice(6)
                )
            ),
            month: item.acf.date.slice(4, 6) - 1,
            year: item.acf.date.slice(0, 4),
            time: item.acf.time,
        }
    })

    return {
        id: 'events',
        title: data.title,
        description: data.description,
        details: data.more_details,
        events: JSON.stringify(events),
    }
}

export default getEvents
