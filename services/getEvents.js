import { EVENTS_API_URL } from '@/constants/app'

const getEvents = async (data) => {
    const results = await fetch(EVENTS_API_URL)
    const result = await results.json()

    function isFuture(event) {
        let ms = Date.now()

        let _when = event.acf.date
        var eventDate = new Date(_when.slice(0, 4), _when.slice(4, 6) - 1, _when.slice(6))

        return eventDate >= ms
    }

    const x = result ? result.filter(isFuture) : []

    const events = x.map((item) => {
        return {
            id: item.id,
            title: item.title.rendered,
            description: item.acf.short_description,
            link: item.acf.event_url,
            date: new Date(
                item.acf.date.slice(0, 4),
                item.acf.date.slice(4, 6) - 1,
                item.acf.date.slice(6)
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
