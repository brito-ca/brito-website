import Image from 'next/image'
import Modal from 'react-modal'
import { useState } from 'react'
import { RadioButton } from '@/components'
import styles from '../../styles/Form.module.css'
import infoIcon from '../../public/images/form-info-icon.png'
import britoFormImage from '../../public/images/brito-group-image-form.svg'
import profilePictureTemplate from '../../public/images/brito-profile-picture-template.svg'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [company, setCompany] = useState('')
    const [resideInCanada, setResideInCanada] = useState('yes')
    const [city, setCity] = useState('')
    const [linkedinProfileLink, setLinkedinProfileLink] = useState('')
    const [email, setEmail] = useState('')

    const radioButtonHandler = (e) => {
        setResideInCanada(e.target.value)
    }

    Modal.setAppElement('#__next')

    const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false)

    function openProfilePictureModal() {
        setIsProfilePictureModalOpen(true)
    }
    //
    function closeProfilePictureModal() {
        setIsProfilePictureModalOpen(false)
    }

    // function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    // }

    // const customStyles = {
    //     content: {
    //         top: '50%',
    //         left: '50%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)',
    //         borderRadius: '30px',
    //         backgroundColor: 'white',
    //     },
    // }

    return (
        <>
            <div
                className={styles.formContainer}
                // style={isProfilePictureModalOpen ? { filter: 'blur(5px)' } : { filter: 'none' }}
                // It checks if the Modal is open and then blurs background
                // Must find a way to check size of screen or talk to UI/UX team and check if it is design intended the difference on the background once the modal is open
            >
                <h3 className={styles.formTitle}>Want to join Brito&#39;s network?</h3>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <label className={styles.labelForm}>
                                Your full name
                                <span className={styles.mandatoryFieldSpan}>*</span>
                            </label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. Amanda costa'
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                            <label className={styles.labelForm}>Your expertise</label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. UX Designer'
                                value={expertise}
                                onChange={(event) => setExpertise(event.target.value)}
                            />
                            <label className={styles.labelForm}>Your company</label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. TD bank'
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                            />
                            <label className={styles.labelForm}>Are you residing in Canada?</label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioButtonHandler}
                                    id='1'
                                    isSelected={resideInCanada === 'yes'}
                                    label='Yes'
                                    value='yes'
                                />
                            </label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioButtonHandler}
                                    id='2'
                                    isSelected={resideInCanada === 'no'}
                                    label='No'
                                    value='no'
                                />
                            </label>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.roundedFormImage}
                                src={britoFormImage}
                                alt='Picture of members of BRITO co-working in their computers in one of the meetings '
                            />
                        </div>
                        <div className={styles.immigrationStatusSection}>
                            <label className={styles.labelForm}>
                                In wich city do you live in Canada?
                            </label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. Ottawa'
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                            />
                            <label htmlFor='immigration-status' className={styles.labelForm}>
                                Immigration Status
                                <span>
                                    <Image
                                        className={styles.infoIcon}
                                        src={infoIcon}
                                        alt='Info Icon - A circle with an exclamation point inside'
                                        width={20}
                                    />
                                </span>
                            </label>
                            <select
                                id='immigration-status'
                                defaultValue={'DEFAULT'}
                                className={styles.immigrationStatusList}
                            >
                                <option value='DEFAULT' disabled>
                                    Select
                                </option>
                                <option value='one'>Canadian Citizen (Foreign born)</option>
                                <option value='two'>Convention Refugee / Protected Person</option>
                                <option value='tree'>Permanent Resident</option>
                                <option value='four'>
                                    Temporary Resident WITHOUT a Work Permit
                                </option>
                                <option value='five'>Temporary Resident WITH a Work Permit</option>
                                <option value='six'>Other</option>
                            </select>
                        </div>
                        <div className={styles.linkedinField}>
                            <div>
                                <label className={styles.labelForm}>LinkedIn profile</label>
                                <input
                                    className={styles.inputForm}
                                    placeholder='Paste your profile link'
                                    value={linkedinProfileLink}
                                    onChange={(event) => setLinkedinProfileLink(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.emailField}>
                            <label className={styles.labelForm}>
                                E-mail<span className={styles.mandatoryFieldSpan}>*</span>
                            </label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. john@gmail.com'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className={styles.uploadPhotoField}>
                            <label className={styles.labelForm}>
                                Upload photo<span className={styles.mandatoryFieldSpan}>*</span>
                            </label>
                            <button
                                type='button'
                                className={styles.chooseFileButton}
                                onClick={openProfilePictureModal}
                            >
                                Choose file
                            </button>
                            <Modal
                                isOpen={isProfilePictureModalOpen}
                                // onAfterOpen={afterOpenModal}
                                overlayClassName='react-model-overlay'
                                onRequestClose={closeProfilePictureModal}
                                // style={styles.profilePictureModal}
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                    content: {
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)',
                                        borderRadius: '30px',
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                <div className={styles.profilePictureModal}>
                                    <h1 className={styles.profilePictureModalTitle}>
                                        Profile Picture
                                    </h1>
                                    <p className={styles.profilePictureModalDescription}>
                                        A profile picture make a positive first impression on
                                        potential connections It can also help to differentiate you
                                        from others in your network and make your profile stand out
                                        in search results.
                                    </p>
                                    <Image
                                        src={profilePictureTemplate}
                                        alt="A front face picture of a man. It's a template for the profile picture field before the user selects its own"
                                        className={styles.profilePictureAvatar}
                                    />

                                    <button
                                        type='button'
                                        className={styles.profilePictureModalSaveButton}
                                    >
                                        Save
                                    </button>
                                    <button className={styles.profilePictureModalChangeButton}>
                                        Change
                                    </button>
                                </div>
                            </Modal>
                        </div>
                        <div className={styles.fileChosenBox}>
                            <p className={styles.chosenBoxText}>No file chosen</p>
                        </div>
                        <button
                            type='button'
                            className={styles.sendButton}
                            onClick={(e) => e.preventDefault()}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
