import styles from '@/styles/Events.module.css'

const Events = (props) => {
    const { id, title, description, details, events } = props

    var allEvents = JSON.parse(events)
    var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    function getYear(myEvents) {
        let years = []

        for (let i = 0; i < myEvents.length; i++) {
            var d = new Date(myEvents[i].date)

            if (years.indexOf(d.getFullYear()) <= -1)
                years.push(d.getFullYear())
        }

        return years.sort()
    }

    var eventYears = getYear(allEvents)

    return (
        <div id={id} className='flex-row-center'>
            <div className={styles.event_container}>

                <div className={styles.banner}>
                    <h4 className={styles.titleBanner}>{title}</h4>
                    <div className='body1'>
                        <p className={styles.descriptionBanner + ' body4'}>{description}</p>
                    </div>
                </div>

                {eventYears?.map((year) => (
                    <>
                        <h3 className={styles.year} key={year}>{year}</h3>

                        {allEvents?.sort((a, b) => new Date(a.date).setHours(0, 0, 0, 0) - new Date(b.date).setHours(0, 0, 0, 0))
                            .map((event) => {
                                var d = new Date(event.date)

                                if (d.getFullYear() == year)
                                    return <>
                                        <div className={styles.event} key={event.id}>
                                            <div className={styles.event_left}>
                                                <div className={styles.event_date}>
                                                    <div className={styles.date}>{d.getDate()}</div>
                                                    <div className={styles.month}>{Months[d.getMonth()]}</div>
                                                </div>
                                            </div>

                                            <div className={styles.event_right}>
                                                <h3 className={styles.event_title}>{event.title}</h3>

                                                <div className={styles.event_description}>
                                                    {event.description}
                                                </div>

                                                <div className={styles.timerow}>
                                                    <div className={styles.event_timing}>
                                                        <img src="/time.png" alt="" /> {event.time.slice(0, 5)}
                                                    </div>
                                                    <div className={styles.event_details}>
                                                        <a href={event.link}>{details}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            })}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Events
