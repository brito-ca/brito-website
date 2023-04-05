import { useState } from 'react'
import { Popover, Icon, Modal, FormInput, Checkbox, Image } from '@/components'
import styles from '../../styles/Form.module.css'
import labels from '@/constants/labels.en'

const Form = (props) => {
    const { id, fields, image, smallLogo } = props
    const [formValues, setFormValues] = useState({
        full_name: '',
        expertise: '',
        company: '',
        residein_canada: false,
        province: '',
        city: '',
        immigration_status: '',
        linkedin_profile: '',
        email: '',
    })

    const handleResideInCanada = () => {
        setResideInCanada(!resideInCanada)
        setFormValues({
            ...formValues,
            province: 'Alberta',
            residein_canada: !resideInCanada,
        })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubscriptionModalOpen(!subscriptionModalOpen)

        // const formDataJSON = JSON.stringify(formValues)
        // const api = 'https://brito.it/wp-json/wp/v2/member'
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: formDataJSON,
        // }

        // const res = await fetch(api, options)
        // if (res.status === 200) {
        //     setSubscriptionModalOpen(!subscriptionModalOpen)
        //     setFormValues({
        //         full_name: '',
        //         expertise: '',
        //         company: '',
        //         residein_canada: false,
        //         province: '',
        //         city: '',
        //         immigration_status: '',
        //         linkedin_profile: '',
        //         email: '',
        //     })
        // } else {
        //     alert(
        //         `Error: ${res.status} ${res.statusText}  \nSomething went wrong. Please try again.`
        //     )
        // }
    }

    function getField(fields, id) {
        return fields.find((item) => item?.id === id) || {}
    }

    const [immigrationStatusPopover, setImmigrationStatusPopover] = useState(false)
    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
    const [resideInCanada, setResideInCanada] = useState(false)

    return (
        <div id={id} className='flex-row-center'>
            <Image
                className={`${styles.mobileFormImage} ${styles.roundedFormImage} vertical-margin-md`}
                alt={image.alt}
                {...image}
            />
            <div className={styles.formContainer}>
                <h4 className={styles.formTitle}>{fields.title}</h4>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <FormInput
                                name='full_name'
                                mandatory='yes'
                                fieldStyle={styles.fullNameField}
                                labelContent={getField(fields, 'fullname').label}
                                placeholder={getField(fields, 'fullname').placeholder}
                                value={formValues.fullName}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='expertise'
                                fieldStyle={styles.expertiseField}
                                labelContent={getField(fields, 'expertise').label}
                                placeholder={getField(fields, 'expertise').placeholder}
                                value={formValues.expertise}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='company'
                                fieldStyle={styles.companyField}
                                labelContent={getField(fields, 'company').label}
                                placeholder={getField(fields, 'company').placeholder}
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>
                                {getField(fields, 'residein_canada').label}
                            </label>
                            <Checkbox
                                name='residein_canada'
                                onChange={handleResideInCanada}
                                id='1'
                                label='Yes'
                                value={resideInCanada}
                            />
                        </div>
                        <div className={styles.provinceField}>
                            <label htmlFor='province' className={styles.labelForm}>
                                {getField(fields, 'province').label}
                            </label>

                            <select
                                disabled={!formValues.residein_canada}
                                name='province'
                                value={formValues.province}
                                onChange={handleChange}
                                id='province'
                                className={styles.inputForm}
                                required
                            >
                                {getField(fields, 'province')
                                    .value.split(',')
                                    .map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <FormInput
                            disabled={!formValues.residein_canada}
                            name='city'
                            fieldStyle={styles.cityField}
                            labelContent={getField(fields, 'city').label}
                            value={formValues.city}
                            placeholder={getField(fields, 'city').placeholder}
                            onChange={handleChange}
                        />
                        <div className={styles.immigrationStatusSection}>
                            <label htmlFor='immigration-status' className={styles.labelForm}>
                                {getField(labels, 'immigration_status').label}
                                <span
                                    className={styles.infoIcon}
                                    onMouseEnter={() => setImmigrationStatusPopover(true)}
                                    onMouseLeave={() => setImmigrationStatusPopover(false)}
                                >
                                    <Icon variant={'exclamation'} className={styles.infoIcon} />
                                    {immigrationStatusPopover && (
                                        <Popover>
                                            <p>{fields.statusInformationPopover}</p>
                                        </Popover>
                                    )}
                                </span>
                            </label>

                            {/* <select
                                disabled={!formValues.residein_canada}
                                name='immigration_status'
                                value={formValues.immigration_status}
                                onChange={handleChange}
                                id='immigration-status'
                                className={styles.inputForm}
                                required
                            >
                                <option value='' disabled>
                                    Select
                                </option>
                                {fields.immigrationStatus.values.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select> */}
                        </div>
                        <div className={styles.imageContainer}>
                            <Image className={styles.roundedFormImage} alt={image.alt} {...image} />
                        </div>

                        <FormInput
                            name='linkedin_profile'
                            fieldStyle={styles.linkedinField}
                            labelContent={getField(fields, 'linkedin').label}
                            placeholder={getField(fields, 'linkedin').placeholder}
                            value={formValues.linkedinProfileLink}
                            onChange={handleChange}
                        />

                        <FormInput
                            name='email'
                            mandatory='yes'
                            fieldStyle={styles.emailField}
                            labelContent={getField(fields, 'email').label}
                            placeholder={getField(fields, 'email').placeholder}
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <button className={styles.sendButton} type='button' onClick={handleSubmit}>
                            {fields.sendButton}
                        </button>
                        {/* <Modal
                            className={styles.subscriptionModalContainer}
                            isOpen={subscriptionModalOpen}
                            setIsOpen={setSubscriptionModalOpen}
                        >
                            <Image
                                className={styles.logoSubscriptionModal}
                                alt={'smallLogo.alt'}
                                {...smallLogo}
                            />
                            <div className={styles.subscriptionModalTextDescriptionContainer}>
                                <h1 className={styles.subscriptionModalTitle}>
                                    {fields.subscriptionModal.title}
                                </h1>
                                <p className={styles.subscriptionModalDescription}>
                                    {fields.subscriptionModal.approval}
                                </p>
                                <p className={styles.subscriptionModalDescription}></p>
                                {fields.subscriptionModal.notification}
                                <button
                                    type='button'
                                    className={styles.continueBrowsingButton}
                                    onClick={() => setSubscriptionModalOpen(!subscriptionModalOpen)}
                                >
                                    {fields.subscriptionModal.continueBrowsing}
                                </button>
                            </div>
                        </Modal> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
