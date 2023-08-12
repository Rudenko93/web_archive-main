import React, { useState } from "react"
import { template } from "./template"
import {
  ETypographyVariant,
  Typography,
  Button,
  DocumentViewer,
  Modal,
} from "ui"
import "./DocumentViewerPage.scss"

export const DocumentViewerPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalOpen = () => {
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <section className="DocumentViewerPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Document viewer
      </Typography>

      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Document viewer with modal window
      </Typography>

      <Button onClick={handleModalOpen}>Open Modal Window</Button>

      <Modal
        className="DocumentViewerPage__modal"
        isOpen={isOpenModal}
        onCloseModal={handleModalClose}
        size="large">
        <DocumentViewer template={template} />
      </Modal>
      <br />
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Document viewer with standard "iframe" tag
      </Typography>
      <iframe
        srcDoc={template}
        title="Document"
        width="200px"
        height="200px"></iframe>
    </section>
  )
}
