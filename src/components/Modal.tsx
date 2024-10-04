import styles from "styles/Std.module.css"

const Modal = ({text, showing}: {text: string, showing: boolean}) => {
  return (
    <>
      {
        showing ? (
          <div className={styles.modal}>
            {text}
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
}

export default Modal
