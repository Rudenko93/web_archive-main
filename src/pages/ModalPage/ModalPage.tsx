import { useState } from "react"
import { ETypographyVariant, Typography, Button, Modal } from "ui"
import "./ModalPage.scss"

export const ModalPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalOpen = () => {
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  const handleModalSubmit = () => {
    setIsOpenModal(false)
  }

  return (
    <section className="ModalPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Modal
      </Typography>
      <Button onClick={handleModalOpen}>Open</Button>
      <Modal isOpen={isOpenModal} onCloseModal={handleModalClose} size="medium">
        <Modal.Header>
          <h2>Title</h2>
        </Modal.Header>
        <Modal.Content>
          <div>Content</div>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={handleModalSubmit} typeButton={"submit"}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
