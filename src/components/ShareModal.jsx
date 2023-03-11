import { Box, Modal } from "@mui/material"
import React from "react"
import { FacebookShareButton, FacebookIcon } from "react-share"
const ShareModal = ({ open, haldleOnClose }) => {
  return (
    <Modal open={open} onClose={haldleOnClose}>
      <Box>
        <FacebookShareButton url="https://www.youtube.com/">
          <FacebookIcon />
        </FacebookShareButton>
      </Box>
    </Modal>
  )
}

export default ShareModal
