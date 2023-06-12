import styles from '@/styles/Events.module.css'
import { Icon } from '..'

const Events = (props) => {
    const { id, title, description, details, events, pageLocale } = props

    const allEvents = Object.values(
        JSON.parse(events).reduce((acc, { year, ...rest }) => {
            acc[year] = { year, data: [...(acc[year]?.data || []), { year, ...rest }] }
            return acc
        }, {})
    )

    const locale = {
        en: `en-ca`,
        pt: `pt-br`,
        fr: `fr-ca`,
    }

    const getMonth = (monthDate) =>
        monthDate
            .toLocaleString(locale[pageLocale], {
                month: 'long',
            })
            .toUpperCase()

    const sortByDate = (array, key) => array.sort((a, b) => new Date(a[key]) - new Date(b[key]))

    return (
        <div id={id} className='flex-row-center'>
            <div className={styles.event_container}>
                <div className={styles.banner}>
                    <h4 className={styles.titleBanner}>{title}</h4>
                    <div className='body1'>
                        <p className={styles.descriptionBanner + ' body4'}>{description}</p>
                    </div>
                </div>

                {allEvents?.map((event) => (
                    <section key={event.year}>
                        <h3 className={styles.year}>{event.year}</h3>
                        {sortByDate(event.data, 'date').map((event) => {
                            const eventDate = new Date(event.date)
                            return (
                                <section key={event.id}>
                                    <div className={styles.event}>
                                        <div className={styles.event_left}>
                                            <div className={styles.event_date}>
                                                <div className={styles.date}>
                                                    {eventDate.getDate()}
                                                </div>
                                                <div className={styles.month}>
                                                    {getMonth(eventDate)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.event_right}>
                                            <h3 className={styles.event_title}>{event.title}</h3>

                                            <div className={styles.event_description}>
                                                {event.description}
                                            </div>

                                            <div className={styles.timerow}>
                                                <div className={styles.event_timing}>
                                                    {event.time.slice(0, 5)}
                                                    <Icon variant='clock' />
                                                </div>
                                                <div className={styles.event_details}>
                                                    <a
                                                        href={event.link}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        {details}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })}
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Events
