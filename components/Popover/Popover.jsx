// import styles from './Popover.module.css'

export function Popover(props) {
    const { children, className } = props
    return <div className={className}>{children}</div>
}

export default Popover
